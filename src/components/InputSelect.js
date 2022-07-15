import React from "react";

class InputSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            name: this.props.name,
            inputLabel: this.props.inputLabel
        }
    }

    componentDidMount() {
        const options = this.props.options ? this.props.options : [];
        this.setState({
            options: options
        })
    }

    render() {
        const inputLabel = this.state.inputLabel;
        const name = this.state.name;
        const optionList = this.state.options; // [{value: value1, content: content1}]

        return (
            <div className="form-group mb-3">
                <label className="control-label" htmlFor={name}>{inputLabel}</label>
                <select className="form-control" name={name}>
                    <option defaultValue={true} value="0">-- Seleccione</option>
                    {optionList.map((opcion, i) => {
                        return (
                            <option value={opcion.value} key={i}>{opcion.content}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

export default InputSelect;