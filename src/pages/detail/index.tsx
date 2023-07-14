import { useState, useEffect, lazy, Suspense } from "react"
import { useLocation } from "react-router-dom"
import Swal from "sweetalert2"
import axios from "axios"

import { PokemonState } from "../../utils/type"

import Layout from "../../components/Layout"
import Loading from "../../components/Loading"

const Card = lazy(() => import('../../components/Card'))

const Detail = () => {

    const params: any = useLocation()
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
                },
                stats: response?.data?.stats
            }
            getDescription(data)
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Something went wrong, please refresh your page",
                confirmButtonText: "OK"
            })
        }
    }

    const getDescription = async (data: PokemonState) => {
        try {
            const response = await axios.get(`pokemon-species/${data?.id}/`)
            const description = response?.data?.flavor_text_entries.slice(3, 8)
            const pokemon: PokemonState = {
                id: data?.id,
                name: data?.name,
                sprites: {
                    front_default: data?.sprites?.front_default,
                    back_default: data?.sprites?.back_default
                },
                stats: data?.stats,
                description: [
                    description.map((entry: any) => entry?.flavor_text)
                ]
            }
            setPokemons(pokemon)
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
            <Suspense fallback={<Loading />}>
                <Card
                    id="detail"
                    type="detail"
                    name={pokemon?.name?.toUpperCase()}
                    image={pokemon?.sprites?.front_default}
                    stats={pokemon?.stats}
                    description={pokemon?.description}
                />
            </Suspense>
        </Layout>
    )
}

export default Detail