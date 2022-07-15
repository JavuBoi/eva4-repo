import React from 'react'
import { Link } from 'react-router-dom'
import InputSelect from './InputSelect'
import InputGroup from './InputGroup'

function Sales() {
    return (
        <div className='content-wrapper'>
            <section className='content-header'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <h1>Panel de Ventas</h1>
                        </div>
                        <div className="col-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/sales">Cloud Sales</Link></li>
                                <li className="breadcrumb-item active"> Ventas</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    <div className="card-body ">
                        <div className="row">
                            <div className="col-10">
                                <InputSelect
                                    name="cliente"
                                    inputLabel="Cliente"
                                />
                            </div>
                            <div className="col-2">
                                <div className="form-group">
                                    <label htmlFor="control-label">&nbsp;</label>
                                    <button className="btn btn-success form-control"><i className="fas fa-chevron-right" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <InputSelect
                                    name="producto"
                                    inputLabel="Producto"
                                />
                            </div>
                            <div className="col-4">
                                <InputGroup
                                    type="text"
                                    value=""
                                    onChange=""
                                    name="msv"
                                    inputLabel="U.M.V."
                                    readOnly={true}
                                />
                            </div>
                            <div className="col-4">
                                <InputGroup
                                    type="text"
                                    value=""
                                    onChange=""
                                    name="stock"
                                    inputLabel="Stock"
                                    readOnly={true}
                                />
                            </div>
                            <div className="col-4">
                                <InputGroup
                                    type="text"
                                    value=""
                                    onChange=""
                                    name="qty"
                                    inputLabel="Cantidad"
                                />
                            </div>
                            <div className="col-4">
                                <InputGroup
                                    type="text"
                                    value=""
                                    onChange=""
                                    name="unitary"
                                    inputLabel="Unitario"
                                />
                            </div>
                            <div className="col-4">
                                <InputGroup
                                    type="text"
                                    value=""
                                    onChange=""
                                    name="discount"
                                    inputLabel="Descuento"
                                />
                            </div>
                            <div className="col-4">
                                <InputGroup
                                    type="text"
                                    value=""
                                    onChange=""
                                    name="total"
                                    inputLabel="Total"
                                />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary btn-block"><i className="fas fa-cart-plus" />Agregar</button>
                            </div>
                            <div className="col-12 py-2">
                                <hr />
                            </div>
                            <div className="col-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Cantidad</th>
                                            <th>Total</th>
                                            <th>Accion</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="col-6">
                                <InputGroup
                                    type="text"
                                    value=""
                                    onChange=""
                                    name="neto"
                                    inputLabel="Neto"
                                    readOnly={true}
                                />
                            </div>
                            <div className="col-6">
                                <InputGroup
                                    type="text"
                                    value=""
                                    onChange=""
                                    name="tax"
                                    inputLabel="IVA"
                                    readOnly={true}
                                />
                            </div>
                            <div className="col-6">
                                <InputGroup
                                    type="text"
                                    value=""
                                    onChange=""
                                    name="otherTaxes"
                                    inputLabel="Otros Impuestos"
                                    readOnly={true}
                                />
                            </div>
                            <div className="col-6">
                                <InputGroup
                                    type="text"
                                    value=""
                                    onChange=""
                                    name="final"
                                    inputLabel="Total"
                                    readOnly={true}
                                />
                            </div>
                            <div className="col-12 py-2">
                                <hr />
                            </div>
                            <div className="col-6">
                                <InputSelect
                                    name="type"
                                    inputLabel="Tipo de Venta"
                                />
                            </div>
                            <div className="col-6">
                                <InputSelect
                                    name="document"
                                    inputLabel="Tipo de Documento"
                                />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary btn-block"><i className="fas fa-save" /> Guardar Pedido</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Sales