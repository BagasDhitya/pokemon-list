export interface LayoutProps {
    children?: React.ReactNode
}

export interface CardProps { 
    id: string,
    type: "character" | "pokemon" | "detail"
    name?: string,
    image?: string,
    stats?: any,
    description?: []
    onClick?: React.MouseEventHandler
}

export interface ButtonProps {
    id: string,
    title: string,
    onClick: React.MouseEventHandler,
}