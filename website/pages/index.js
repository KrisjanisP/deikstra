export default function Home() {
    return (
        <div>
            <nav className="navbar bg-white">
                <div className="navbar-expand-md container">
                    <a className="navbar-brand" href="#">programme.lv</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-offcanvas">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-main">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">uzdevumi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">rezultāti</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">iesūtījumi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">sacensības</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">redaktors</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end" id="navbar-offcanvas">
                    <div className="offcanvas-body">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">uzdevumi</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" href="#">rezultāti</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" href="#">iesūtījumi</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" href="#">sacensības</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" href="#">redaktors</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}