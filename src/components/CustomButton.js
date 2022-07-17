import React from 'react'

const CustomButton = ({ type, disabled, btnContent, btnStyle, icon, onClick: handleClick }) => {
    return (
        <button
            type={type ? type : 'button'}
            className={"btn btn-" + btnStyle}
            onClick={handleClick}
            disabled={disabled}
        ><i className={'fas fa-' + icon} /> {btnContent}</button>
    )
}

export default CustomButton