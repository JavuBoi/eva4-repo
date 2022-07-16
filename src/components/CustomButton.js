import React from 'react'

function CustomButton({ btnContent, btnStyle, icon, onClick: handleClick }) {
    return (
        <button
            className={"btn btn-" + btnStyle}
            onClick={handleClick}
        ><i className={'fas fa-' + icon} /> {btnContent}</button>
    )
}

export default CustomButton