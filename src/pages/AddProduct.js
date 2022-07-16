import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentHeader from '../components/ContentHeader';
import CustomButton from '../components/CustomButton';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InputGroup from '../components/InputGroup';


const AddProduct = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [msu, setMSU] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [mdPrice, setMDPrice] = useState("")
    const [mdPercentage, setMDPercentage] = useState("")
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                <ContentHeader name="Agregar" parentName="Productos" parentRoute="/products" title="Incorporación de Producto" />
                <section className="content">
                    <div className="card">
                        <div className="card-body">
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
                                        icon="times" onClick={() => navigate("/products")}
                                    />
                                    <CustomButton btnContent="Guardar" btnStyle="primary" icon="save" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AddProduct