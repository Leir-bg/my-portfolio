import { useAppSelector } from "@/hooks/StoreHook"
import RandomizedText from "./RandomizedText"

const terminalOptions: { name: string, key: string }[] = [
    { name: 'Home', key: 'home' },
    { name: 'About', key: 'about' },
    { name: 'Experience and Skills', key: 'exp' },
    { name: 'Projects', key: 'prjs' },
    { name: 'Resume', key: 'resume' },
    { name: 'Contact', key: 'contact' },
    { name: '404', key: '404' }
]

function TerminalOptions() {
    const currentPage = useAppSelector((state) => state.page.currentPage)

    return (
        <ol type="1" className="options">
            {
                terminalOptions.map((option) => {
                    return option.key !== currentPage &&
                        option.key !== '404' && (
                            <li key={`${currentPage}-${option.key}`}>
                                <RandomizedText text={option.name} />&nbsp;
                                <small><RandomizedText text={`(${option.key})`} /></small>
                            </li>
                        )
                })
            }
        </ol>
    )
}

export default TerminalOptions