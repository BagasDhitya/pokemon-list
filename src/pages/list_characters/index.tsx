import Card from "../../components/Card"

const ListCharacters = () => {
    return (
        <div>
            <Card
                id="1"
                type="character"
                name="Contoh Kartu"
                image="https://example.com/image.jpg"
                description="Ini adalah contoh kartu menggunakan React, TypeScript, dan Tailwind CSS."
            />
        </div>
    )
}

export default ListCharacters