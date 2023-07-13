export interface CardProps { 
    id: string,
    type: "character" | "pokemon" | "detail"
    name?: string,
    image?: string,
    description?: string
}

export interface ButtonProps {
    id: string,
    title: string,
    onClick: React.MouseEventHandler,
}