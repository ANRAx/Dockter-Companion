import React, { Component } from 'react';
import '../assets/styles/Authors.css';
import { Row, Col, Card } from 'antd';
import Benjamin from '../assets/images/ben.png';
import Anup from '../assets/images/anup.png';
import Nancy from '../assets/images/nancy.png';
import Kyle from '../assets/images/kyle.png';
import Sam from '../assets/images/sam.png';

const { Meta } = Card;

const Authors = () => {
  return (
    <div>
      <h1 className="authorsHeading">Meet the Team</h1>
      <div className="authorRowOne">
        <Row justify="center" align="middle">
          <Col span={4} style={{}}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="Brower" src={Benjamin} />}
            >
              <Meta title="Benjamin Brower" description="Fullstack Engineer" />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="Ramdass" src={Anup} />}
            >
              <Meta title="Anup Ramdass" description="Fullstack Engineer" />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="Kousholt" src={Nancy} />}
            >
              <Meta title="Nancy Kousholt" description="Fullstack Engineer" />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="Whang" src={Kyle} />}
            >
              <Meta title="Kyle Whang" description="Fullstack Engineer" />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="authorRowTwo">
        <Row justify="center" align="middle" offset>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="Kim" src={Sam} />}
            >
              <Meta title="Samuel Kim" description="Fullstack Engineer" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Authors;
