import React, { useEffect, useState } from 'react'
import RecitersScreen from './RecitersScreen.jsx'
import ChaptersScreen from './ChaptersScreen.jsx'
import PlayScreen from './PlayScreen';
import axios from 'axios';

export default function HomeSrcreen() {
  //1
  let [reciter, setReciter] = useState([]);
  let [chap, SetChap] = useState([]);
  let [reciterDetles, setreciterDetles] = useState(null);
  let [chapDetles, setchapDetles] = useState(null);
  

  async function getRecit() {
    try {
      let { data } = await axios.get(`https://mp3quran.net/api/_english.php`);
      setReciter(data.reciters);
    } catch (error) {
      console.error("Error fetching reciters:", error);
    }
  }

  useEffect(() => {
    getRecit();
  }, []);
  const reciterHandler = (molana) => {
    setreciterDetles(molana)
  };

  //2

  async function getChapters() {
    try {
      let { data } = await axios.get(`https://api.quran.com/api/v4/chapters`);
      SetChap(data.chapters);
    } catch (error) {
      console.error("Error fetching reciters:", error);
    }
  }

  useEffect(() => {
    getChapters();
  }, [reciter]);

  const ChapHandler = (sower) => {
    setchapDetles(sower)
  };

  return (
    <div className='all_home'>
       <div className='container'>
      <div className="row  gy-3 py-5 home-body">
        <div className="col-md-4 scroll ">
          <RecitersScreen  reciter={reciter} reciterHandler={reciterHandler}/>
        </div>
        <div className="col-md-4 scroll ">
         
          <ChaptersScreen chap={chap} ChapHandler={ChapHandler}  />
        </div>
        <div className="col-md-4 scroll ">
        <PlayScreen reciterDetles={reciterDetles} chapDetles={chapDetles}  />
        </div>
      </div>
    </div>
    </div>
   
  )
}
