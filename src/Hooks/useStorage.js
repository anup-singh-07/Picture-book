import { useState, useEffect } from 'react';
import { storage, db, timestamp } from '../Firebase/config.js';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //reference
        const storageRef = storage.ref(file.name);
        const dbRef = db.collection('images');

        storageRef.put(file).on('changed_state', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, err => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const time=timestamp();
            dbRef.add({url: url, createdAt: time});
            setUrl(url);
        })
    }, [file])
    return { progress, error, url }
}

export default useStorage;