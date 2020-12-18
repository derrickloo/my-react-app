import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the Video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50"/>
          <img src={require('../images/logo-figma.png')} width="50"/>
          <img src={require('../images/logo-studio.png')} width="50"/>
          <img src={require('../images/logo-framer.png')} width="50"/>
          <img src={require('../images/logo-react.png')} width="50"/>
          <img src={require('../images/logo-swift.png')} width="50"/>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="Design System with Figma"
          text="10 sections"
          image={require('../images/wallpaper.jpg')} />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')} />
        <Card
          title="Sound Design with CuBase"
          text="6 sections"
          image={require('../images/wallpaper3.jpg')} />
        <Card
        title="Build an ARKit 2 app"
        text="10 sections"
        image={require('../images/wallpaper4.jpg')} />
        <Card
        title="Motion Design in After Effects"
        text="8 sections"
        image={require('../images/wallpaper5.jpg')} />
        <Card
        title="Create a Spritekite game"
        text="8 sections"
        image={require('../images/wallpaper6.jpg')} />
        <Card
        title="Video Editing with Screenflow"
        text="6 sections"
        image={require('../images/wallpaper7.jpg')} />
        <Card
        title="Create a Sketch plugin"
        text="7 sections"
        image={require('../images/wallpaper8.jpg')} />
        <Card
        title="Learn Sketch"
        text="9 sections"
        image={require('../images/wallpaper9.jpg')} />
        <Card
        title="Learn iOS Design"
        text="12 sections"
        image={require('../images/wallpaper10.jpg')} />
        <Card
        title="Swift Advanced"
        text="22 sections"
        image={require('../images/wallpaper11.jpg')} />
        <Card
        title="Learn Swift"
        text="19 sections"
        image={require('../images/wallpaper12.jpg')} />
        </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
  </div>
)

export default IndexPage
