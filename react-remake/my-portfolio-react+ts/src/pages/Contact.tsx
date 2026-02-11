import RandomizedText from "@/components/RandomizedText"

const Contact = () => (
    <>
        <h2><RandomizedText text="Contact:" /></h2>
        <p>
            <RandomizedText text="Cellphone:" />&nbsp;
            <a href="tel:+639305933195"><RandomizedText text="+63 930 593 3195" /></a>
        </p>
        <p>
            <RandomizedText text="Email:" />&nbsp;
            <a href="mailto:gabrielcorpuz0914@gmail.com"><RandomizedText text="gabrielcorpuz0914@gmail.com" /></a>
        </p>
        <p>
            <RandomizedText text="LinkedIn:" />&nbsp;
            <a target="_blank" href="https://www.linkedin.com/in/gcorpuz091416/"><RandomizedText text="www.linkedin.com/in/gcorpuz091416" /></a>
        </p>
        <p>
            <RandomizedText text="GitHub:" />&nbsp;
            <a target="_blank" href="https://github.com/Leir-bg/"><RandomizedText text="github.com/Leir-bg" /></a>
        </p>
    </>
)

export default Contact
