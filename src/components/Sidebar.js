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
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    </ul>
                </nav>
            </div>
        </aside>

    )
}

export default Sidebar