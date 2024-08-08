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

// let notFoundCounter = 0

const namespace = encodeURIComponent('portfolio-gabrielcorpuz')
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
    link.remove()
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
                    <p>Hi! Welcome to my portfolio.</p>
                    <p>To interact with the terminal, input 'cd ../' followed by the <span>(option)</span>.</p>
                    </>
                )
            case 'about':
                return (
                    <div className="col2">
                        <div className="pp">
                            <img src="./res/images/profile.jpg" alt="Gabriel D. Corpuz" />
                            <p>Hello! I'm Gabriel Corpuz, a 26-year-old front-end web developer based in Cebu City. I'm passionate about creating dynamic and responsive websites, and I'm currently on a journey to become a full-stack developer.</p>
                        </div>
                        <div className="edu">
                            <h2>Education:</h2>
                            <p>Saint Columban College - Bachelor of Science in Information Technology</p>
                        </div>
                        <div className="interest">
                            <h2>Interests:</h2>
                            <p>CSS/JS updates, AI, other advancements in technology</p>
                        </div>
                        <div className="hobby">
                            <h2>Hobbies:</h2>
                            <p>Reading books/ebooks, Playing guitar, travelling, working out, playing video games</p>
                        </div>
                    </div>
                )
            case 'exp':
                return (
                    <>
                    <h2>Experience:</h2>
                    <p>Proweaver, Inc. - 3 years (Web Developer)</p>
                    <p>Forty Degrees Celsius, Inc. - Current (Front End Developer)</p>
                    <br/>
                    <h2>Skills:</h2>
                    <p>JQuery, React, NodeJS, Express, PHP, Laravel, Wordpress</p>
                    </>
                )
            case 'resume':
                downloadResume()
                stateSetter('home')
            case 'contact':
                return (
                    <>
                    <h2>Contact: </h2>
                    <p>Cellphone: <a href="tel:+639305933195">+63 930 593 3195</a></p>
                    <p>Email: <a href="mailto:gabrielcorpuz0914@gmail.com">gabrielcorpuz0914@gmail.com</a></p>
                    </>
                )
            default:
                stateSetter('404')
                return (
                    <>
                    <p>Page not found (ᴗ_ ᴗ。)</p>
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
                <li key={opt.key}>
                    {opt.name} <small>({opt.key})</small>
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