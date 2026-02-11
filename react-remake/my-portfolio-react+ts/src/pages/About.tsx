import RandomizedText from "@/components/RandomizedText"

const About = () => (
    <div className="col2">
        <div className="pp">
            <img src="./images/profile.jpg" alt="Gabriel D. Corpuz" />
            <p><RandomizedText text="Hello! I'm Gabriel Corpuz, a 27-year-old front-end web developer based in Cebu City. I'm passionate about creating dynamic and responsive websites, and I'm currently on a journey to become a full-stack developer." /></p>
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
            <h2><RandomizedText text="Hobbies:" /></h2>
            <p><RandomizedText text="Learning new code techniques, reading books/ebooks, playing games" /></p>
        </div>
    </div>
)

export default About
