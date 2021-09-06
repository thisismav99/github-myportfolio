
const Header = () => {
    const gitHub = () => {
        window.open("https://github.com/thisismav99");
    }

    const linkedIn = () => {
        window.open("https://linkedin.com/in/mave-rick-paz-679250220");
    } 

    return (
        <div className="container-fluid header">
            <div className="text-center">
                <img src="/profile.jpg" className="img-thumbnail rounded-circle profile-container" alt="profile-pic"/>
                <p className="mt-3 name-container">MAVE RICK PAZ</p>
                <p className="position-container">WEB DEVELOPER</p>

                <div className="mt-3">
                    <button className="btn btn-light me-2" data-bs-toggle="collapse" data-bs-target="#collapseEmail"><i className="bi bi-envelope-fill email-btn"></i></button>
                    <button onClick={() => gitHub()} className="btn btn-light me-2"><i className="bi bi-github github-btn"></i></button>
                    <button onClick={() => linkedIn()} className="btn btn-light"><i className="bi bi-linkedin linkedin-btn"></i></button>
                </div>

                <div className="row">
                    <div className="col-xl-3">

                    </div>
                    <div className="col-xl-6">
                        <div className="collapse mt-3" id="collapseEmail">
                            <div className="card card-body text-dark">
                                maverickcpaz@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
