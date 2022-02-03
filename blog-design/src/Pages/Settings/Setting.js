import React from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import "./setting.css";

export const Setting = () => {
  return (
    <div className="setting">
      <div className="settingsWraper">
        <div className="settingTitle">
          <span className="settingTitleUpdate">Update Your Account</span>
          <span className="settingTitleDelete">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingPPinput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Username" name="name" />
          <label>Email </label>
          <input type="email" placeholder="Email@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="password.." name="password" />
          <button className="settingSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
