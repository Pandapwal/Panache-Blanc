import React, { Component } from "react";
import "./css/contact.css";
import "./css/text.css";
 
class Contact extends Component {
  render() {
    return (
      <div className="content">
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
        <div className="dak-text">
          <div className="text-bg transform-center">
            YOYOYO
          </div>
        </div>
        <div className="dak-text">
            <div className="flex text-bg-2">
                <div className="weight-7">CAR</div>
                <div className="weight-2">MEET</div>
            </div>
        </div>
      </div>
    );
  }
}
 
export default Contact;