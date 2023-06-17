import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import VideoRow from './VideoRow';

export default function SearchPage() {
  return (
    <div className='searchPage'>
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="http://localhost:5175/images/DadWhoCodes.PNG"
        channel="DadWhoCodes"
        verified
        subs="160k"
        noOfVideos={400}
        description="The dad who codes is not just about code as I'm a huge basketball fan as well, so look to be entertained and learn from both!"
      />

      <hr />
      <VideoRow 
        title="Couch Family Vacation 🐬"
        views="1.2M views"
        timestamp="3 months ago"
        description="Couch`s Vacation In Florida!"
        channel="DadWhoCodes"
        image="http://localhost:5175/images/kids.JPG"
      />
      <VideoRow 
        title="Brothers Day Out"
        views="12k views"
        timestamp="1 months ago"
        description="Brothers Are Stronger Together 🍄"
        channel="DadWhoCodes"
        image="http://localhost:5175/images/brosdayout.JPG"
      />
      <VideoRow 
        title="Javascript Tutorial For Beginners"
        views="14k views"
        timestamp=" 1 day ago"
        description="Coding With Dad"
        channel="DadWhoCodes"
        image="http://localhost:5175/images/couch.jpg"
      />
    </div>
  );
}
