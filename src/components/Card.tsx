import { FC } from 'react';
import { CardProps } from '../utils/component';

const Card: FC<CardProps> = ({
    id,
    type,
    name,
    image,
    stats,
    description,
    onClick,
}) => {
    return (
        <>
            {type === 'character' && (
                <button
                    id={id}
                    className="w-full bg-white shadow-lg rounded-lg p-4 hover:bg-yellow-500 hover:text-white"
                    onClick={onClick}
                >
                    {name && <h2 className="text-xl font-bold mb-2">{name}</h2>}
                </button>
            )}
            {type === 'detail' && (
                <div
                    id={id}
                    className="w-full h-full flex flex-col bg-white shadow-lg rounded-lg p-4"
                    onClick={onClick}
                >
                    {image && (
                        <img
                            src={image}
                            height={100}
                            width={100}
                            alt={name}
                            className="mb-4 mx-auto"
                        />
                    )}
                    {name && (
                        <h2 className="text-xl text-center font-bold mb-2">{name}</h2>
                    )}
                    {stats && (
                        <div className='text-yellow-700 font-bold'>
                            Stats:
                            <ul className='text-black font-medium mt-5'>
                                {stats?.map((entry: any, index: number) => (
                                    <li key={index}>{entry.stat.name} : {entry.base_stat}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {description && (
                        <div className='text-yellow-700 font-bold'>
                            Description:
                            <ul className='text-black font-medium mt-5'>
                                {description?.map((entry: any, index: number) => (
                                    <li key={index}>{entry}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Card;
