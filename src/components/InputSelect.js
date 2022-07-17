import React from "react";

class InputSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            value: this.props.value,
            setValue: this.props.setValue,
            name: this.props.name,
            inputLabel: this.props.inputLabel
        }
    }

    componentDidMount() {
        this.setState({
            options: this.props.optionList ? this.props.optionList : []
        })
    }

    render() {
        const inputLabel = this.state.inputLabel;
        const name = this.state.name;
        const optionList = this.state.options;
        const value = this.props.value
        const setValue = this.props.setValue

        return (
            <div className="form-group mb-3">
                <label className="control-label" htmlFor={name}>{inputLabel}</label>
                <select className="form-control" name={name} value={value} onChange={(e) => setValue(e.target.value)} >
                    <option defaultValue={true} value="0">-- Seleccione</option>
                    {optionList.map(({ id, name }) => {
                        return (
                            <option value={id} key={id}>{name}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

export default InputSelect;