import React from 'react'
import InputSelect from './InputSelect'

function Dashboard() {
    const options = [{"value": "value1", "content": "content1"}, {"value": "value2", "content": "content2"}]
    return (
        <div className='card'>
            <InputSelect
            inputLabel="Ejemplo"
            name="valorEjemplo"
            options={options} />
        </div>

    )
}

export default Dashboard