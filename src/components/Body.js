
const Body = () => {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-xl-4">
                    <div className="card bg-dark mt-3">
                        <div className="card-header">
                            SKILLS
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush skills-container">
                                <li className="list-group-item">
                                    <p>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-half text-warning"></i>
                                    </p>
                                    <span>ASP.NET MVC, REACT JS</span>
                                </li>
                                <li className="list-group-item">
                                    <p>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                    </p>
                                    <span>Bootstrap, jQuery</span>
                                </li>
                                <li className="list-group-item">
                                    <p>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-half text-warning"></i>
                                    </p>
                                    <span>C#, HTML, CSS, JavaScript</span>
                                </li>
                                <li className="list-group-item">
                                    <p>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                    </p>
                                    <span>MS SQL, MySQL, SQL Server, Firebase</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="card bg-dark mt-3">
                        <div className="card-header">
                            EXPERIENCES
                        </div>
                        <div className="card-body">
                            <div className="accordion accordion-flush experience-container">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        COMPUTER PROGRAMMER I (2019 - 2020)
                                    </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-dark">
                                            Development of in house IT SYSTEM for DOH MMCHD. Monitoring and maintenance of
                                            existing systems.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        COMPUTER PROGRAMMER II (PRESENT)
                                    </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-dark">
                                            Development, monitoring and maintenance of both IT SYSTEMS for DOH MMCHD 
                                            and Central Office.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="card bg-dark mt-3">
                        <div className="card-header">
                            ABOUT ME
                        </div>
                        <div className="card-body">
                            <p className="fst-italic about-container">
                                <span className="quoute">"</span>I've been developing websites for 2 years and I loved it! I'm also fascinated by the
                                technology progress, especially this past couple of years, that's why I take this path.
                                Let me become a part of your team...<span className="quoute">"</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
