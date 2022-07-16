import React from 'react'
import InputSelect from '../components/InputSelect'
import InputGroup from '../components/InputGroup'
import useFetchGet from '../helpers/useFetchGet'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ContentHeader from '../components/ContentHeader'

const Sales = () => {
    const { data: clientList } = useFetchGet('clients/')
    const { data: productList } = useFetchGet('products/')
    return (

        <div>
            <Navbar />
            <Sidebar />
            <div className='content-wrapper'>
                <ContentHeader name="Ventas" title="Panel de Ventas" />
                <section className="content">
                    <div className="card">
                        <div className="card-body ">
                            <div className="row">
                                <div className="col-10">
                                    <InputSelect
                                        name="cliente"
                                        inputLabel="Cliente"
                                        optionList={clientList}
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
                                        optionList={productList}
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
        </div>
    );
}

export default Sales;