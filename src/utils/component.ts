export interface CardProps { 
    id: string,
    type: "character" | "pokemon" | "detail"
    name?: string,
    image?: string,
    description?: string
}