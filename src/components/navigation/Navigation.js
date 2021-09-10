import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

import Logo from "../../assest/Logo.svg";
import LogoDropdown from "../../assest/LogoDropdown.svg";

import { CardItemBig, CardItemSmall } from "../cardPlay/CardHeader";

function Navigation() {
  const onScrollRef = useRef();
  let prevScrollPos = 0;

  const handleScrollNav = () => {
    let currScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currScrollPos > prevScrollPos) {
      onScrollRef.current.style.top = "-69px";
    } else {
      onScrollRef.current.style.top = "0";
    }
    prevScrollPos = currScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNav);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <header
      className='header w-100 px-3 d-flex align-items-center'
      ref={onScrollRef}
    >
      <div className='navigation d-flex justify-content-between justify-content-lg-start justify-content-md-start justify-content-sm-between  w-100  align-items-center position-relative'>
        <div className='logo position-relative'>
          <div
            className='logo_wrap py-4 ms-4  d-flex align-items-center'
            onClick={toggleDropdown}
          >
            <img src={Logo} alt='Riot Game' style={{ width: "75px" }} />
            <img
              className='ps-3 d-none d-lg-inline-block d-md-inline-block d-sm-none'
              width='8'
              height='5'
              src={LogoDropdown}
              alt='Explore Riot Games'
            />
          </div>
          <div
            className={`riot_products position-absolute align-items-center px-2 px-lg-4 px-md-3 px-sm-2  pb-4 ${
              isOpen === true ? "d-block" : "d-none"
            }`}
          >
            <div className='riot_games'>
              <div className='d-flex py-4 position-relative align-items-center'>
                <div className='position-absolute'></div>
                <div className='ps-1 flex-grow-1'>RIOT GAMES</div>
                <div
                  className='pe-1 d-flex align-items-center'
                  style={{ fontSize: "1rem", fontWeight: "normal" }}
                >
                  <p className='d-none d-lg-block d-sm-done mb-0'>
                    Visit Riot Games
                  </p>
                  <i
                    style={{ fontSize: "1.5rem" }}
                    className='ms-2 bi bi-x-square'
                    onClick={closeDropdown}
                  ></i>
                </div>
              </div>
              <div className='riot_games_content d-flex flex-column flex-lg-row flex-md-row flex-sm-column'>
                <CardItemBig
                  className='w-100 w-lg-25 w-md-25 w-sm-100'
                  url='https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt98916f9f37820b37/605a44409074c10f292fce2a/WR_RiotBarImage2_v2.jpg'
                  content='Warm up your thumbs, and jump into the Open Beta'
                />
                <CardItemBig
                  className='w-100 w-lg-25 w-md-25 w-sm-100'
                  url='https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt8d8037c58f2f8df2/60f748f3da6f75588bd905e2/RiotPromoBarCard_ratio.jpg'
                  content='Take on tomorrow in Reckoning Dawn of Heroes, out now'
                />
                <div className='d-flex'>
                  <CardItemSmall
                    className='w-50 w-lg-12.5 w-md-12.5 w-sm-50'
                    url='https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt5abbad4f1d1da663/602457cff4a7946af0338221/LOL_Key_Art_2021_318x428_RiotBar.jpg'
                    content='Play now'
                    device='window-macOS'
                  />
                  <CardItemSmall
                    className='w-50 w-lg-12.5 w-md-12.5 w-sm-50'
                    url='https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltfb12cd79b2ec9643/5f5c2534806bc7495596e2e6/TFT_Fates_GameCard_v4.jpg'
                    content='Play now'
                    device='mobile-window-macOS'
                  />
                </div>
                <div className='d-flex'>
                  <CardItemSmall
                    className='w-50 w-lg-12.5 w-md-12.5 w-sm-50'
                    url='https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blte94074969e8e82fe/5e618391d5a7d573058228ba/Riot_Nav_Bar_Graphic_318x428.jpg'
                    content='Play now'
                    device='window'
                  />
                  <CardItemSmall
                    className='w-50 w-lg-12.5 w-md-12.5 w-sm-50'
                    url='https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltc5c267abf9b7a277/61241c1f4d39656a33b080c6/LoR_BC5A21_5A-RiotBarApplicationSwitcher_318X428.jpg'
                    content='Play now'
                    device='mobile-window'
                  />
                </div>
              </div>

              {/* another cut of fuking long code, irritating !!! */}
            </div>
          </div>
          <div className='overlay'></div>
        </div>

        {/* cut this fukcing long code */}
        <ul className='px-2 d-none d-lg-flex d-md-flex d-sm-none'>
          <li className='link_item active p-3'>
            <Link to='news'>News</Link>
          </li>
          <li className='p-3'>
            <Link to='information'>Game Info</Link>
          </li>
          <li className='p-3'>
            <Link to='esport'>Esport</Link>
          </li>
          <li className='p-3'>
            <Link to='support'>Support</Link>
          </li>
          <li className='p-3'>
            <Link to='download'>Download</Link>
          </li>
        </ul>
        <div className='hbgMenu d-inline-block d-lg-none d-md-none d-sm-inline-block'>
          <i className='bi bi-list' style={{ fontSize: "1.3rem" }}></i>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
