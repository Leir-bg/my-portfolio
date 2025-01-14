const { useState, useEffect } = React
const { createRoot } = ReactDOM

const wrapper = document.getElementById('wrapper')
const root = createRoot(wrapper)

let notFoundCounter = 0

const namespace = encodeURIComponent('portfolio-gabrielcorpuz-new')
const keyspace = encodeURIComponent('visits')

const getVisits = async () => {
    const response = await fetch(`https://counterapi-9hre.onrender.com/${namespace}/${keyspace}/up`)
    const data = await response.json()
    return data
}

const terminalOptions = [
    {name: 'Home', key: 'home'},
    {name: 'About', key: 'about'},
    {name: 'Experience and Skills', key: 'exp'},
    {name: 'Projects', key: 'prjs'},
    {name: 'Resume', key: 'resume'},
    {name: 'Contact', key: 'contact'},
    {name: '404', key: '404'}
]

const getOption = (key) => {
    const option = terminalOptions.find(opt => opt.key === key)
    return option?.name ?? '404'
}

const downloadResume = () => {
    const link = document.createElement('a')
    link.href = 'Resume.pdf'
    link.download = 'resume-gabriel-corpuz'
    link.click()
}

const downloadLogs = async () => {
    const response = await fetch(`https://api.counterapi.dev/v1/${namespace}/${keyspace}/list?group_by=day`)
    const data = await response.json()
    
    const link = document.createElement('a')
    link.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'}))
    link.download = 'logs.json'
    link.click()
}

function RandomizedText({text}){
    const [displayText, setDisplayText] = useState(text)

    if(!isReduceMotion){
        useEffect(() => {
            const speed = 50
            const baseString = '1234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz .,!@#$%&'
    
            const skip = 20
            const charJump = Math.floor(Math.abs(text.length / skip))
            
            let iteration = 0
    
            function shuffleText(){
                if(iteration <= text.length){
                    const randomChar = baseString.charAt(Math.floor(Math.random() * baseString.length))
                    const newText = text.slice(0, iteration) + randomChar + text.slice(iteration + skip)
    
                    setDisplayText(newText)
                    iteration += charJump || text.length / 3

                    setTimeout(shuffleText, speed)
                }
                else{
                    setDisplayText(text)
                }
            }
    
            shuffleText()
        }, [text])
    }

    return <>{displayText}</>
}

function TerminalHistory({currstate, visits}) {
    return <li>G:/Users/GUEST_{visits}/{getOption(currstate)}</li>
}

function TerminalSection({currState, stateSetter}) {
    const renderContent = () => {
        switch(currState){
            case 'home':
                return (
                    <>
                    <p><RandomizedText text="Hi! Welcome to my portfolio." /></p>
                    <p>
                        <RandomizedText text="To interact with the terminal, input 'cd ../' followed by the " />
                        <span className="option"><RandomizedText text="(option)"/></span>
                        <RandomizedText text="."/>
                    </p>
                    </>
                )
            case 'about':
                return (
                    <div className="col2">
                        <div className="pp">
                            <img src="./res/images/profile.jpg" alt="Gabriel D. Corpuz" />
                            <p><RandomizedText text="Hello! I'm Gabriel Corpuz, a 26-year-old front-end web developer based in Cebu City. I'm passionate about creating dynamic and responsive websites, and I'm currently on a journey to become a full-stack developer." /></p>
                        </div>
                        <div className="edu">
                            <h2><RandomizedText text="Education:" /></h2>
                            <p><RandomizedText text="Saint Columban College - Bachelor of Science in Information Technology" /></p>
                        </div>
                        <div className="interest">
                            <h2><RandomizedText text="Interests:" /></h2>
                            <p><RandomizedText text="CSS/JS updates, AI, other advancements in technology, code techniques" /></p>
                        </div>
                        <div className="hobby">
                            <h2><RandomizedText text="Hobbies:"/></h2>
                            <p><RandomizedText text="Learning new code techniques, reading books/ebooks, playing games"/></p>
                        </div>
                    </div>
                )
            case 'exp':
                return (
                    <>
                    <h2><RandomizedText text="Experience:" /></h2>
                    <p><RandomizedText text="4+ years: Front End Developer" /></p>
                    <br/>
                    <h2><RandomizedText text="Tech Stack:"/></h2>
                    <ul col="3">
                        <li><RandomizedText text="HTML"/></li>
                        <li><RandomizedText text="CSS/TailwindCSS"/></li>
                        <li><RandomizedText text="JS"/></li>
                        <li><RandomizedText text="JQuery"/></li>
                        <li><RandomizedText text="React"/></li>
                        <li><RandomizedText text="NodeJS"/></li>
                        <li><RandomizedText text="Puppeteer"/></li>
                        <li><RandomizedText text="ExpressJS"/></li>
                        <li><RandomizedText text="AngularJS"/></li>
                        <li><RandomizedText text="PHP/Laravel/Cake"/></li>
                        <li><RandomizedText text="Wordpress"/></li>
                        <li><RandomizedText text="Pug"/></li>
                        <li><RandomizedText text="SQL"/></li>
                        <li><RandomizedText text="Docker"/></li>
                        <li><RandomizedText text="Git"/></li>
                    </ul>
                    </>
                )
            case 'resume':
                downloadResume()
                setTimeout(() => stateSetter('home'), 0)
            case 'contact':
                return (
                    <>
                    <h2><RandomizedText text="Contact:"/></h2>
                    <p>
                        <RandomizedText text="Cellphone:"/>&nbsp;
                        <a href="tel:+639305933195"><RandomizedText text="+63 930 593 3195"/></a>
                    </p>
                    <p>
                        <RandomizedText text="Email:"/>&nbsp;
                        <a href="mailto:gabrielcorpuz0914@gmail.com"><RandomizedText text="gabrielcorpuz0914@gmail.com"/></a>
                    </p>
                    <p>
                        <RandomizedText text="LinkedIn:"/>&nbsp;
                        <a target="_blank" href="https://www.linkedin.com/in/gcorpuz091416/"><RandomizedText text="www.linkedin.com/in/gcorpuz091416"/></a>
                    </p>
                    </>
                )
            case 'log':
                downloadLogs()
                setTimeout(() => stateSetter('home'), 0)
            case 'prjs':
                return (
                    <>
                    <h2><RandomizedText text="Projects" /></h2>
                    <br/>
                    <TerminalProject/>
                    </>
                )
            default:
                stateSetter('404')
                return (
                    <>
                    <p><RandomizedText text="Page not found (ᴗ_ ᴗ。)"/></p>
                    </>
                )
                
        }
    }

    return renderContent()
}

function TerminalOptions({optionMap, currState}) {
    return (
        <>
        {optionMap.map((opt) => (
            opt.key !== currState &&
            opt.key !== '404' && (
                <li key={`${currState}-${opt.key}`}>
                    <RandomizedText text={opt.name}/>&nbsp;
                    <small><RandomizedText text={`(${opt.key})`}/></small>
                </li>
            )
        ))}
        </>
    )
}

function TerminalInput({currstate, stateSetter, visits}) {
    const handleInput = (e) => {
        try{
            const value = new RegExp(`cd ../(.*)`).exec(e.target[0].value)
            stateSetter(value[value.length - 1])
        }
        catch(err){
            notFoundCounter++
            stateSetter('404')
        }

        e.target[0].value = ''
    }

    return (
        <form className='input_wrap' onSubmit={e => {
            e.preventDefault()
            handleInput(e)
        }}>
            <label htmlFor="input">G:/Users/GUEST_{visits}/{getOption(currstate)}&gt;</label>
            <input id="input" type="text" placeholder="cd ../option" />
        </form>
    )
}

const projects = [
    {
        name: 'Portfolio',
        key: 'portfolio',
        desc: 'A simple portfolio of myself to showcase my skills and capabilities.',
        tools: ['React', 'HTML', 'CSS', 'JS'],
        img: 'portfolio.png',
        repo: 'https://github.com/Leir-bg/my-portfolio'
    },
    {
        name: 'VSCode extension for NativeCamp FE devs',
        key: 'fetool',
        desc: 'A tool I made to help NativeCamp front-end devs to quickly navigate through git branches, toggle test configs, and more.',
        tools: ['VSCode', 'JS'],
        img: 'fetool.png',
        repo: ''
    },
    {
        name: 'Go Dark Proweaver',
        key: 'godark',
        desc: 'A custom Wordpress plugin I made for Proweaver, Inc. websites to quickly switch color themes, there were no compatible dark theme plugins for their websites before. (No longer maintained)',
        tools: ['PHP', 'JS', 'CSS'],
        img: 'unavailable.jpg',
        repo: 'https://github.com/Leir-bg/go-dark-proweaver'
    },
    {
        name: 'Bulk Edit tool',
        key: 'bulkedit',
        desc: 'Made to aid and accelerate the process of making textbooks for NativeCamp.',
        tools: ['NodeJS', 'ExpressJS', 'JS', 'Pug', 'CSS'],
        img: 'bulkedit.png',
        repo: 'https://github.com/Leir-bg/bulk-edit-content-tool'
    },
    {
        name: 'Bulk Create Folder tool',
        key: 'bulkcreate',
        desc: 'Made to aid and accelerate the process of making textbooks for NativeCamp.',
        tools: ['NodeJS', 'ExpressJS', 'JS', 'Pug', 'CSS'],
        img: 'bulkcreate.png',
        repo: 'https://github.com/Leir-bg/bulk-create-folder-tool'
    },
    {
        name: 'Web Scraper',
        key: 'webscraper',
        desc: 'Web scraping practice project.',
        tools: ['NodeJS', 'Puppeteer', 'JS'],
        img: '',
        repo: ''
    },
    {
        name: 'LaagTaCebu (in development)',
        key: 'laagtacebu',
        desc: 'A big project I am currently working on, a travel app for Cebu City that focuses on streamlining the process of finding places to visit, travel planning, and more.',
        tools: ['Laravel', 'Docker', 'Blade', 'TailwindCSS', 'JS'],
        img: 'laagtacebu.png',
        repo: ''
    }
]

function TerminalProject() {
    const projectsSection = document.querySelector('.projects_section')
    const projectContainer = projectsSection.querySelector('.project')

    const iconMap = {
        'html': 'html.svg',
        'css': 'css.svg',
        'js': 'js.svg',
        'react': 'react.svg',
        'nodejs': 'nodejs.png',
        'expressjs': 'expressjs.svg',
        'pug': 'pug.svg',
        'laravel': 'laravel.svg',
        'docker': 'docker.svg',
        'blade': 'blade.svg',
        'tailwindcss': 'tailwind.svg',
        'php': 'php.png',
        'puppeteer': 'puppeteer.svg',
        'vscode': 'vscode.svg'
    }

    const handleClick = (currProject = '') => {
        const project = projects.find(prj => prj.key === currProject)
        if(project){
            projectsSection.classList.remove('active')

            setTimeout(() => {
                const loadProject = new Promise(resolve => {
                    resolve([project.name, project.img, project.desc, project.tools, project.repo])
                }).then(data => {
                    const [name, img, desc, tools, repo] = data
                    projectContainer.innerHTML = `
                        <img class="hero" src="./res/images/screenshots/${img != '' ? img : 'unavailable.jpg'}" alt="${name}" title="${name}"/>
                        <h2>${name}</h2>
                        <p>${desc}</p>
                        <h3>Tools used:</h3>
                        <ul>
                            ${tools.map(tool => `<li><img src="./res/images/icons/${iconMap[tool.toLowerCase()]}" alt="${tool}" title="${tool}"/></li>`).join('')}
                        </ul>
                        ${repo ? `<a target="_blank" href="${repo}">View on GitHub</a>` : '<p>Private Repository (for security reasons)</p>'}`
                }).then(() => {
                    projectsSection.classList.add('active')
                })
            }, 1000)
        }
    }

    return (
        <div>
            {projects.map(prj => (
                <p onClick={() => handleClick(prj.key)} id={prj.key} className="hoverable" key={prj.key}>
                    <RandomizedText text={prj.name} />
                </p>
            ))}
        </div>
    )
}

function TerminalWrapper({option}) {
    const [state, setState] = useState('home')
    const [visits, setVisits] = useState('#')

    useEffect(() => {
        const bg = $('main').find('.animated_bg')
        const section = $('main').find('section')
        bg.addClass(`${state != '404' ? state : 'not_found'}`)
        section.addClass(`${state != '404' ? state : 'not_found'}`)
        
        let classArray = bg.attr('class').split(' ')
        if(classArray.length > 2){
            bg.removeClass(`${classArray[1]}`)
        }
    }, [state])

    useEffect(() => {
        getVisits().then(data => {
            setVisits(data.count)
        })
    }, [])

    return (
        <>
        <ul className='history'>
        <TerminalHistory currstate={state} visits={visits} />
        </ul>
        
        <section>
        <TerminalSection currState={state} stateSetter={setState} />
        </section>
        
        <ol type='1' className='options'>
        <TerminalOptions optionMap={terminalOptions} currState={state} />
        </ol>
        
        <TerminalInput currstate={state} stateSetter={setState} visits={visits} />
        </>
    )
}

root.render(<TerminalWrapper />)