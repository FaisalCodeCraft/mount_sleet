import React from 'react'
import Header from './components/THeader';
import TrailCards from './components/TrailCards';
import Footer from 'components/Footer';
import NavBarCommon from 'components/NavBarCommon';

const Trails = () => {
  return (
    <React.Fragment>
      <NavBarCommon/>
      <Header/>
      <TrailCards/>
      <Footer/>
    </React.Fragment>
  )
}

export default Trails;