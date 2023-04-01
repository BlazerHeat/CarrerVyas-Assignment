import React from 'react';

export default function Services() {
    return (
        <section id="services" className="services section-bg" style={{ marginTop: 0 }}>
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>"Expert Career Guidance Services offered by CarrerVyas."</p>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="icon-box">
                            <i className="bi bi-briefcase"></i>
                            <h4>
                                <a href="#">Career assessments</a>
                            </h4>
                            <p>
                                We provide comprehensive career assessments to help individuals identify their
                                strengths, interests, and skills, and determine the best career options for them.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="bi bi-card-checklist"></i>
                            <h4>
                                <a href="#">Resume building</a>
                            </h4>
                            <p>
                                Our team of experts helps individuals build a professional and effective resume that
                                highlights their skills and accomplishments, and stands out to potential employers.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="bi bi-bar-chart"></i>
                            <h4>
                                <a href="#">Interview coaching</a>
                            </h4>
                            <p>
                                We provide personalized interview coaching to help individuals prepare for job
                                interviews, including tips on how to answer common interview questions and strategies
                                for presenting themselves in the best possible light.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="bi bi-binoculars"></i>
                            <h4>
                                <a href="#">Job search strategies</a>
                            </h4>
                            <p>
                                We help individuals develop effective job search strategies, including networking,
                                online job searching, and leveraging social media to connect with potential employers.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="bi bi-brightness-high"></i>
                            <h4>
                                <a href="#">Career counselling</a>
                            </h4>
                            <p>
                                Our experienced career counsellors provide one-on-one counselling sessions to help
                                individuals navigate their career paths, set goals, and overcome any obstacles they may
                                face along the way.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="bi bi-calendar4-week"></i>
                            <h4>
                                <a href="#">Career development workshops</a>
                            </h4>
                            <p>
                                We offer a range of workshops and seminars designed to help individuals develop
                                essential career skills, such as communication, leadership, and time management.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
