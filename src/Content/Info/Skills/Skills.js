import React from 'react';
import { BsFillTelephoneForwardFill} from "react-icons/bs";
import { BsFillPersonCheckFill} from "react-icons/bs";
import {AiFillCalendar} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";

function Skills () {
   return (
      <div className="group" id="skills">
          <div className="row">
            <div className="col-md-6">
              <div className="skills info-card">
                <h2>Skills</h2>
                <h3>HTML</h3>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                    style={{width:"60%"}}>
                  </div>
                </div>
                <h3>CSS</h3>
                <div className="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                    style={{width:"60%"}}>
                  </div>
                </div>
                <h3>JavaScript</h3>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                    style={{width:"40%"}}>
                  </div>
                </div>
                <h3>Github</h3>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                    style={{width: "60%"}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info info-card">
                <h2>Contact Info</h2>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-android-calendar icon"><AiFillCalendar/></i>
                  </div>
                  <div className="col-9">
                    <span>03/18/1996</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-person icon"><BsFillPersonCheckFill/></i>
                  </div>
                  <div className="col-9">
                    <span>Pavlo Tyvonchuk</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-ios-telephone icon"><BsFillTelephoneForwardFill/></i>
                  </div>
                  <div className="col-9">
                    <span><a href="tel:+380672242228">+38 (67) 222-42-28</a></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <i className="ion-at icon"><AiOutlineMail/></i>
                  </div>
                  <div class="col-9">
                    <span><a href="mailto:p.tyvonchuk@gmail.com">p.tyvonchuk@gmail.com</a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
   
      </div>
   )
}

export default Skills;
