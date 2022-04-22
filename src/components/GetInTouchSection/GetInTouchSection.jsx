import React from 'react';
import Logo from '../../assets/icons/logo.svg';

const GetInTouchSection = () => {
  return (
    <section className="get_in_touch_section" id="get_in_touch_section">
      <div className="container form_container">
        <img src={Logo} alt="logo" />
        <form action>
          <h3>
            Let’s start <br />
            work with us!
          </h3>
          <div className="inputs">
            <input
              type="text"
              placeholder="Full name..."
              name="fullName"
              required
            />
            <input
              type="text"
              placeholder="Phone number..."
              name="phoneNumber"
              id="phoneNumberInput"
              required
            />
            <input type="text" placeholder="Upload CDL.." name="cdl" required />
            <input
              type="text"
              placeholder="Social security number..."
              name="socialSecurityNumber"
              required
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouchSection;
