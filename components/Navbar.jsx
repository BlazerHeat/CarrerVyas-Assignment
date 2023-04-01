import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                if (!scrolled) {
                    setScrolled(true);
                }
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', headerScrolled);
        return () => window.removeEventListener('scroll', headerScrolled);
    }, []);

    return (
        <>
            <header id="header" className={`fixed-top d-flex align-items-center ${scrolled && 'header-scrolled'}`}>
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto">
                        <a href="#">
                            Carrer<span>Vyas</span>
                        </a>
                    </h1>

                    <nav id="navbar" className={`navbar order-last order-lg-0 ${mobile && 'navbar-mobile'}`}>
                        <ul onClick={() => setMobile(false)}>
                            <li>
                                <a className="nav-link scrollto" href="#hero">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#services">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#team"
                                    className="get-started-btn scrollto"
                                    style={{ padding: '10px 20px', color: 'white' }}
                                >
                                    Book a Session
                                </a>
                            </li>
                        </ul>
                        <i
                            className={mobile ? 'bi bi-x mobile-nav-toggle' : 'bi bi-list mobile-nav-toggle'}
                            onClick={() => setMobile((prev) => !prev)}
                        ></i>
                    </nav>
                </div>
            </header>
            <a
                href="#"
                className={`back-to-top d-flex align-items-center justify-content-center ${scrolled && 'active'}`}
            >
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </>
    );
}
