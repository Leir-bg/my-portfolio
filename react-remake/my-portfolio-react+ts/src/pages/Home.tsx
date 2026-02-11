import RandomizedText from "@/components/RandomizedText"

const Home = () => (
    <>
        <p><RandomizedText text="Hi! Welcome to my portfolio." /></p>
        <p>
            <RandomizedText text="To interact with the terminal, input 'cd ' followed by the " />
            <span className="option"><RandomizedText text="(option)" /></span>
            <RandomizedText text="." />
        </p>
    </>
)

export default Home
