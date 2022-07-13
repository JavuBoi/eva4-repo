const InputSelect = (props) => {
    const inputLabel = props.inputLabel
    const name = props.name
    const options = props.options // [{value: value1, content: content1}, {value: value2, content: content2}]

    return (
        <>
            <label htmlFor={name}>{inputLabel}</label>
            <select name={name}>
                <option defaultValue={true} disabled="disabled">-- Seleccione --</option>
                {options.map((opcion, i) => {
                    <option value={opcion.value}>{opcion.content}</option>
                })}
            </select>
        </>
    )
}

export default InputSelect;