import React from 'react'

function InputGroup(props) {
    const type = props.type;
    const value = props.value;
    const setValue = props.onChange;
    const name = props.name;
    const placeholder = props.placeholder;
    const readOnly = props.readOnly;
    const inputLabel = props.inputLabel;
    const icon = props.icon;

    return (

        <div className={(inputLabel ? "form" : "input") + "-group mb-3"}>
            {inputLabel && (
                <label className="control-label" htmlFor={name}>{inputLabel}</label>
            )}
            <input
                className="form-control"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                readOnly={readOnly && "readonly"}
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            {icon && (
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className={"fas fa-" + icon}></span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default InputGroup