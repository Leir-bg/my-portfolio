import { useState, useEffect } from 'react'
import type { RefObject } from 'react'
import { useAppSelector } from '@/hooks/StoreHook'
import { useAppDispatch } from '@/hooks/StoreHook'
import { goToPage } from '@/store/pageReducer'

interface TerminalInputProps {
    wrapperRef: RefObject<HTMLDivElement | null>
}

const terminalOptionMap: Record<string, string> = {
    'home': 'Home',
    'about': 'About',
    'exp': 'Experience and Skills',
    'prjs': 'Projects',
    'contact': 'Contact'
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
                dispatch(goToPage([match[1], terminalOptionMap[match[1]]]))
                setInput('')
            }
            else {
                dispatch(goToPage(['not_found', '404']))
                setInput('')
            }
        }
        catch (error) {
            dispatch(goToPage(['not_found', '404']))
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
            <label className="terminal_prompt">
                $
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="terminal_input"
                    autoFocus
                    placeholder='cd option'
                    id='input'
                />
            </label>
        </form>
    )
}

export default TerminalInput