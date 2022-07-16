import React from 'react'
import { Link } from 'react-router-dom'

function ContentHeader({ name }) {
    return (
        <section className='content-header'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h1>Panel de Ventas</h1>
                    </div>
                    <div className="col-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><Link to="/sales">Cloud Sales</Link></li>
                            <li className="breadcrumb-item active"> {name}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentHeader