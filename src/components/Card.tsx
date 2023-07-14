import { FC } from 'react';
import { CardProps } from '../utils/component'

const Card: FC<CardProps> = ({ id, type, name, image, description, onClick }) => {
    return (
        <>
            {
                type === 'character' &&
                <button id={id} className="w-full bg-white shadow-lg rounded-lg p-4 hover:bg-yellow-500 hover:text-white" onClick={onClick}>
                    {name && <h2 className="text-xl font-bold mb-2">{name}</h2>}
                </button>
            }
            {
                type === 'pokemon' &&
                <button id={id} className="w-full bg-white shadow-lg rounded-lg p-4 outline-none" onClick={onClick}>
                    {image && <img src={image} width={100} height={100} alt={name} className="mb-4" />}
                    {name && <h2 className="text-xl font-bold mb-2">{name}</h2>}
                </button>
            }
            {
                type === 'detail' &&
                <div id={id} className="bg-white shadow-lg rounded-lg p-4" onClick={onClick}>
                    {image && <img src={image} alt={name} className="mb-4" />}
                    {name && <h2 className="text-xl font-bold mb-2">{name}</h2>}
                    {description && <p className="text-gray-600">{description}</p>}
                </div>
            }
        </>
    );
};

export default Card;
