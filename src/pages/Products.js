import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentHeader from '../components/ContentHeader';
import CustomButton from '../components/CustomButton';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useFetchGet from '../helpers/useFetchGet';

const Products = () => {
    const navigate = useNavigate()
    const { data: productList } = useFetchGet('products/')

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                <ContentHeader name="Productos" title="Panel de Ventas" />
                <section className="content">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <CustomButton btnStyle="success" btnContent="Nuevo"
                                        icon="plus" onClick={() => navigate("/products/add")}
                                    />
                                </div>
                                <div className="col-12">
                                    <hr />
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Precio Unitario</th>
                                            <th>Stock Actual</th>
                                            <th colSpan={2}>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {productList && productList.map(({ id, name, MSU, price, stock, MDPrice, MDPercentage, active }) => {
                                            return (
                                                <tr key={id}>
                                                    <td>{name}</td>
                                                    <td>${price}</td>
                                                    <td>{stock}</td>
                                                    <td><CustomButton btnContent="Deshabilitar" btnStyle="secondary" icon="eye-slash" /></td>
                                                    <td><CustomButton btnContent="Editar" btnStyle="warning" icon="pencil" /></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Products