import RandomizedText from "@/components/RandomizedText"

const Experience = () => (
    <>
        <h2><RandomizedText text="Experience:" /></h2>
        <p><RandomizedText text="6 years: Front End Developer" /></p>
        <br />
        <h2><RandomizedText text="Tech Stack:" /></h2>
        <div className="tech-stack-container">
            <h3><RandomizedText text="Frontend" /></h3>
            <ul className="tech-tags">
                <li><RandomizedText text="JavaScript (ES6+)" /></li>
                <li><RandomizedText text="TypeScript" /></li>
                <li><RandomizedText text="React" /></li>
                <li><RandomizedText text="React Native (Expo)" /></li>
                <li><RandomizedText text="Next.js" /></li>
                <li><RandomizedText text="TailwindCSS" /></li>
                <li><RandomizedText text="Redux" /></li>
                <li><RandomizedText text="Vite" /></li>
                <li><RandomizedText text="MapLibre GL" /></li>
                <li><RandomizedText text="i18next" /></li>
            </ul>

            <h3><RandomizedText text="Backend & Data" /></h3>
            <ul className="tech-tags">
                <li><RandomizedText text="Node.js" /></li>
                <li><RandomizedText text="Fastify / Express" /></li>
                <li><RandomizedText text="WebSockets" /></li>
                <li><RandomizedText text="Puppeteer" /></li>
                <li><RandomizedText text="PHP (Laravel, CakePHP)" /></li>
                <li><RandomizedText text="SQL" /></li>
                <li><RandomizedText text="MongoDB" /></li>
                <li><RandomizedText text="Firebase" /></li>
                <li><RandomizedText text="Knex.js" /></li>
            </ul>

            <h3><RandomizedText text="Search Engine Optimizations (SEO)" /></h3>
            <ul className="tech-tags">
                <li><RandomizedText text="Google Analytics" /></li>
                <li><RandomizedText text="Google Search Console" /></li>
                <li><RandomizedText text="Bing Webmaster Tools" /></li>
                <li><RandomizedText text="Yoast SEO" /></li>
            </ul>

            <h3><RandomizedText text="Authentication" /></h3>
            <ul className="tech-tags">
                <li><RandomizedText text="JWT" /></li>
                <li><RandomizedText text="Two-Factor (otplib)" /></li>
            </ul>

            <h3><RandomizedText text="AI & Automations" /></h3>
            <ul className="tech-tags">
                <li><RandomizedText text="SpecKit" /></li>
                <li><RandomizedText text="Ollama (Gemma3:1b)" /></li>
            </ul>

            <h3><RandomizedText text="Other" /></h3>
            <ul className="tech-tags">
                <li><RandomizedText text="Git" /></li>
                <li><RandomizedText text="Docker" /></li>
                <li><RandomizedText text="WordPress" /></li>
                <li><RandomizedText text="Vercel" /></li>
                <li><RandomizedText text="Netlify" /></li>
                <li><RandomizedText text="Render" /></li>
                <li><RandomizedText text="Shared hosting (Hostinger)" /></li>
                <li><RandomizedText text="Visualization (Recharts)" /></li>
                <li><RandomizedText text="Godot" /></li>
            </ul>
        </div>
        <br />
        <h2><RandomizedText text="Websites I've previously worked on:" /></h2>
        <ul className="col2">
            <li><a target="_blank" href="https://cebu1070.com"><RandomizedText text="https://cebu1070.com" /></a></li>
            <li><a target="_blank" href="https://nativecamp.net"><RandomizedText text="https://nativecamp.net" /></a></li>
            <li><a target="_blank" href="https://usc.edu.ph"><RandomizedText text="https://usc.edu.ph" /></a></li>
            <li><a target="_blank" href="https://www.hometown.fun/"><RandomizedText text="https://www.hometown.fun" /></a></li>
            <li><a target="_blank" href="https://publishinghouse.usc.edu.ph/Home/Index"><RandomizedText text="https://publishinghouse.usc.edu.ph/Home/Index" /></a></li>
            <li><a target="_blank" href="https://www.polymedpharmacy.com"><RandomizedText text="https://www.polymedpharmacy.com" /></a></li>
            <li><a target="_blank" href="https://www.consulting-experts.com"><RandomizedText text="https://www.consulting-experts.com" /></a></li>
            <li><a target="_blank" href="https://www.northridgebehavioral.com"><RandomizedText text="https://www.northridgebehavioral.com" /></a></li>
            <li><a target="_blank" href="https://www.mytreasurecare.com"><RandomizedText text="https://www.mytreasurecare.com" /></a></li>
        </ul>
    </>
)

export default Experience
