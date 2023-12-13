import React from "react";
import Header from "./components/Header";
import TourInfo from "./components/TourInfo";
import Experiences from "./components/Experiences";
import HomeTrails from "./components/HomeTrails";
import Footer from "components/Footer";
import NavBarCommon from "components/NavBarCommon";

const Home = () => {
  const sum = () => {
    // const abc =  TRAILS_CARDS_DATA.reduce((e,item)=> e + item.price * 1,0)
    // console.log(abc)
    // const abc=TRAILS_CARDS_DATA.filter((item)=>)
    // let abc = {
    //   id: 5,
    //   poster:
    //     "https://static.wixstatic.com/media/ea71bb_d7aa5f6c03c04c1c9bd06d2f2b7eaed5~mv2.jpg/v1/fill/w_683,h_683,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_d7aa5f6c03c04c1c9bd06d2f2b7eaed5~mv2.jpg",
    //   tittle: "Half Day Snowshoe",
    //   offer: "Offer Daily",
    //   timeDuration: "5",
    //   price: "80",
    // };
    // const { price, poster } = abc;
    // const testString = "s";
    // method 1 //
    // const numbers = [...poster].filter((i) => 0 / i === 0 || i ==='0' );
    // method 2 //
    // const numbers  = [...poster].filter((i)=>'0123456789'.includes(i))
    // method 3 //
    // const numbers = [...poster].filter((i) => i * 1 <= 9 && i >= 0);
    // console.log(numbers);
  };
  return (
    <React.Fragment>
      <NavBarCommon />
      <Header />
      <HomeTrails />
      <TourInfo />
      <Experiences />
      <Footer />
      {/* <Button onClick={sum}>Price</Button> */}
    </React.Fragment>
  );
};

export default Home;
