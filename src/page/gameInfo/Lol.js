import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { ChampIcon, RegionIcon, MapIcon } from "../../components/icons/Icons";
import Champion from "./Champion";
import Map from "./Map";
import Region from "./Region";

function Lol() {
  let { path, url } = useRouteMatch();

  return (
    <div style={{ marginTop: "85px", marginBottom: "500px" }}>
      <ul className='d-flex justify-content-center'>
        <li>
          <Link
            to={`${url}/champion`}
            className='d-flex align-items-center flex-column mx-4 px-3'
          >
            <ChampIcon />
          </Link>
        </li>
        <li>
          <Link
            to={`${url}/map`}
            className='d-flex align-items-center flex-column mx-4 px-3'
          >
            <MapIcon />
          </Link>
        </li>
        <li>
          <Link
            to={`${url}/region`}
            className='d-flex align-items-center flex-column mx-4 px-3'
          >
            <RegionIcon />
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/champion`} component={Champion}></Route>
        <Route path={`${path}/map`} component={Map}></Route>
        <Route path={`${path}/region`} component={Region}></Route>
      </Switch>
    </div>
  );
}

export default Lol;
