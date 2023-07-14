
import { useState, useEffect, lazy, Suspense } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import axios from "axios"

import { PokemonState } from "../../utils/type"

import Layout from "../../components/Layout"
import Loading from "../../components/Loading"
const Card = lazy(() => import('../../components/Card'))

const Detail = () => {

    const params: any = useLocation()
    const navigate: any = useNavigate()
    const [pokemon, setPokemons] = useState<PokemonState>()

    const getPokemon = async () => {
        try {
            const url = params?.state?.url
            const response = await axios.get(url?.substring(url?.indexOf("pokemon/")))
            const data: PokemonState = {
                id: response?.data?.id,
                name: response?.data?.name,
                sprites: {
                    front_default: response?.data?.sprites?.front_default,
                    back_default: response?.data?.sprites?.back_default
                }
            }
            setPokemons(data)
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Something went wrong, please refresh your page",
                confirmButtonText: "OK"
            })
        }
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <Layout>
            <div className="flex flex-wrap">
                <Suspense fallback={<Loading />}>
                    <div className="w-40 mx-2 my-2">
                        <Card
                            id="pokemon"
                            type="pokemon"
                            name={pokemon?.name}
                            image={pokemon?.sprites?.front_default}
                        />
                    </div>
                </Suspense>
            </div>
        </Layout>
    )
}

export default Detail