export interface LayoutProps {
    children?: React.ReactNode
    type?: "handphone" | "tablet" | "laptop"
}

export interface CardProps { 
    id: string,
    type: "character" | "pokemon" | "detail"
    name?: string,
    image?: string,
    description?: string
    onClick?: React.MouseEventHandler
}

export interface ButtonProps {
    id: string,
    title: string,
    onClick: React.MouseEventHandler,
}