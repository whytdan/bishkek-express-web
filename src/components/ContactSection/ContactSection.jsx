import React from 'react';
import StockImg from '../../assets/img/stock.png';

const ContactSection = () => {
  return (
    <section className="contact_section" id="contact_section">
      <div className="container">
        <div className="address">
          <h3>Address</h3>
          <p>
            Bishkek Express inc. <br />
            Offiice 3501 W Algonquin Rd, <br />
            Suite 320 Rolling Meadows, IL 6008 <br />
          </p>
          <div className="address_call">
            <p>HR Erik 773-629-2260</p>
            <a href="tel:+9967736292260" data-rel="external">
              Call
            </a>
          </div>
        </div>
        <div className="map_container">
          <div className="map" />
          <img src={StockImg} alt="stock img" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
