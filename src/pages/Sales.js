import React, { useState } from 'react'
import InputSelect from '../components/InputSelect'
import InputGroup from '../components/InputGroup'
import useFetchGet from '../helpers/useFetchGet'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ContentHeader from '../components/ContentHeader'
import { useEffect } from 'react';

const Sales = () => {
    const clientList = useFetchGet('clients/').data
    const productList = useFetchGet('products/').data
    const [clientId, setClientId] = useState("")
    const [productId, setProductId] = useState("")

    // Mostrar datos del producto en formulario
    const [product, setProduct] = useState("")
    const [qty, setQty] = useState("")
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        try {
            setProduct(productList.find(product => { return product.id === productId }))
            setDiscount(product.MDPrice)
        } catch (e) {
            //
        }
    }, [productId, productList, product])

    useEffect(() => {
        try {
            if (product) {
                const { price, MDPrice } = product
                setDiscount(qty * MDPrice > 0 ? qty * MDPrice : MDPrice)
                setTotal(qty * (price - MDPrice) > 0 ? qty * (price - MDPrice) : 0)

            }
        } catch (e) {
            //
        }
    }, [qty, productId])

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
                                    {clientList && <InputSelect
                                        name="cliente"
                                        inputLabel="Cliente"
                                        optionList={clientList}
                                        value={clientId}
                                        setValue={setClientId}
                                    />}

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
                                    {productList && <InputSelect
                                        name="producto"
                                        inputLabel="Producto"
                                        optionList={productList}
                                        value={productId}
                                        setValue={setProductId}
                                    />}
                                </div>
                                <div className="col-4">
                                    <InputGroup
                                        type="text"
                                        value={product ? product.MSU : 0}
                                        name="msu"
                                        inputLabel="U.M.V."
                                        readOnly={true}
                                    />
                                </div>
                                <div className="col-4">
                                    <InputGroup
                                        type="text"
                                        value={product ? product.stock : 0}
                                        name="stock"
                                        inputLabel="Stock"
                                        readOnly={true}
                                    />
                                </div>
                                <div className="col-4">
                                    <InputGroup
                                        type="text"
                                        value={qty}
                                        setValue={setQty}
                                        name="qty"
                                        inputLabel="Cantidad"
                                    />
                                </div>
                                <div className="col-4">
                                    <InputGroup
                                        type="text"
                                        value={"$" + (product ? product.price : 0)}
                                        name="unitary"
                                        inputLabel="Unitario"
                                        readOnly={true}
                                        style=" bg-white"
                                    />
                                </div>
                                <div className="col-4">
                                    <InputGroup
                                        type="text"
                                        value={"$" + (product ? discount : 0)}
                                        name="discount"
                                        inputLabel="Descuento"
                                        readOnly={true}
                                        style=" bg-white"

                                    />
                                </div>
                                <div className="col-4">
                                    <InputGroup
                                        type="text"
                                        value={"$" + (product ? total : 0)}
                                        name="total"
                                        inputLabel="Total"
                                        readOnly={true}
                                        style=" bg-white"
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