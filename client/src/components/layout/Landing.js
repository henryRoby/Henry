import React, { Component } from "react";

import Header from "./components/header";
import Main from "./components/main";

import Slide from "./slide";
import "./slide.css"
//import "./Landing.css";

class Landing extends Component {
  render() {
    return (

      <div className="name" >
        <div>
          <Slide />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9 mb-4">
                <iframe className="embed-responsive-item" src=""
                  allowfullscreen></iframe>
              </div>
             

            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Landing;
