import React from 'react';

const AnnouncementSection = () => {
  return (
    <section className="announcement_section" id="announcement_section">
      <div className="announcement_info ">
        <h3 className="announcement_info_heading">
          🔆 We are hiring drivers and owner operators 📣
        </h3>
        <div className="announcement_info_columns">
          <ul>
            <li>
              <p>🔹 88% From Gross</p>
            </li>
            <li>
              <p>🔹 Trucks and Trailers (Reefers) are available for rent</p>
            </li>
            <li>
              <p>
                🔹 Weekly gross 6000 and up for Solo/9000 and up for Team
                (Depends on drivers way of driving)
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                🔹 Forwarding you confirmations to your email for each load{' '}
              </p>
            </li>
            <li>
              <p>
                🔹 We Speak in English, Russian, Turkish, Kyrgyz, Uzbek
                languages
              </p>
            </li>
            <li>
              <p>🔹 Pre Pass can be provided by request</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>🔹 Fuel cards</p>
            </li>
            <li>
              <p>🔹 Cash advance available</p>
            </li>
            <li>
              <p>🔹 IFTA and registration</p>
            </li>

            <li>
              <p>🔹 No forced dispatch</p>
            </li>
          </ul>
        </div>

        <p className="announcement_info_helper_text">
          ✅ Also we help drivers to purchase a truck without any interest
        </p>
      </div>
    </section>
  );
};

export default AnnouncementSection;
