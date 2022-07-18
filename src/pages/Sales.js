import React, { useState, useEffect } from 'react'
import useAuth from '../helpers/useAuth'
import InputSelect from '../components/InputSelect'
import InputGroup from '../components/InputGroup'
import useFetchGet from '../helpers/useFetchGet'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import ContentHeader from '../components/ContentHeader'
import CustomButton from '../components/CustomButton'

const Sales = ({ isAuth }) => {
    useAuth(isAuth)

    const clientList = useFetchGet('clients/').data
    const productList = useFetchGet('products/').data
    const [clientId, setClientId] = useState("")
    const [productId, setProductId] = useState("")

    // Datos del producto en formulario
    const [product, setProduct] = useState(null)
    const [qty, setQty] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [unitary, setUnitary] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        try {
            setProduct(productList.find(product => { return product.id === productId }))
            setDiscount(product.MDPercentage)
        } catch (e) {
            //
        }
    }, [productId, productList, product])

    const [qtyError, setQtyError] = useState(false)
    const [unitaryError, setUnitaryError] = useState(false)
    const [discountError, setDiscountError] = useState(false)

    useEffect(() => {
        if (product) {
            const { price, MDPrice, MSU, MDPercentage } = product

            setUnitary(price)
            setQty(MSU)
            setTotal(qty * (price - MDPrice) > 0 ? qty * (price - MDPrice) : 0)

            // Errores de formulario
            setQtyError(qty < MSU)
            setUnitaryError((price - unitary) > MDPrice)
            setDiscountError(discount > MDPercentage)
        } else {
            setQty(0)
            setUnitary(0)
            setDiscount(0)
        }
    }, [product, qty, unitary, discount])

    // Agregar al carrito
    const [cart] = useState([])
    const [CartBody, setCartBody] = useState(null)

    const addToCart = () => {
        if (product && qty > 0) {
            cart.push({
                name: product.name,
                qty: qty,
                total: total
            })

            setCartBody(cart.map(({ name, qty, total }, i) => {
                return (
                    <tr key={i}>
                        <td>{name}</td>
                        <td>{qty}</td>
                        <td>{total}</td>
                        <td><CustomButton /></td>
                    </tr>
                )
            }))
        }
    }

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
                                    {clientList ? <InputSelect
                                        name="cliente"
                                        inputLabel="Cliente"
                                        optionList={clientList}
                                        value={clientId}
                                        setValue={setClientId}
                                    /> : <label className='control-label'>Cargando clientes...</label>}

                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label className="control-label">&nbsp;</label>
                                        <button className="btn btn-success form-control"><i className="fas fa-chevron-right" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    {productList ? <InputSelect
                                        name="producto"
                                        inputLabel="Producto"
                                        optionList={productList}
                                        value={productId}
                                        setValue={setProductId}
                                    /> : <label className='control-label'>Cargando productos...</label>}
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
                                        inputStyle={qtyError && "text-danger"}
                                    />
                                </div>
                                <div className="col-4">
                                    <InputGroup
                                        type="text"
                                        value={unitary}
                                        setValue={setUnitary}
                                        name="unitary"
                                        inputLabel="Unitario"
                                        inputStyle={unitaryError && "text-danger"}
                                    />
                                </div>
                                <div className="col-4">
                                    <InputGroup
                                        type="text"
                                        value={(discount)}
                                        name="discount"
                                        setValue={setDiscount}
                                        inputLabel="Descuento"
                                        inputStyle={discountError && "text-danger"}
                                    />
                                </div>
                                <div className="col-4">
                                    <InputGroup
                                        type="text"
                                        value={"$" + (product ? total : 0)}
                                        name="total"
                                        inputLabel="Total"
                                        readOnly={true}
                                        inputStyle=" bg-white"
                                    />
                                </div>
                                <div className="col-12">
                                    <CustomButton btnContent="Agregar" btnStyle="primary btn-block" icon="cart-plus" onClick={addToCart} />
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
                                        <tbody>
                                            {CartBody}
                                        </tbody>
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