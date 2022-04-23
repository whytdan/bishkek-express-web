import React, { useRef, useState } from 'react';
import Logo from '../../assets/icons/logo.svg';
import InputMask from 'react-input-mask';
import Loader from '../Loader';
import { successToaster } from '../../helpers/toasters';

const { REACT_APP_EMAIL_SERVICE_LOGIN, REACT_APP_EMAIL_SERVICE_PASSWORD } =
  process.env;

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const GetInTouchSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    fullName: '',
    phoneNumber: '',
    socialSecurityNumber: '',
    cdl: null,
  });

  const handleTextInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleCdlInputChange = (event) => {
    const cdlFile = event.target.files[0];
    console.log('cdlFile: ', cdlFile);
    setFormState({ ...formState, cdl: cdlFile });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const { fullName, phoneNumber, socialSecurityNumber, cdl } = formState;
    const cdlBase64 = await toBase64(cdl);

    await window.Email.send({
      Host: 'smtp.gmail.com',
      Username: REACT_APP_EMAIL_SERVICE_LOGIN,
      Password: REACT_APP_EMAIL_SERVICE_PASSWORD,
      To: 'bishkek.express.web@gmail.com',
      From: REACT_APP_EMAIL_SERVICE_LOGIN,
      Subject: `New form submussion from bishkekexpress.biz from ${fullName}!`,
      Body: `Full Name: ${fullName}; Phone number: ${phoneNumber}; Social Security Number: ${socialSecurityNumber};`,
      Attachments: [
        {
          name: cdl.name,
          data: cdlBase64,
        },
      ],
    });
    setFormState({
      fullName: '',
      phoneNumber: '',
      socialSecurityNumber: '',
      cdl: null,
    });
    cdlInputRef.current.value = '';
    setIsLoading(false);
    successToaster('Message was sent successfully!');
  };

  const cdlInputRef = useRef();

  return (
    <section className="get_in_touch_section" id="get_in_touch_section">
      {isLoading && <Loader />}
      <div className="container form_container">
        <img src={Logo} alt="logo" />
        <form onSubmit={handleSubmit}>
          <h3>
            Let’s start <br />
            work with us!
          </h3>
          <div className="inputs">
            <input
              className="form_text_input"
              type="text"
              value={formState.fullName}
              onChange={handleTextInputChange}
              placeholder="Full name..."
              name="fullName"
              required
            />
            <InputMask
              className="form_text_input"
              name="phoneNumber"
              placeholder="Phone number..."
              value={formState.phoneNumber}
              onChange={handleTextInputChange}
              mask={'+1 999-9999999'}
              required
            />

            <InputMask
              className="form_text_input"
              name="socialSecurityNumber"
              placeholder="Social security number..."
              value={formState.socialSecurityNumber}
              onChange={handleTextInputChange}
              mask={'999-99-9999'}
              required
            />

            <div className="cdl_upload">
              <p>Upload CDL..</p>
              <input
                type="file"
                name="cdl"
                onChange={handleCdlInputChange}
                ref={cdlInputRef}
                required
              />
            </div>
            <button>Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouchSection;
