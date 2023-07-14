import { useLocation } from "react-router-dom"

const ListPokemons = () => {

    const params: any = useLocation()

    console.log("url : ", params?.state?.url)

    return (
        <div>ListPokemons</div>
    )
}

export default ListPokemons