import { addDoc, collection, getDocs } from 'firebase/firestore';
import { database } from '../../firebase';
import { sendEmail } from '../../nodemailer';

export default async function handler(req, res) {
    const sessionsCollection = collection(database, 'Booked Sessions');
    if (req.method === 'POST') {
        try {
            const data = req.body;
            await addDoc(sessionsCollection, data);
            await sendEmail(data.email, 'Session Booked!', JSON.stringify(data, null, 2));
            res.status(202).send({ message: 'session booked!' });
        } catch (err) {
            console.error(err);
            res.status(500).send({ error: err.message });
        }
    }

    if (req.method === 'GET') {
        try {
            const { docs } = await getDocs(sessionsCollection);

            const bookedSessions = docs.map(doc => {
                return doc.data();
            });

            res.status(200).json({ bookedSessions });
        } catch (err) {
            console.error(err);
            res.status(500).send({ error: err.message });
        }
    }
}
