import React from 'react'
import Header from './components/Header';
import Adventure from './components/Adventure';
import SleetGallery from './components/SleetGallery';
import Footer from 'components/Footer';
import NavBarCommon from 'components/NavBarCommon';

const About = () => {
  return (
    <React.Fragment>
      <NavBarCommon/>
        <Header/>
        <Adventure/>
        <SleetGallery/>
        <Footer/>
    </React.Fragment>
  )
}

export default About;