import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

import Logo from "../../assest/Logo.svg";
import LogoDropdown from "../../assest/LogoDropdown.svg";

import { CardItemBig, CardItemSmall } from "../cardPlay/CardHeader";

// const { path, url } = useRouteMatch();

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
  const [showMenu, setShowMenu] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header
      className='header w-100 px-3 d-flex align-items-center'
      ref={onScrollRef}
    >
      <div className='navigation d-flex justify-content-between justify-content-lg-start justify-content-md-start justify-content-sm-between  w-100  align-items-center position-relative'>
        <div className='logo position-relative'>
          <div
            className='logo_wrap py-3 ms-4  d-flex align-items-center'
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
        <ul className='d-none d-lg-flex d-md-flex d-sm-none align-items-center w-100 justify-content-lg-between'>
          <div className='menu_links d-flex align-items-center'>
            <li className=' position-relative home'>
              <div className='px-3 py-4'>
                <NavLink to='/'>Home</NavLink>
              </div>
            </li>
            <li className=' position-relative news'>
              <div className='px-3 py-4'>
                <NavLink to='/news'>News</NavLink>
              </div>
            </li>
            <li className=' position-relative game-info'>
              <div className='px-3 py-4'>
                <NavLink to='/'>Game Info</NavLink>
              </div>
              <div className='game-info_dropdown position-absolute'>
                <ul>
                  <li>
                    <NavLink to='/game-info/lol'>League of Legend</NavLink>
                  </li>
                  <li>
                    <NavLink to='/game-info/tft'>Team Fight Tactic</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className=' position-relative esport'>
              <div className='px-3 py-4'>
                <NavLink to='/esport'>Esport</NavLink>
              </div>
            </li>
            <li className=' position-relative support'>
              <div className='px-3 py-4'>
                <NavLink to='/'>Support</NavLink>
              </div>
              <div className='support_dropdown position-absolute'>
                <ul>
                  <li>
                    <NavLink to='/support/bug'>Bug Report</NavLink>
                  </li>
                  <li>
                    <NavLink to='/support/player-report'>Player Report</NavLink>
                  </li>
                  <li>
                    <NavLink to='/support/problems'>Payment issue</NavLink>
                  </li>
                  <li>
                    <NavLink to='/support/feedback'>Feedback</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className=' position-relative download'>
              <div className='px-3 py-4'>
                <NavLink to='/'>Download</NavLink>
              </div>
              <div className='download_dropdown position-absolute'>
                <ul>
                  <li>
                    <NavLink to='/download/lol'>League of Legend</NavLink>
                  </li>
                  <li>
                    <NavLink to='/download/tft'>Team Fight Tactic</NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div className='search_bar d-flex align-items-center me-5'>
            <input
              type='text'
              name='search_nav'
              id='search_nav'
              placeholder='Search
              '
              style={{ backgroundColor: "transparent", border: "none" }}
            />
            <i className='bi bi-search'></i>
          </div>
        </ul>
        {/** Nav in mobile */}
        <ul
          className={`nav_mobile ${
            showMenu === true ? "show" : "hidden"
          } position-absolute`}
          style={{ top: "54px" }}
        >
          <li className='link_item_mobile search_bar d-flex align-items-center py-3'>
            <input
              type='text'
              name='search_nav'
              id='search_nav'
              placeholder='Search
              '
              style={{ backgroundColor: "transparent", border: "none" }}
            />
            <i className='bi bi-search'></i>
          </li>
          <li className='link_item_mobile w-100 py-3'>
            <div>
              <NavLink to='/'>Home</NavLink>
            </div>
          </li>
          <li className='link_item_mobile w-100 py-3'>
            <div>
              <NavLink to='news'>News</NavLink>
            </div>
          </li>
          <li className='link_item_mobile py-3 w-100'>
            <div>
              <NavLink to='game-info'>Game Info</NavLink>
            </div>
            <div className='game-info_dropdown_mobile'>
              <ul>
                <li>
                  <NavLink to='/game-info/lol'>League of Legend</NavLink>
                </li>
                <li>
                  <NavLink to='/game-info/tft'>Team Fight Tactic</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className='link_item_mobile py-3 w-100'>
            <div>
              <NavLink to='esport'>Esport</NavLink>
            </div>
          </li>
          <li className='link_item_mobile py-3 w-100'>
            <div>
              <NavLink to='support'>Support</NavLink>
            </div>
            <div className='support_dropdown_mobile'>
              <ul>
                <li>
                  <NavLink to='/support/bug'>Bug Report</NavLink>
                </li>
                <li>
                  <NavLink to='/support/player-report'>Player Report</NavLink>
                </li>
                <li>
                  <NavLink to='/support/problems'>Payment issue</NavLink>
                </li>
                <li>
                  <NavLink to='/support/feedback'>Feedback</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className='link_item_mobile py-3 w-100'>
            <div>
              <NavLink to='download'>Download</NavLink>
            </div>
            <div className='download_dropdown_mobile'>
              <ul>
                <li>
                  <NavLink to='/download/lol'>League of Legend</NavLink>
                </li>
                <li>
                  <NavLink to='/download/tft'>Team Fight Tactic</NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div
          className='hbgMenu d-block d-lg-none d-md-none d-sm-block'
          onClick={handleMenu}
        >
          <div style={{ width: "1.3rem", height: "1.3rem" }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='bi bi-list'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d={
                  showMenu === true
                    ? "M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
                    : "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                }
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
