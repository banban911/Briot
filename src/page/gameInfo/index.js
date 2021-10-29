import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { ChampIcon, RegionIcon, MapIcon } from "../../components/icons/Icons";
import Champion from "./Champion";
import Media from "./Media";
import Region from "./Region";
import "./Lol.scss";

function Lol() {
  let { path, url } = useRouteMatch();

  return (
    <div className='lol_container'>
      <ul className='lol_nav d-flex justify-content-center'>
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
            to={`${url}/media`}
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
        <Route path={`${path}/media`} component={Media}></Route>
        <Route path={`${path}/region`} component={Region}></Route>
      </Switch>
    </div>
  );
}

export default Lol;
