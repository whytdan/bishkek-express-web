import React from 'react';

const InfoSection = () => {
  return (
    <section className="info_section" id="info_section">
      <div className="info_columns container">
        <ul>
          <li>
            <h3>Company driver earning</h3>
            <p>$0.9 per mile (all miles)</p>
          </li>
          <li>
            <h3>Gross fee</h3>
            <p>12%</p>
          </li>
          <li>
            <h3>Weekly average gross</h3>
            <p>
              Around $10k <br />
              Busy period gross $20k Dec-Jan <br />
              Max gross $25-$28k
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Cargo insurance</h3>
            <p>$1300 monthly flat rate</p>
          </li>
          <li>
            <h3>Bonus</h3>
            <p>
              No ELD FEE of fross is over #10k <br />
              Free Planet Fitness Access
            </p>
          </li>
          <li>
            <h3>Full trucking company service</h3>
            <p>
              Dispatching, accaunting, ELD <br />
              Work with us with your own MC <br />
              Gross fee 5%
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Driver deposit</h3>
            <p>$1000</p>
          </li>
          <li>
            <h3>Devices</h3>
            <p>
              ELD, prepass, <br />
              fuel card (TCS, Pilot)
            </p>
          </li>
          <li>
            <h3>Truck lease</h3>
            <p>
              $1200 weekly rate <br />
              2015-2017 trucks
            </p>
          </li>
        </ul>
      </div>
      <div className="below_info_contacts container">
        <a href="#">Our contacts</a>
      </div>
    </section>
  );
};

export default InfoSection;
