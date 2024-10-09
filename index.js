const { useState, useEffect } = React
const { createRoot } = ReactDOM

const wrapper = document.getElementById('wrapper')
const root = createRoot(wrapper)

const terminalOptions = [
    {name: 'Home', key: 'home'},
    {name: 'About', key: 'about'},
    {name: 'Experience and Skills', key: 'exp'},
    {name: 'Resume', key: 'resume'},
    {name: 'Contact', key: 'contact'},
    {name: '404', key: '404'}
]

let notFoundCounter = 0

const namespace = encodeURIComponent('portfolio-gabrielcorpuz-new')
const keyspace = encodeURIComponent('visits')

const getVisits = async () => {
    const response = await fetch(`https://api.counterapi.dev/v1/${namespace}/${keyspace}/up`)
    const data = await response.json()
    return data
}

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
    return <li>G:\Users\GUEST_{visits}\{getOption(currstate)}</li>
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
                    <h2><RandomizedText text="Toolset:"/></h2>
                    <p><RandomizedText text="JQuery, React, NodeJS, Express, PHP, Laravel, Wordpress, Docker, AngularJS"/></p>
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
                        <a href="https://www.linkedin.com/in/gcorpuz091416/"><RandomizedText text="www.linkedin.com/in/gcorpuz091416"/></a>
                    </p>
                    </>
                )
            case 'log':
                downloadLogs()
                setTimeout(() => stateSetter('home'), 0)
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
            <label htmlFor="input">G:\Users\GUEST_{visits}\{getOption(currstate)}&gt;</label>
            <input id="input" type="text" placeholder="cd ../option" />
        </form>
    )
}

function TerminalWrapper({option}) {
    const [state, setState] = useState('home')
    const [visits, setVisits] = useState('#')

    useEffect(() => {
        const bg = $('main').find('.animated_bg')
        bg.addClass(`${state != '404' ? state : 'not_found'}`)
        
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