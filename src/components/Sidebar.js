import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <aside className="main-sidebar elevation-4 anchor">
            {/* Brand Logo */}
            <Link to="/sales" className="brand-link">
                <img src="./images/Logo-Gigante-2.png" alt="Gigante del Pacifico Logo" className="img-fluid elevation-0" />
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}

export default Sidebar