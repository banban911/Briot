import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { ChampIcon } from "../../components/icons/Icons";
import Champion from "./Champion";
import Map from "./Map";
import Story from "./Region";

function Lol() {
  let { path, url } = useRouteMatch();

  const linkstyle = {
    paddingTop: "1rem",
    paddingLeft: "1rem",
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: "'Source Serif Pro', serif",
    color: "rgb(103, 71, 31)",
    background:
      "rgba(0, 0, 0, 0) -webkit-linear-gradient(bottom, rgb(103, 71, 31), rgb(203, 172, 98)) repeat scroll 0% 0% padding-box text",
    letterSpacing: "1rem",
    textAlign: "center",
  };
  return (
    <div style={{ marginTop: "70px", marginBottom: "500px" }}>
      Solo Yasuo khong brooo?
      <ul className='d-flex justify-content-center'>
        <li>
          <Link
            to={`${url}/champion`}
            className='d-flex align-items-center flex-column mx-4 px-3'
          >
            <ChampIcon />
            <p style={linkstyle}>CHAMPION</p>
          </Link>
        </li>
        <li>
          <Link
            to={`${url}/map`}
            className='d-flex align-items-center flex-column mx-4 px-3'
          >
            <ChampIcon />
            <p style={linkstyle}>MAP</p>
          </Link>
        </li>
        <li>
          <Link
            to={`${url}/story`}
            className='d-flex align-items-center flex-column mx-4 px-3'
          >
            <ChampIcon />

            <p style={linkstyle}>REGION</p>
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/champion`} component={Champion}></Route>
        <Route path={`${path}/map`} component={Map}></Route>
        <Route path={`${path}/story`} component={Story}></Route>
      </Switch>
    </div>
  );
}

export default Lol;
