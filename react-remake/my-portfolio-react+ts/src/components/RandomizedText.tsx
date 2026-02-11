import { useEffect, useState } from 'react'

const RandomizedText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState(text)

    useEffect(() => {
        const speed: number = 50
        const baseString: string = '1234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz .,!@#$%&'
        const skip: number = 20
        const charJump: number = Math.floor(Math.abs(text.length / skip))

        let iteration: number = 0

        const shuffleText = () => {
            if (iteration <= text.length) {
                const randomChar: string = baseString.charAt(Math.floor(Math.random() * baseString.length))
                const newText: string = text.slice(0, iteration) + randomChar + text.slice(iteration + skip)

                setDisplayText(newText)
                iteration += charJump || text.length / 3

                setTimeout(shuffleText, speed)
            }
            else {
                setDisplayText(text)
            }
        }

        shuffleText()
    }, [text])

    return <span>{displayText}</span>
}

export default RandomizedText