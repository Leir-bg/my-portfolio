import { useRef } from 'react'
import { useAppSelector } from '@/hooks/StoreHook'
import AnimatedBackground from '@/components/AnimatedBackground'
import MacWindowOptions from '@/components/MacWindowOptions'
import TerminalPath from '@/components/TerminalPath'
import TerminalOptions from '@/components/TerminalOptions'
import TerminalInput from '@/components/TerminalInput'
import ProjectsSection from '@/components/ProjectsSection'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Experience from '@/pages/Experience'
import ProjectsPage from '@/pages/ProjectsPage'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

import '@/App.css'

function App() {
	const currentPage = useAppSelector((state) => state.page.currentPage)
	const wrapperRef = useRef<HTMLDivElement>(null)
	const projectsSectionRef = useRef<HTMLDivElement>(null)
	const projectContainerRef = useRef<HTMLDivElement>(null)

	const downloadResume = () => {
		const link = document.createElement('a')
		link.href = '/public/resume.pdf'
		link.download = 'resume-gabriel-corpuz'
		link.click()
	}

	const downloadLogs = async () => {
		const namespace: string = encodeURI(`${import.meta.env.VITE_COUNTER_NAMESPACE}`)
		const keyspace: string = encodeURI(`${import.meta.env.VITE_COUNTER_KEYSPACE}`)
		const uri1: string = encodeURI(`${import.meta.env.VITE_COUNTER_URI_1}`)
		const uri2: string = encodeURI(`${import.meta.env.VITE_COUNTER_URI_2}`)

		let response = await fetch(`${uri2}/${namespace}/${keyspace}/list?group_by=day`)

		if (response.status !== 200) {
			response = await fetch(`${uri1}/${namespace}/${keyspace}/log`)
		}

		const data = await response.json()

		const link = document.createElement('a')
		link.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }))
		link.download = 'logs.json'
		link.click()
	}

	const renderPage = () => {
		switch (currentPage) {
			case 'home':
				return <Home />
			case 'about':
				return <About />
			case 'exp':
				return <Experience />
			case 'prjs':
				return <ProjectsPage projectsSectionRef={projectsSectionRef} projectContainerRef={projectContainerRef} />
			case 'resume':
				downloadResume()
				return <Home />
			case 'contact':
				return <Contact />
			case 'logs':
				downloadLogs()
				return <Home />
			default:
				return <NotFound />
		}
	}

	return (
		<>
			<AnimatedBackground />
			<div className="terminal_wrapper">
				<div className="terminal">
					<MacWindowOptions />

					<div className="wrapper" id="wrapper" ref={wrapperRef}>
						<TerminalPath />

						<section>
							{renderPage()}
						</section>

						<TerminalOptions />
						<TerminalInput wrapperRef={wrapperRef} />
					</div>
				</div>
				<ProjectsSection ref={projectsSectionRef} projectContainerRef={projectContainerRef} />
			</div>
		</>
	)
}

export default App
