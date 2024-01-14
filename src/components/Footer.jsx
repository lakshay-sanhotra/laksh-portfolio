import React from 'react'

function Footer() {
  return (
    <>
        <footer className="py-5 px-lg-5">
                <div className="container">
                    <div className="row gy-4 justify-content-between">
                        <div className="col-auto">
                            <p className="mb-0">inspired by <a target="_blank" href="https://www.youtube.com/@SA7MAN"
                                    className="fw-bold">SA7MAN</a> <br/>
                                    Developed by <a target="_blank" href="https://www.instagram.com/webdev.laksh/"
                                    className="fw-bold text-brand">webdev.laksh</a></p>
                        </div>
                        <div className="col-auto">
                            <div className="social-icons">
                                <a target="_blank" href="https://www.instagram.com/webdev.laksh/"><i className="lab la-instagram"></i></a>
                                <a target="_blank" href="https://github.com/laksh11nov"><i className="lab la-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    </>
  )
}

export default Footer