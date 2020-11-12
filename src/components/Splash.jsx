import React, { Component } from 'react';
import { Row, Col } from 'antd';
import {
  LinkedinFilled,
  TwitterSquareFilled,
  GithubFilled,
} from '@ant-design/icons';
import DockterLogo from '../assets/images/DockterLogo.png';
import '../assets/styles/Splash.css';

const Splash = () => {
  return (
    <div className="splash-page">
      <div className="icons">
        <a href="https://www.linkedin.com/company/dock">
          <LinkedinFilled style={{ fontSize: '32px', paddingRight: '15px' }} />
        </a>
        <a href="https://github.com/oslabs-beta/Dockter">
          <GithubFilled style={{ fontSize: '32px', paddingRight: '15px' }} />
        </a>
        <a href="https://twitter.com/Dockter_Banks">
          <TwitterSquareFilled
            style={{ fontSize: '32px', paddingRight: '15px' }}
          />
        </a>
      </div>
      <div>
        <img src={DockterLogo} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default Splash;
