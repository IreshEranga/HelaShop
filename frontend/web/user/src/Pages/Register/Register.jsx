import React from 'react'

export default function Register() {
    return (
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100">
            <div className="position-relative z-index-5">
                <div className="row">
                   
                    <div className="col-xl-5 col-xxl-4">
                        <div className="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4">
                            <div className="col-sm-8 col-md-6 col-xl-9">
                                <h2 className="mb-3 fs-7 fw-bolder">Welcome to Modernize</h2>
                                <p className=" mb-9">Lets Register</p>
                                <div className="row">
                                    <div className="col-6 mb-2 mb-sm-0">
                                        <a className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" href="javascript:void(0)" role="button">
                                            <img src="../assets/images/svgs/google-icon.svg" alt className="img-fluid me-2" width={18} height={18} />
                                            <span className="d-none d-sm-block me-1 flex-shrink-0">Sign in with</span>Google
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <a className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8" href="javascript:void(0)" role="button">
                                            <img src="../assets/images/svgs/facebook-icon.svg" alt className="img-fluid me-2" width={18} height={18} />
                                            <span className="d-none d-sm-block me-1 flex-shrink-0">Sign in with</span>FB
                                        </a>
                                    </div>
                                </div>
                                <div className="position-relative text-center my-4">
                                    <p className="mb-0 fs-4 px-3 d-inline-block text-bg-white text-dark z-index-5 position-relative">or sign Up
                                        with</p>
                                    <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
                                </div>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="exampleInputtext" aria-describedby="textHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <a href="./authentication-login.html" className="btn btn-primary w-100 py-8 mb-4 rounded-2">Sign Up</a>
                                    <div className="d-flex align-items-center">
                                        <p className="fs-4 mb-0 text-dark">Already have an Account?</p>
                                        <a className="text-primary fw-medium ms-2" href="./authentication-login.html">Sign In</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-xxl-8">
                        <div className="d-none d-xl-flex align-items-center justify-content-center" style={{ height: 'calc(100vh - 80px)' }}>
                            <img src="../assets/images/backgrounds/login-security.svg" alt className="img-fluid" width={500} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}