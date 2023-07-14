export type PokemonState = {
    id: number,
    name: string,
    sprites: {
        front_default: string,
        back_default: string
    },
    stats?:[
        {
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }
],
    description?: any
}