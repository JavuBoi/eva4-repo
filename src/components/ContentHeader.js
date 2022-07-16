import React from 'react'
import { Link } from 'react-router-dom'

const ContentHeader = ({ title, name, parentName, parentRoute }) => {
    return (
        <section className='content-header'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h1>{title}</h1>
                    </div>
                    <div className="col-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><Link to="/sales">Cloud Sales</Link></li>
                            {parentName && <li className="breadcrumb-item"><Link to={parentRoute}>{parentName}</Link></li>}
                            <li className={"breadcrumb-item " + (!parentName && "active")}> {name}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentHeader