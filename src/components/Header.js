
const Header = () => {
    return (
        <div className="container-fluid header">
            <div className="text-center">
                <img src="/profile.jpg" className="img-thumbnail rounded-circle profile-container" alt="profile-pic"/>
                <p className="mt-3 name-container">MAVE RICK PAZ</p>
                <p className="position-container">WEB DEVELOPER</p>

                <div className="mt-3">
                    <button className="btn btn-light me-2"><i className="bi bi-envelope-fill email-btn"></i></button>
                    <button className="btn btn-light me-2"><i className="bi bi-github github-btn"></i></button>
                    <button className="btn btn-light"><i className="bi bi-linkedin linkedin-btn"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Header
