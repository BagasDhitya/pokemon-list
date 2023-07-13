import { FC } from 'react';
import { CardProps } from '../utils/component'

const Card: FC<CardProps> = ({ id, type, name, image, description }) => {
    return (
        <>
            {
                type === 'character' &&
                <div id={id} className="bg-white shadow-lg rounded-lg p-4">
                    {name && <h2 className="text-xl font-bold mb-2">{name}</h2>}
                </div>
            }
            {
                type === 'pokemon' &&
                <div id={id} className="bg-white shadow-lg rounded-lg p-4">
                    {image && <img src={image} alt={name} className="mb-4" />}
                    {name && <h2 className="text-xl font-bold mb-2">{name}</h2>}
                </div>
            }
            {
                type === 'detail' &&
                <div id={id} className="bg-white shadow-lg rounded-lg p-4">
                    {image && <img src={image} alt={name} className="mb-4" />}
                    {name && <h2 className="text-xl font-bold mb-2">{name}</h2>}
                    {description && <p className="text-gray-600">{description}</p>}
                </div>
            }
        </>
    );
};

export default Card;
