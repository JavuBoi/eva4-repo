import React from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../components/ContentHeader';
import CustomButton from '../components/CustomButton';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useFetch from '../helpers/useFetch';

function Products() {
    const { data: productList } = useFetch('products/')

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                <ContentHeader name="Productos" />
                <section className="content">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <Link to="/add-product" className="btn btn-success"><i className="fas fa-plus"></i> Nuevo</Link>
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
                                        <tr>
                                            <td>Manzana</td>
                                            <td>$100</td>
                                            <td>50</td>
                                            <td><CustomButton btnContent="Deshabilitar" btnStyle="secondary" icon="eye-slash" /></td>
                                            <td><CustomButton btnContent="Editar" btnStyle="warning" icon="pencil" /></td>
                                        </tr>
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