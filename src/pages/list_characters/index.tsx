
import { useState, useEffect, lazy, Suspense } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import axios from "axios"

import Layout from "../../components/Layout"

const Card = lazy(() => import('../../components/Card'))

const ListCharacters = () => {

    const navigate: any = useNavigate()
    const [character, setCharacters] = useState<[]>()

    const getCharacter = async () => {
        try {
            const response = await axios.get('/pokemon?limit=10')
            setCharacters(response?.data?.results)
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Something went wrong, please refresh your page",
                confirmButtonText: "OK"
            })
        }
    }

    const navigatePokemon = (url: string) => {
        navigate("/pokemon", {
            state: {
                url: url
            }
        })
    }

    useEffect(() => {
        getCharacter()
    }, [])

    return (
        <Layout>
            <Suspense fallback={<div>Loading ...</div>}>
                {character &&
                    character.map((item: any, index: number) => (
                        <div className="w-40" key={index}>
                            <Card
                                id="character"
                                type="character"
                                name={item?.name}
                                onClick={() => navigatePokemon(item?.url)}
                            />
                        </div>

                    ))}
            </Suspense>
        </Layout>
    )
}

export default ListCharacters