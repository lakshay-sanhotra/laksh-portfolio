import React from 'react'

function Footer() {
  return (
    <>
        <footer className="py-3 px-lg-5">
                <div className="container">
                    <div className="row gy-4 justify-content-between align-items-center">
                        <div className="col-auto">
                            <p className="mb-0">Design by: <a target="_blank" href="https://www.instagram.com/lakshay_11nov/"
                                    className="fw-bold text-brand">Lakshay</a></p>
                        </div>
                        <div className="col-auto">
                            <div className="social-icons">
                                <a target="_blank" href="https://www.instagram.com/mrcoder_xd/"><i className="lab la-instagram"></i></a>
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