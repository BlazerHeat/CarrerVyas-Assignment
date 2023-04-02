import React from 'react';

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container d-md-flex py-4">
                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright{' '}
                        <strong>
                            <span>CarrerVyas</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                    <div className="credits">Designed by Vatsal Ghoghari</div>
                </div>
                <div className="social-links text-center text-md-end pt-3 pt-md-0">
                    <a href="#" className="twitter">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="google-plus">
                        <i className="bi bi-skype"></i>
                    </a>
                    <a href="#" className="linkedin">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
