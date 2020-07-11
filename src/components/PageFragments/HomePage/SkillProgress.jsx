import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={95} text="JavaScript" />
        <ProgressBar percent={90} text="TypeScript" />
        <ProgressBar percent={95} text="NodeJS" />
        <ProgressBar percent={75} text="Deno" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={100} text="Automation Testing" />
        <ProgressBar percent={100} text="Manual Testing" />
        <ProgressBar percent={90} text="WebdriverIO / Selenium" />
        <ProgressBar percent={75} text="React" />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
