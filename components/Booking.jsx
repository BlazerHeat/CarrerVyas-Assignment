import React from 'react';
import Card from './Card';

export default function Booking() {
    return (
        <section id="team" className="team">
            <div className="container">
                <div className="section-title">
                    <h2>Book Counsellor</h2>
                    <p>Discover your career potential with CarrerVyas - Meet our expert career counsellors today!</p>
                </div>

                <div className="row">
                    <Card
                        id="card_1"
                        imgUrl={'/assets/img/team/team-1.jpg'}
                        name={'Walter Luis'}
                        desc={
                            "A final year undergrad student going to pursue Master's in Computer Science from Columbia University. Working on my application process almost a year ago, I understood the nook and crook of getting an admission at the top universities in the US. Now, being a part of this platform,I want to help and guide prospective students for their Masters programs."
                        }
                    />
                    <Card
                        id="card_2"
                        imgUrl={'/assets/img/team/team-2.jpg'}
                        name={'Sarah Luis'}
                        desc={
                            "A final year undergrad student going to pursue Master's in Computer Science from Columbia University. Working on my application process almost a year ago, I understood the nook and crook of getting an admission at the top universities in the US. Now, being a part of this platform,I want to help and guide prospective students for their Masters programs."
                        }
                    />
                    <Card
                        id="card_3"
                        imgUrl={'/assets/img/team/team-3.jpg'}
                        name={'Alex Luis'}
                        desc={
                            "A final year undergrad student going to pursue Master's in Computer Science from Columbia University. Working on my application process almost a year ago, I understood the nook and crook of getting an admission at the top universities in the US. Now, being a part of this platform,I want to help and guide prospective students for their Masters programs."
                        }
                    />
                    <Card
                        id="card_4"
                        imgUrl={'/assets/img/team/team-4.jpg'}
                        name={'Anna Luis'}
                        desc={
                            "A final year undergrad student going to pursue Master's in Computer Science from Columbia University. Working on my application process almost a year ago, I understood the nook and crook of getting an admission at the top universities in the US. Now, being a part of this platform,I want to help and guide prospective students for their Masters programs."
                        }
                    />
                </div>
            </div>
        </section>
    );
}
