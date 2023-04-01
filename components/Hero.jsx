import React from 'react';

export default function Hero() {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <h1>Empowering your career, one step at a time with CarrerVyas.</h1>
                        <p className="text-white">
                            CarrerVyas is a professional career counselling company dedicated to empowering individuals
                            to achieve their career goals. Our team of experienced career counsellors provides
                            personalized guidance and support to help individuals navigate their career paths.
                        </p>
                        <a href="#team" className="btn-get-started scrollto">
                            Click Here to Book a Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
