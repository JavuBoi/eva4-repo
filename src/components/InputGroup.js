import React from 'react'

function InputGroup(props) {
    const type = props.type;
    const placeholder = props.placeholder;
    const icon = props.icon;
    const value = props.value;
    const onChangeSet = props.onChange;
    return (
        <div className="input-group mb-3">
            <input
                type={type}
                value={value}
                onChange={(e) => onChangeSet(e.target.value)}
                className="form-control"
                placeholder={placeholder} />
            <div className="input-group-append">
                <div className="input-group-text">
                    <i className={icon && `fas fa-${icon}`} />
                </div>
            </div>
        </div>
    )
}

export default InputGroup