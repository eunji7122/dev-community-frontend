import React from 'react';
import {BsHeart, BsHeartFill} from "react-icons/bs";

interface propsType {
    isHeart: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const HeartButton = ({isHeart, onClick}: propsType) => {
    return (
        <div>
            <button onClick={onClick}>
                { !isHeart ?
                    <BsHeart size={18}/>
                    :
                    <BsHeartFill size={18}/>
                }
            </button>
        </div>
    );
};

export default HeartButton;