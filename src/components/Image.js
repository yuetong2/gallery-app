import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const Image = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "images"), (snapshot) => {
      let imgs = [];
      snapshot.forEach((doc) => {
        imgs.push({ ...doc.data(), id: doc.id });
      });
      setLoading(false);
      setImages(imgs);
    });

    return () => unsub();
  }, []);


  return (
    <div>
      <h1 className='font-bold text-5xl uppercase my-16'>Image Gallery</h1>
      {loading ? (
        <div className="mx-auto h-10 w-10 rounded-full border-4 border-slate-400 animate-ping"></div>
      ) : (
        <>
          {!images.length ? (
            <div className="text-center">No Images!</div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
              {images.map((image) => (
                <div key={image.id} className='polaroidEffect relative bg-white  border-white shadow-lg'>
                <img src={image.url} alt={image.id} className="w-full h-[400px] md:h-[500px] object-cover" />
                             </div>
             
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Image;
