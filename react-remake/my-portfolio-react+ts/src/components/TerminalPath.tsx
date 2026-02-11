import { useEffect, useState } from "react"
import { useAppSelector } from "@/hooks/StoreHook"

const namespace: string = encodeURI(`${import.meta.env.VITE_COUNTER_NAMESPACE}`)
const keyspace: string = encodeURI(`${import.meta.env.VITE_COUNTER_KEYSPACE}`)
const uri1: string = encodeURI(`${import.meta.env.VITE_COUNTER_URI_1}`)
const uri2: string = encodeURI(`${import.meta.env.VITE_COUNTER_URI_2}`)

function TerminalPath() {
    const currentPage = useAppSelector((state) => state.page.currentPage)
    const [visits, setVisits] = useState<number>(0)

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                let response: Response = await fetch(`https://${uri2}/${namespace}/${keyspace}/up`)

                if (response.status === 200) {
                    const data: any = await response.json()
                    setVisits(data.count)
                }
                else {
                    response = await fetch(`https://${uri1}/${namespace}/${keyspace}/up`)
                    const data: any = await response.json()
                    setVisits(data.count)
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