export interface LayoutProps {
    children?: React.ReactNode
}

export interface CardProps { 
    id: string,
    type: "character" | "detail"
    name: string | undefined,
    image?: string | undefined,
    stats?: [{
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }],
    description?: []
    onClick?: React.MouseEventHandler
}

export interface ButtonProps {
    id: string,
    title: string,
    onClick: React.MouseEventHandler,
}