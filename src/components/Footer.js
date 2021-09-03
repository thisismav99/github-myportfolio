
const Footer = () => {
    return (
        <div className="container-fluid text-center mt-3 contact-container">
            <p className="fs-3 text-white">CONTACT ME</p>
            <div className="row">
                <div className="col-xl-3">

                </div>
                <div className="col-xl-6">
                    <form autoComplete="off">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="emailInput" placeholder="Email" />
                            <label htmlFor="emailInput">Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <textarea className="form-control" id="messageInput" placeholder="Message"></textarea>
                            <label htmlFor="messageInput">Message</label>
                        </div>

                        <div className="d-grid gap-2">
                            <button className="btn btn-primary">SEND</button>
                        </div>
                    </form>
                </div>
                <div className="col-xl-3">

                </div>
            </div>
        </div>
    )
}

export default Footer
