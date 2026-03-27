import type { RefObject } from "react"
import RandomizedText from "@/components/RandomizedText"
import { projects } from '@/data/ProjectData'
import { switchProject } from "@/store/projectReducer"
import { useAppDispatch, useAppSelector } from "@/hooks/StoreHook"

const iconMap: Record<string, string> = {
    html: 'html.svg',
    css: 'css.svg',
    js: 'js.svg',
    react: 'react.svg',
    nodejs: 'nodejs.png',
    expressjs: 'expressjs.svg',
    pug: 'pug.svg',
    laravel: 'laravel.svg',
    docker: 'docker.svg',
    blade: 'blade.svg',
    tailwindcss: 'tailwind.svg',
    php: 'php.png',
    puppeteer: 'puppeteer.svg',
    vscode: 'vscode.svg',
    mongodb: 'mongodb.svg',
    render: 'render.jpg',
    sql: 'sql.svg',
    vite: 'vite.svg',
    fastify: 'fastify.png',
    knex: 'knex.svg',
    expo: 'expo.png',
    ts: 'typescript.png',
    firebase: 'firebase.png'
}

import { openProjects, closeProjects } from "@/store/projectReducer"

interface ProjectsPageProps {
    projectsSectionRef: RefObject<HTMLDivElement | null>
    projectContainerRef: RefObject<HTMLDivElement | null>
}

const ProjectsPage = ({ projectsSectionRef, projectContainerRef }: ProjectsPageProps) => {
    const dispatch = useAppDispatch()
    const currentProject = useAppSelector((state) => state.project.currProject)

    const handleClick = (currProject: string = currentProject) => {
        const allProjects = [...projects.major, ...projects.minor];
        const project = allProjects.find(prj => prj.key === currProject)

        if (project) {
            dispatch(switchProject(project.key))
            dispatch(closeProjects())

            setTimeout(() => {
                if (projectContainerRef.current && projectsSectionRef.current) {
                    projectContainerRef.current.innerHTML = `
                    <img class="hero" src="./images/screenshots/${project.img != '' ? project.img : 'unavailable.jpg'}" alt="${project.name}" title="${project.name}" width=${project.maxwidth}/>
                            <h2>${project.name}</h2>
                            <p>${project.desc}</p>
                            <h3>Tools used:</h3>
                            <ul>
                                ${project.tools.map(tool => `<li><img src="./images/icons/${iconMap[tool.toLowerCase()] || 'unavailable.jpg'}" alt="${tool}" title="${tool}"/></li>`).join('')}
                            </ul>
                            ${project.repo ? `<a target="_blank" href="${project.repo}">View on GitHub</a>` : '<p>Private Repository (for security reasons)</p>'}
                            ${project.link != '' ? `<a target="_blank" href="${project.link}">${project.link}</a>` : ''}
                    `
                    dispatch(openProjects())
                }
            }, 500)
        }
    }

    return (
        <>
            <h2><RandomizedText text="Projects" /></h2>
            <br />
            <div className="terminal_project">
                <div>
                    <h3><RandomizedText text="Major Projects" /></h3>
                    {projects.major.map(prj => (
                        <p onClick={() => handleClick(prj.key)} id={prj.key} className="hoverable" key={prj.key}>
                            <RandomizedText text={prj.name} />
                        </p>
                    ))}
                    <br />
                    <h3><RandomizedText text="Minor Projects" /></h3>
                    {projects.minor.map(prj => (
                        <p onClick={() => handleClick(prj.key)} id={prj.key} className="hoverable" key={prj.key}>
                            <RandomizedText text={prj.name} />
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectsPage
