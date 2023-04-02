import Image from 'next/image';
import React from 'react';
import Modal from './Modal';

export default function Card({ imgUrl, name, desc, id }) {
    return (
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <Modal id={id} name={name} />
            <div className="member">
                <div className="member-img">
                    <Image width={500} height={500} src={imgUrl} className="img-fluid" alt={name} />
                    <div className="social">
                        <a href="">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="member-info">
                    <h4>{name}</h4>
                    <span style={{ fontSize: 16 }}>{desc}</span>
                    <button
                        type="button"
                        className="btn btn-primary mt-4"
                        style={{ zIndex: 100 }}
                        data-bs-toggle="modal"
                        data-bs-target={'#' + id}
                    >
                        <i className="bi bi-person-check" style={{ marginRight: 5 }}></i>Book a Session
                    </button>
                </div>
            </div>
        </div>
    );
}
