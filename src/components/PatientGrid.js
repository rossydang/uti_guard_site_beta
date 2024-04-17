'use client'
import React, { useState, useEffect } from 'react';
import PatientCard from './PatientCard';
import firebase_app from '../firebase/config';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

const PatientGrid = () => {
  const [temperature, setTemperature] = useState(0);
  const [cardColor, setColor] = useState("#808080");

  //colors
  //#81A969 -  greens
  //#F46246 - red
  //FCD739 - yellow
  //#808080 - gray
  useEffect(() => {

    // Reference to your Firestore collection
    const db = getFirestore(firebase_app);
    const temperatureRef = doc(db, 'Residents/states');

    // Listen for document changes
    const unsubscribe = onSnapshot(temperatureRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        const state = data.myMap.state;
        if (state == 0) {
          setColor("#808080")
        } else if (state == 1) {
          setColor("#81A969")
        } else if (state == 2) {
          setColor("#FCD739")
        } else if (state == 3) {
          setColor("#F46246")
        }
        else {
          setColor("#808080")
        }
        // console.log(data.myMap.state)

        setTemperature(data.myMap.state); //debug stuff
      } else {
        console.log('Temperature document does not exist');
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="d-flex flex-wrap bd-highlight justify-content-start">
      <div className="bd-highlight mb-3 me-3"><PatientCard temperature={"Room 000"} color={cardColor} /></div>
      <div className="bd-highlight mb-3 me-3 "><PatientCard temperature={"Room 123"} color="#FCD739" /></div>
      <div className="bd-highlight mb-3 me-3"><PatientCard temperature={"Room 223"} color="#FCD739" /></div>
      <div className="bd-highlight mb-3 me-3"><PatientCard temperature={"Room 323"} color="#FCD739" /></div>
      <div className="bd-highlight mb-3 me-3"><PatientCard temperature={"Room 324"} color="#81A969" /></div>
      <div className="bd-highlight mb-3 me-3"><PatientCard temperature={"Room 372"} color="#81A969" /></div>
      <div className="bd-highlight mb-3 me-3"><PatientCard temperature={"Room 378"} color="#81A969" /></div>
      <div className="bd-highlight mb-3 me-3"><PatientCard temperature={"Room 370"} color="#81A969" /></div>
      {/* Render other PatientCard components */}
    </div>
  );
};

export default PatientGrid;

