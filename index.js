const { useState } = React
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

function TerminalHistory({currstate}) {
    return <li>G:\Users\GUEST\{getOption(currstate)}</li>
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
                            <img src="https://placehold.jp/000000/ffffff/150x150.png" alt="Gabriel D. Corpuz" />
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
                    <p>Experience:</p>
                    <p>Proweaver, Inc. - 3 years (Web Developer)</p>
                    <p>Forty Degrees Celsius, Inc. - Current (Front End Developer)</p>
                    <br/>
                    <p>Skills:</p>
                    <p>HTML, CSS, JavaScript/JQuery, React, NodeJS, Express, PHP, Laravel, Wordpress</p>
                    <br/>
                    <h2>Certifications:</h2>
                    <p>--</p>
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
                return (
                    <>
                    <p>Page not found :(</p>
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

function TerminalInput({currstate, stateSetter}) {
    const handleInput = (e) => {
        try{
            const value = new RegExp(`cd ../(.*)`).exec(e.target[0].value)
            stateSetter(value[value.length - 1])
        }
        catch(err){
            stateSetter('404')
        }

        e.target[0].value = ''
    }

    return (
        <form className='input_wrap' onSubmit={e => {
            e.preventDefault()
            handleInput(e)
        }}>
            <label htmlFor="input">G:\Users\GUEST\{getOption(currstate)}&gt;</label>
            <input id="input" type="text" placeholder="cd ../option" />
        </form>
    )
}

function TerminalWrapper({option}) {
    const [state, setState] = useState('home')
    
    return (
        <>
        <ul className='history'>
        <TerminalHistory currstate={state} />
        </ul>
        
        <section>
        <TerminalSection currState={state} stateSetter={setState} />
        </section>
        
        <ol type='1' className='options'>
        <TerminalOptions optionMap={terminalOptions} currState={state} />
        </ol>
        
        <TerminalInput currstate={state} stateSetter={setState} />
        </>
    )
}

root.render(<TerminalWrapper />)