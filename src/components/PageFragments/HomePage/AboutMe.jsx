import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne:
    'Experienced SDET with a passion for quality with demonstrated history of working in private and public sectors and various industries. Strong communication skills with broad knowledge in software development.',
  paraTwo: '"Success - We cannot direct the wind but we can adjust the sails."',
};
const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Thomas', 'Chaplin']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paraOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="api.png"
            height={60}
            alt="api image"
            textH4="deno-api"
            textH3="TypeScript API using Deno"
            link="https://github.com/thomaschaplin/deno-api"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="isin.png"
            alt="isin image"
            textH4="isin-generator"
            textH3="Generate ISINs"
            link="https://github.com/thomaschaplin/isin-generator"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="currency.png"
            alt="currency image"
            textH4="currency-convertor"
            textH3="Convert Currencies"
            link="https://github.com/thomaschaplin/currency-convertor"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coronavirus.png"
            alt="coronavirus image"
            textH4="coronavirus-tracker"
            textH3="Track the Coronavirus"
            link="https://github.com/thomaschaplin/coronavirus-tracker"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="api2.png"
            alt="api image"
            textH4="qa-api-tool"
            textH3="JavaScript API using NodeJS"
            height={60}
            width={60}
            link="https://github.com/thomaschaplin/qa-api-tool"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="scissors.png"
            alt="scissors image"
            textH4="snippet-library"
            textH3="Google Chrome Extension"
            height={60}
            width={60}
            link="https://github.com/thomaschaplin/snippet-library"
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
