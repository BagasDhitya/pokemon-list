
import { useState, lazy, Suspense } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import axios from "axios"

import Pokemon from "../../assets/pokemon.png"
import { CharacterState } from "../../utils/type"

import Layout from "../../components/Layout"
import Loading from "../../components/Loading"
import Button from "../../components/Button"

const Card = lazy(() => import('../../components/Card'))

const ListCharacters = () => {

    const navigate: any = useNavigate()
    const [character, setCharacters] = useState<CharacterState>()
    const [loading, setLoading] = useState<boolean>(false)

    const getCharacter = async () => {
        try {
            setLoading(true)
            const response = await axios.get('/pokemon?limit=10')
            const data: CharacterState = {
                results: response?.data?.results
            }
            setCharacters(data)
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Something went wrong, please refresh your page",
                confirmButtonText: "OK"
            })
        }
    }

    const navigatePokemon = (url: string, name: string) => {
        navigate(`/detail/${name}`, {
            state: {
                url: url
            }
        })
    }

    return (
        <Layout>
            <div className="flex flex-wrap justify-center items-center">
                {character ? (
                    character?.results?.map((item: any, index: number) => (
                        <Suspense fallback={loading && <Loading />}>
                            <div className="w-40 mx-2 my-2" key={index}>
                                <Card
                                    id="character"
                                    type="character"
                                    name={item?.name}
                                    onClick={() => navigatePokemon(item?.url, item?.name)}
                                />
                            </div>
                        </Suspense>
                    ))

                ) : (
                    <div className="w-screen text-center">
                        <img
                            src={Pokemon}
                            className="my-10"
                        />
                        <p className="text-xl mb-4 text-yellow-700 font-bold">Choose your Character</p>
                        <Button
                            id="character"
                            title="Get Pokemon"
                            onClick={() => getCharacter()}
                        />
                    </div>
                )}
            </div>
        </Layout>
    );

}

export default ListCharacters