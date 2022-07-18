import React, { useState } from 'react';
import useAuth from '../helpers/useAuth';
import { useNavigate } from 'react-router-dom';
import config from '../helpers/config.json'
import ContentHeader from '../components/ContentHeader';
import CustomButton from '../components/CustomButton';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InputGroup from '../components/InputGroup';

const AddProduct = ({ isAuth }) => {
    useAuth(isAuth)

    let error = ""
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [msu, setMSU] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [mdPrice, setMDPrice] = useState("")
    const [mdPercentage, setMDPercentage] = useState("")
    const [loading, setLoading] = useState(false)
    const fields = [name, msu, price, stock, mdPrice, mdPercentage]
    const fetchBody = {
        name: name,
        MSU: parseInt(msu),
        price: parseInt(price),
        stock: parseInt(stock),
        MDPrice: parseInt(mdPrice),
        MDPercentage: parseInt(mdPercentage),
        operatorId: config.operatorId
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fetchBody)
    }
    const handleSave = (event) => {
        event.preventDefault()

        error += fields.some(value => { return value === "" }) ?
            "Debe completar todos los campos.\n" : ""
        error += parseInt(mdPrice) > (parseInt(price) / 2) ?
            "El descuento por precio no debe superar la mitad del unitario.\n" : ""
        error += parseInt(mdPercentage) > 50 ?
            "El descuento por porcentaje no puede superar el 50%.\n" : ""

        if (error) {
            window.alert("Corrija los siguientes errores:\n" + error)
            error = ""
        } else {
            setLoading(true)
            fetch(config.apiURL + 'products', requestOptions)
                .then(() => {
                })
                .then(() => {
                    window.alert("Registro exitoso.")
                    setLoading(false)
                })
        }
    }
    const handleCancel = () => {
        if (fields.some(value => { return value !== "" })) {
            if (window.confirm("Hay campos sin guardar. ¿Desea descartar los cambios?")) {
                navigate('/products')
            }
        } else {
            navigate('/products')
        }
    }

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                <ContentHeader name="Agregar" parentName="Productos" parentRoute="/products" title="Incorporación de Producto" />
                <section className="content">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSave}>
                                <div className="row">
                                    <div className="col-12">
                                        <InputGroup type="text" name="name" value={name} setValue={setName} inputLabel="Nombre" />
                                    </div>
                                    <div className="col-4">
                                        <InputGroup type="text" name="min" value={msu} setValue={setMSU} inputLabel="Un. Min. de Venta" />
                                    </div>
                                    <div className="col-4">
                                        <InputGroup type="text" name="price" value={price} setValue={setPrice} inputLabel="Precio" />
                                    </div>
                                    <div className="col-4">
                                        <InputGroup type="text" name="stock" value={stock} setValue={setStock} inputLabel="Stock" />
                                    </div>
                                    <div className="col-6">
                                        <InputGroup type="text" name="maxDisPri" value={mdPrice} setValue={setMDPrice} inputLabel="Máximo Descuento Precio" />
                                    </div>
                                    <div className="col-6">
                                        <InputGroup type="text" name="maxDisPer" value={mdPercentage} setValue={setMDPercentage} inputLabel="Máximo Descuento Porcentaje" />
                                    </div>
                                    <div className="col-12 d-flex justify-content-between">
                                        <CustomButton btnContent="Cancelar" btnStyle="secondary"
                                            icon="times" onClick={handleCancel}
                                        />

                                        <CustomButton type='submit' btnContent="Guardar" btnStyle="primary" icon={loading ? "spin fa-spinner" : "save"} disabled={loading} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AddProduct