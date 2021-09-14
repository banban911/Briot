import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  const footerLinkItem = [
    "PRESS",
    "SECURITY",
    "LEGAL",
    "LEADERSHIP",
    "CANDIDATE PRIVACY",
    "TERMS OF SERVICE",
    "PRIVACY NOTICE",
    "PLAYER SUPPORT",
    "E-VERIFY",
    "ACCESSIBILITY",
  ];
  return (
    <div className='footer px-5 py-5'>
      <div className='row'>
        <div className='logo col-lg-1 col-md-12 col-12 d-flex justify-content-center justify-content-lg-start'>
          <svg
            width='34'
            height='35'
            viewBox='0 0 34 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.652 31.6814L16.0762 27.5918L31.2953 28.3812L30.6117 34.9265L17.652 31.6814Z'
              fill='#E6E6E6'
            />
            <path
              d='M21.2979 0L0 10.143L3.29288 25.427H7.63847L6.88746 14.4946L7.55502 14.2843L10.1675 25.427H14.68L14.5131 12.1101L15.1807 11.8998L17.4626 25.427H22.2415L23.368 9.34061L24.0355 9.13031L25.2166 25.427H31.536L33.7601 3.05746L21.2979 0Z'
              fill='#E6E6E6'
            />
          </svg>
        </div>
        <div className='col-lg-11 col-md-12 col-12 d-flex row'>
          <div className='d-flex flex-wrap align-items-center justify-content-md-between justify-content-between col-lg-10 col-md-12 col-12 py-lg-0 py-md-2 py-2'>
            {footerLinkItem.map((item, index) => (
              <Link
                className='link_item mx-2 py-2 py-lg-0 py-md-2'
                style={{ minWidth: "fit-content" }}
                to={`./${item}`}
                key={index}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className='social_contact d-flex align-items-center justify-content-center col-lg-2 col-md-12 col-12'>
            <Link to='./' className='pe-3'>
              <i className='bi bi-facebook'></i>
            </Link>
            <Link to='./' className='pe-3'>
              <i className='bi bi-twitter'></i>
            </Link>
            <Link to='./' className='pe-3'>
              <i className='bi bi-linkedin'></i>
            </Link>
            <Link to='./' className='pe-3'>
              <i className='bi bi-youtube'></i>
            </Link>
          </div>
        </div>
      </div>

      <hr className='my-4' />
      <div className='row'>
        <Link
          to='./'
          className='d-flex justify-content-center justify-content-lg-start justify-content-md-start  justify-content-sm-center col-lg-1 col-12 col-md-2 col-sm-12 py-lg-0 py-md-2 py-2'
        >
          English
        </Link>
        <Link
          to='./'
          className='d-flex justify-content-center justify-content-lg-start justify-content-md-start  justify-content-sm-center col-lg-2 col-12 col-md-4 col-sm-12 py-lg-0 py-md-2 py-2'
        >
          Solo Yasuo khong bro!!!
        </Link>
        <p className='text-center d-flex justify-content-center justify-content-lg-start justify-content-md-start  justify-content-sm-center col-lg-4 col-12  col-md-6 col-sm-12 py-lg-0 py-md-2 py-2'>
          @2021 Nguyen Duy Ban. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
