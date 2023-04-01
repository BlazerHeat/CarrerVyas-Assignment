import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Booking from '../components/Booking';

export default function HomePage() {
    return (
        <main id="#main">
            <Hero />
            <Services />
            <Booking />
        </main>
    );
}
