import { useEffect, useState } from "react"
import { useAppSelector } from "@/hooks/StoreHook"

const namespace: string = encodeURI(`${import.meta.env.VITE_COUNTER_NAMESPACE}`)
const keyspace: string = encodeURI(`${import.meta.env.VITE_COUNTER_KEYSPACE}`)
const uri1: string = encodeURI(`${import.meta.env.VITE_COUNTER_URI_1}`)
const uri2: string = encodeURI(`${import.meta.env.VITE_COUNTER_URI_2}`)

function TerminalPath() {
    const currentPage = useAppSelector((state) => state.page.currentProperPage)
    const [visits, setVisits] = useState<number>(0)

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                const response = await Promise.all([
                    fetch('https://api.counterapi.dev/v2/portfolio-gabriel-corpuz-v2/visits/up'),
                    fetch('https://api.counterapi.dev/v2/portfolio-gabriel-corpuz-v2/visits')
                ])

                if (response[0].status === 200 && response[1].status === 200) {
                    const [upres, countres] = await Promise.all([
                        response[0].json(),
                        response[1].json()
                    ]);
                    setVisits(countres.data.up_count)
                }
            }
            catch (error) {
                console.error(error)
            }
        }

        fetchVisits()
    }, [])

    return (
        <ul>
            <li>G:/Users/GUEST_{visits}/{currentPage}</li>
        </ul>
    )
}

export default TerminalPath