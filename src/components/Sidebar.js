import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <aside className="main-sidebar elevation-4 anchor">
            <div className="container-fluid text-center">
                <Link to="/sales" className="navbar-brand mt-1">
                    <i className="fas fa-cloud"></i> <span className="brand-text"><b>Cloud</b>Sales</span>
                </Link>
            </div>
            <div className="sidebar">
                <nav className="mt-1">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-header">ACCESOS</li>
                        <li className="nav-item">
                            <Link to="/sales" className="nav-link">
                                <i className="nav-icon fas fa-cart-shopping" />
                                <p>Ventas</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sales" className="nav-link">
                                <i className="nav-icon fas fa-user" />
                                <p>Clientes</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">
                                <i className="nav-icon fas fa-box" />
                                <p>Productos</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add-product" className="nav-link">
                                <i className="nav-icon fas fa-boxes-packing" />
                                <p>Agregar Productos</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sales" className="nav-link">
                                <i className="nav-icon fas fa-users" />
                                <p>Usuarios</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sales" className="nav-link">
                                <i className="nav-icon fas fa-user-plus" />
                                <p>Agregar Usuario</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar