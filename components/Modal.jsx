import React, { useState } from 'react';

export default function Modal({ id, name }) {
    const [formState, setFormState] = useState({
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        note: '',
        counsellor: name,
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;

        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formState);

        setLoading(true);
        const res = await fetch('/api/sessions/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });
        if (res.status === 202) {
            setSubmitted(true);
        }
        setLoading(false);
    };

    return (
        <div className="modal fade" id={id} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Booking a Session with {name}
                        </h5>
                        <button type="button" className="btn btn-sm btn-danger" data-bs-dismiss="modal">
                            X
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">
                                    Select Date
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    onChange={handleChange}
                                    value={formState.date}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">
                                    Select Time
                                </label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="time"
                                    onChange={handleChange}
                                    value={formState.time}
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter your name..."
                                    onChange={handleChange}
                                    value={formState.name}
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email..."
                                    onChange={handleChange}
                                    value={formState.email}
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">
                                    Phone No.
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Enter your phone number..."
                                    onChange={handleChange}
                                    value={formState.phone}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                    Additional Note
                                </label>
                                <textarea
                                    className="form-control"
                                    id="note"
                                    rows="3"
                                    placeholder="Enter any additional note..."
                                    onChange={handleChange}
                                    value={formState.note}
                                ></textarea>
                            </div>
                            <div className="modal-footer pb-0">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="submit" className="btn btn-success" disabled={submitted || loading}>
                                    {loading ? 'Booking...' : submitted ? 'Booked' : 'Book'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
