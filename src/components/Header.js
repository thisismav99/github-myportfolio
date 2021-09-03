
const Header = () => {
    return (
        <div className="container-fluid header">
            <div className="text-center">
                <img src="/profile.jpg" className="img-thumbnail rounded-circle" width="200" alt="profile-pic"/>
                <p className="fs-2 mt-3">MAVE RICK PAZ</p>
                <p className="fs-5">WEB DEVELOPER</p>

                <div className="mt-3">
                    <button className="btn btn-light me-2"><i className="bi bi-envelope-fill"></i></button>
                    <button className="btn btn-light me-2"><i className="bi bi-github"></i></button>
                    <button className="btn btn-light"><i className="bi bi-linkedin"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Header
