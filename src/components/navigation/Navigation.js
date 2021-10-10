import React, { useState, useRef } from "react";
// import reactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

import { ReactComponent as Dropdown } from "../../assest/Dropdown.svg";
import { ReactComponent as LogoText } from "../../assest/LogoText.svg";
import { CardItemBig, CardItemSmall } from "../card/CardHeader";
import { Logo } from "../logo/Logo";

function Navigation() {
  const headerRef = useRef();
  const handleScrollNav = () => {
    const headerHeight = 0;
    let currScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currScrollPos > headerHeight) {
      headerRef.current.style.backgroundColor = "rgba(15, 15, 15, 0.85)";
    } else {
      headerRef.current.style.backgroundColor = "transparent";
    }
  };

  window.addEventListener("scroll", handleScrollNav);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function closeDropdown() {
    setIsDropdownOpen(false);
  }

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  const CardItemBigInfo = [
    {
      url: "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt98916f9f37820b37/605a44409074c10f292fce2a/WR_RiotBarImage2_v2.jpg",
      content: "Warm up your thumbs, and jump into the Open Beta",
    },
    {
      url: "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt8d8037c58f2f8df2/60f748f3da6f75588bd905e2/RiotPromoBarCard_ratio.jpg",
      content: "Take on tomorrow in Reckoning Dawn of Heroes, out now",
    },
  ];
  const CardItemSmallInfo = [
    {
      url: "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt5abbad4f1d1da663/602457cff4a7946af0338221/LOL_Key_Art_2021_318x428_RiotBar.jpg",
      content: "Play now",
      device: "window-macOS",
    },
    {
      url: "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltfb12cd79b2ec9643/5f5c2534806bc7495596e2e6/TFT_Fates_GameCard_v4.jpg",
      content: "Play now",
      device: "mobile-window-macOS",
    },
    {
      url: "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blte94074969e8e82fe/5e618391d5a7d573058228ba/Riot_Nav_Bar_Graphic_318x428.jpg",
      content: "Play now",
      device: "window",
    },
    {
      url: "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltc5c267abf9b7a277/61241c1f4d39656a33b080c6/LoR_BC5A21_5A-RiotBarApplicationSwitcher_318X428.jpg",
      content: "Play now",
      device: "mobile-window",
    },
  ];

  return (
    <header
      className='header w-100 px-3 d-flex align-items-center'
      ref={headerRef}
    >
      <div className='navigation d-flex justify-content-between justify-content-lg-start justify-content-md-start justify-content-sm-between  w-100  align-items-center position-relative'>
        <div className='logo position-relative'>
          <div // logo
            className='logo_wrap ms-4  d-flex align-items-center'
            style={{ padding: "calc((84.75px - 38.17px)/2) 0" }}
            onClick={toggleDropdown}
          >
            <Logo width='2.5rem' bgColor='#fff' color='#000' />
            <Dropdown
              className='ms-2 d-none d-lg-block d-md-block d-sm-none'
              style={{ width: "10px", height: "16px" }}
            />
          </div>
          <div
            className={`underlay ${
              isDropdownOpen === true ? "" : "d-none w-0"
            }`}
            onClick={closeDropdown}
          ></div>

          <div // riot products dropdown container
            className={`riot_products position-absolute align-items-center px-2 px-lg-4 px-md-3 px-sm-2  pb-4 overflow-hidden ${
              isDropdownOpen === true ? "open" : "close"
            }`}
          >
            <div className='riot_games'>
              <div //riot products dropdown header
                className='d-flex py-4 position-relative align-items-center'
              >
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
                {CardItemBigInfo.map((item, index) => (
                  <CardItemBig
                    className='w-100 w-lg-25 w-md-25 w-sm-100'
                    key={index}
                    url={item.url}
                    content={item.content}
                  />
                ))}
                {/* <div className='d-flex'> */}
                <div className='d-flex d-lg-inline-block d-md-inline-block d-sm-flex overflow-auto'>
                  {CardItemSmallInfo.map((item, index) => (
                    <CardItemSmall
                      key={index}
                      url={item.url}
                      content={item.content}
                      device={item.device}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className='d-none d-lg-flex d-md-flex d-sm-none align-items-center w-100 justify-content-lg-between'>
          <div className='menu_links d-flex align-items-center'>
            <hr
              style={{
                marginLeft: "0.6rem",
                width: " 1px",
                height: "2.5rem",
                backgroundColor: " #fff",
                border: "none",
              }}
            />
            <li className=' position-relative home'>
              <div className='p-3'>
                <NavLink to='/'>
                  <LogoText style={{ width: "3rem" }} />
                </NavLink>
              </div>
            </li>
            <li className=' position-relative news'>
              <div className='px-3 py-4 my-2'>
                <NavLink to='/news'>News</NavLink>
              </div>
            </li>
            <li className=' position-relative game-info'>
              <div className='px-3 py-4 my-2'>
                <NavLink to='/game-info/champion'>Game Info</NavLink>
              </div>
            </li>
            <li className=' position-relative esport'>
              <div className='px-3 py-4 my-2'>
                <NavLink to='/tournament'>Tournament</NavLink>
              </div>
            </li>
            <li className=' position-relative support'>
              <div className='px-3 py-4 my-2'>
                <NavLink to='/support/bug'>Support</NavLink>
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
                    <NavLink to='/support/payment'>Payment issue</NavLink>
                  </li>
                  <li>
                    <NavLink to='/support/feedback'>Feedback</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className=' position-relative download'>
              <div className='px-3 py-4 my-2'>
                <NavLink to='/download'>Download</NavLink>
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
          className={`nav_mobile pt-3 ${
            showMenu === true ? "show" : "hidden"
          } position-absolute`}
        >
          <li
            className='link_item_mobile search_bar d-flex align-items-center py-3'
            style={{ height: "fit-content" }}
          >
            <input
              type='text'
              name='search_nav'
              id='search_nav'
              placeholder='Search
              '
              style={{ backgroundColor: "transparent", border: "none" }}
            />
            <i className='bi bi-search' style={{ color: "#fff" }}></i>
          </li>
          <li className='link_item_mobile w-100 py-3'>
            <div>
              <NavLink onClick={handleMenu} to='/'>
                Home
              </NavLink>
            </div>
          </li>
          <li className='link_item_mobile w-100 py-3'>
            <div>
              <NavLink onClick={handleMenu} to='news'>
                News
              </NavLink>
            </div>
          </li>
          <li className='link_item_mobile py-3 w-100'>
            <div>
              <NavLink onClick={handleMenu} to='game-info/champion'>
                Game Info
              </NavLink>
            </div>
          </li>
          <li className='link_item_mobile py-3 w-100'>
            <div>
              <NavLink onClick={handleMenu} to='tournament'>
                Tournament
              </NavLink>
            </div>
          </li>
          <li className='link_item_mobile py-3 w-100 support_mobile'>
            <div>
              <NavLink to='support'>Support</NavLink>
            </div>
            <div className='support_dropdown_mobile'>
              <ul>
                <li>
                  <NavLink onClick={handleMenu} to='/support/bug'>
                    Bug Report
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleMenu} to='/support/player-report'>
                    Player Report
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleMenu} to='/support/payment'>
                    Payment issue
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleMenu} to='/support/feedback'>
                    Feedback
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div
          className='hbgMenu d-block d-lg-none d-md-none d-sm-block'
          onClick={handleMenu}
        >
          <div>
            <svg
              width='20'
              height='20'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='bi bi-list'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d={
                  showMenu === true
                    ? // close icon
                      "M4.27274 4.27274C4.35898 4.18629 4.46143 4.11769 4.57421 4.07089C4.687 4.02409 4.80792 4 4.93003 4C5.05214 4 5.17305 4.02409 5.28584 4.07089C5.39863 4.11769 5.50108 4.18629 5.58731 4.27274L10.5002 9.18753L15.4132 4.27274C15.4995 4.18643 15.602 4.11796 15.7147 4.07124C15.8275 4.02453 15.9484 4.00049 16.0705 4.00049C16.1925 4.00049 16.3134 4.02453 16.4262 4.07124C16.539 4.11796 16.6414 4.18643 16.7277 4.27274C16.8141 4.35906 16.8825 4.46153 16.9292 4.57431C16.976 4.68708 17 4.80796 17 4.93003C17 5.0521 16.976 5.17297 16.9292 5.28575C16.8825 5.39853 16.8141 5.501 16.7277 5.58731L11.813 10.5002L16.7277 15.4132C16.8141 15.4995 16.8825 15.602 16.9292 15.7147C16.976 15.8275 17 15.9484 17 16.0705C17 16.1925 16.976 16.3134 16.9292 16.4262C16.8825 16.539 16.8141 16.6414 16.7277 16.7277C16.6414 16.8141 16.539 16.8825 16.4262 16.9292C16.3134 16.976 16.1925 17 16.0705 17C15.9484 17 15.8275 16.976 15.7147 16.9292C15.602 16.8825 15.4995 16.8141 15.4132 16.7277L10.5002 11.813L5.58731 16.7277C5.501 16.8141 5.39853 16.8825 5.28575 16.9292C5.17297 16.976 5.0521 17 4.93003 17C4.80796 17 4.68708 16.976 4.57431 16.9292C4.46153 16.8825 4.35906 16.8141 4.27274 16.7277C4.18643 16.6414 4.11796 16.539 4.07124 16.4262C4.02453 16.3134 4.00049 16.1925 4.00049 16.0705C4.00049 15.9484 4.02453 15.8275 4.07124 15.7147C4.11796 15.602 4.18643 15.4995 4.27274 15.4132L9.18753 10.5002L4.27274 5.58731C4.18629 5.50108 4.11769 5.39863 4.07089 5.28584C4.02409 5.17305 4 5.05214 4 4.93003C4 4.80792 4.02409 4.687 4.07089 4.57421C4.11769 4.46143 4.18629 4.35898 4.27274 4.27274Z"
                    : // menu icon
                      "M3.125 15C3.125 14.8342 3.19085 14.6753 3.30806 14.5581C3.42527 14.4408 3.58424 14.375 3.75 14.375H16.25C16.4158 14.375 16.5747 14.4408 16.6919 14.5581C16.8092 14.6753 16.875 14.8342 16.875 15C16.875 15.1658 16.8092 15.3247 16.6919 15.4419C16.5747 15.5592 16.4158 15.625 16.25 15.625H3.75C3.58424 15.625 3.42527 15.5592 3.30806 15.4419C3.19085 15.3247 3.125 15.1658 3.125 15ZM3.125 10C3.125 9.83424 3.19085 9.67527 3.30806 9.55806C3.42527 9.44085 3.58424 9.375 3.75 9.375H16.25C16.4158 9.375 16.5747 9.44085 16.6919 9.55806C16.8092 9.67527 16.875 9.83424 16.875 10C16.875 10.1658 16.8092 10.3247 16.6919 10.4419C16.5747 10.5592 16.4158 10.625 16.25 10.625H3.75C3.58424 10.625 3.42527 10.5592 3.30806 10.4419C3.19085 10.3247 3.125 10.1658 3.125 10ZM3.125 5C3.125 4.83424 3.19085 4.67527 3.30806 4.55806C3.42527 4.44085 3.58424 4.375 3.75 4.375H16.25C16.4158 4.375 16.5747 4.44085 16.6919 4.55806C16.8092 4.67527 16.875 4.83424 16.875 5C16.875 5.16576 16.8092 5.32473 16.6919 5.44194C16.5747 5.55915 16.4158 5.625 16.25 5.625H3.75C3.58424 5.625 3.42527 5.55915 3.30806 5.44194C3.19085 5.32473 3.125 5.16576 3.125 5V5Z"
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
