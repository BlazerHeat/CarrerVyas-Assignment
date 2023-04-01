import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

import { database } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from './HomePage';

export default function Home() {
  const notesCollection = collection(database, 'notes');

  const [note, setNote] = useState('');

  const handleSubmit = async () => {
    try {
      await addDoc(notesCollection, { note });
      setNote('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Head>
        <title>CarrerVyas</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Navbar />

      <HomePage />

      <Footer />

      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
    </>
  );
}
