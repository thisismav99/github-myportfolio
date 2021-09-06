import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="container-fluid text-center mt-3 project-container">
            <div className="row">
                <div className="col-xl-3">

                </div>
                <div className="col-xl-6">
                    <p className="fs-3 text-white">PROJECTS</p>
                    <p className="text-danger project-description">
                        I know it's a bummer, but due to confidentiality of these systems, 
                        I cannot show you the demo or the production build. So, I'll just list it 
                        all here and briefly explain what it does.
                    </p>

                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card text-dark mt-3">
                                <div className="card-header">
                                    QUEUING SYSTEM
                                </div>
                                <div className="card-body">
                                    <Link to="/projects/queuing" className="btn btn-dark">
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card text-dark mt-3">
                                <div className="card-header">
                                    PREVENTIVE MAINTENANCE
                                </div>
                                <div className="card-body">
                                    <Link to="/projects/preventivemaintenance" className="btn btn-dark">
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card text-dark mt-3">
                                <div className="card-header">
                                    CIF REGISTRATION
                                </div>
                                <div className="card-body">
                                    <Link to="/projects/cif" className="btn btn-dark">
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card text-dark mt-3">
                                <div className="card-header">
                                    WISH
                                </div>
                                <div className="card-body">
                                    <Link to="/projects/wish" className="btn btn-dark">
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card text-dark mt-3">
                                <div className="card-header">
                                    KMITS SYSTEM
                                </div>
                                <div className="card-body">
                                    <Link to="/projects/kmits" className="btn btn-dark">
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card text-dark mt-3">
                                <div className="card-header">
                                    ID SYSTEM
                                </div>
                                <div className="card-body">
                                    <Link to="/projects/idsystem" className="btn btn-dark">
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3">

                </div>
            </div>
        </div>
    )
}

export default Footer
