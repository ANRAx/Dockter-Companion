import React, { Component } from 'react';
import '../assets/styles/Features.css';
import { Carousel } from 'antd';
import search from '../assets/images/seach.gif';
import storage from '../assets/images/storage.png';
import time from '../assets/images/time.gif';

const Features = () => {
  return (
    <div className="aCarousel">
      <h1 className="features-heading">Features</h1>
      <Carousel autoplay>
        <div className="realTime-slide">
          <div className="slide">
            <h3 className="slide-heading">Real-time Log Aggregation</h3>
            <img src={time} className="picture" alt="timegif" />
            <p className="slide-body">
              Communications with the Docker Engine API allow us to wrangle
              container streams and translate those chunks into readable data
              that can be viewed on an intuitive dashboard
            </p>
          </div>
        </div>

        <div className="storage-slide">
          <div className="slide">
            <h3 className="slide-heading">Efficient Storage</h3>
            <img src={storage} className="picture" alt="storagepic" />
            <p className="slide-body">
              With the power of Electron, Dockter provides users with the
              flexibility to store container logs in local memory or on local
              disk storage
            </p>
          </div>
        </div>

        <div className="search-slide">
          <div className="slide">
            <h3 className="slide-heading">Search Capability</h3>
            <img src={search} className="picture" alt="searchgif" />
            <p className="slide-body">
              Container debugging has never been easier thanks to the snappy
              filter, sort, and search functionality of Dockter
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Features;
