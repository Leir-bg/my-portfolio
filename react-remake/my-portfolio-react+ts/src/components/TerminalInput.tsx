import { useState, useEffect } from 'react'
import type { RefObject } from 'react'
import { useAppSelector } from '@/hooks/StoreHook'
import { useAppDispatch } from '@/hooks/StoreHook'
import { goToPage } from '@/store/pageReducer'

interface TerminalInputProps {
    wrapperRef: RefObject<HTMLDivElement | null>
}

function TerminalInput({ wrapperRef }: TerminalInputProps) {
    const currentPage = useAppSelector((state) => state.page.currentPage)
    const dispatch = useAppDispatch()
    const [input, setInput] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const match = new RegExp('cd (.*)').exec(input)
            if (match) {
                dispatch(goToPage(match[1]))
                setInput('')
            }
        }
        catch (error) {
            dispatch(goToPage('404'))
        }
    }

    useEffect(() => {
        wrapperRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [currentPage, wrapperRef])

    return (
        <form className="input_wrap" onSubmit={handleSubmit}>
            <span className="terminal_prompt">$</span>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="terminal_input"
                autoFocus
                placeholder='cd option'
                id='input'
            />
        </form>
    )
}

export default TerminalInput