import { FC } from 'react';
import { ButtonProps } from '../utils/component';

const Button: FC<ButtonProps> = ({ id, title, onClick }) => {
    return (
        <button
            id={id}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
