import RandomizedText from "@/components/RandomizedText"

const Experience = () => (
    <>
        <h2><RandomizedText text="Experience:" /></h2>
        <p><RandomizedText text="5+ years: Front End Developer" /></p>
        <br />
        <h2><RandomizedText text="Tech Stack:" /></h2>
        <ul className="col3">
            <li><RandomizedText text="HTML" /></li>
            <li><RandomizedText text="CSS/TailwindCSS" /></li>
            <li><RandomizedText text="JS (ECMAScript)" /></li>
            <li><RandomizedText text="JQuery" /></li>
            <li><RandomizedText text="React" /></li>
            <li><RandomizedText text="NodeJS" /></li>
            <li><RandomizedText text="Puppeteer" /></li>
            <li><RandomizedText text="ExpressJS" /></li>
            <li><RandomizedText text="AngularJS" /></li>
            <li><RandomizedText text="PHP/Laravel/Cake" /></li>
            <li><RandomizedText text="Wordpress" /></li>
            <li><RandomizedText text="Pug" /></li>
            <li><RandomizedText text="SQL" /></li>
            <li><RandomizedText text="Docker" /></li>
            <li><RandomizedText text="Git" /></li>
        </ul>
        <br />
        <h2><RandomizedText text="Websites I've previously worked on:" /></h2>
        <ul className="col2">
            <li><a target="_blank" href="https://usc.edu.ph"><RandomizedText text="https://usc.edu.ph" /></a></li>
            <li><a target="_blank" href="https://publishinghouse.usc.edu.ph/Home/Index"><RandomizedText text="https://publishinghouse.usc.edu.ph/Home/Index" /></a></li>
            <li><a target="_blank" href="https://www.polymedpharmacy.com"><RandomizedText text="https://www.polymedpharmacy.com" /></a></li>
            <li><a target="_blank" href="https://www.consulting-experts.com"><RandomizedText text="https://www.consulting-experts.com" /></a></li>
            <li><a target="_blank" href="https://www.northridgebehavioral.com"><RandomizedText text="https://www.northridgebehavioral.com" /></a></li>
            <li><a target="_blank" href="https://www.mytreasurecare.com"><RandomizedText text="https://www.mytreasurecare.com" /></a></li>
        </ul>
    </>
)

export default Experience
