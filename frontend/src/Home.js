import React, { Component } from "react";
import { Link } from "react-router-dom";
import teamImage from './img/the_team.png';
import Header from "./Components/Header";
import "./css/home.css";
import "./css/text.css";
import "./css/button.css";
import "./css/blend-mode.css";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <Header
          title=""
          image="https://www.monsterenergy.com/media/uploads_image/2017/05/08/1900/600/e6471283c624807a9bfdaba2a5886d79.jpg?mod=v1_1b4a061c76dde2a6de02f93a29137381"
          text1="Panache"
          text2="Blanc"
          effects1="italic weight-3"
          effects2="shade weight-6"
          action="ACHETER"
          color="peach-hover"
          link='/catalog'
        />
        <Header
          title=""
          image="https://muskegontimes.com/wp-content/uploads/2019/08/DSC2970-2.jpg"
          text1="CAR"
          text2="MEET"
          effects1="weight-7"
          effects2="weight-3"
          action="RÉSERVER"
          color="rainy-ashville-hover"
          link='/stuff'
        />
        <Header
          title=""
          image={teamImage}
          text1="the"
          text2="CREW"
          effects1="italic shade weight-3"
          effects2="weight-7"
          action="NOUS CONTACTER"
          color="malibu-hover"
          link='/contact'
        />
      </div>
    );
  }
}
 
export default Home;