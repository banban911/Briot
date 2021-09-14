import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { ChampIcon } from "../../../components/icons/Icons";
import Champion from "./Champion";
import ChampionDetail from "./Champion";
import Map from "./Map";
import Story from "./Region";

function Lol() {
  let { path, url } = useRouteMatch();

  return (
    <div style={{ marginTop: "70px", marginBottom: "500px" }}>
      Solo Yasuo khong brooo?
      <ul className='d-flex justify-content-center'>
        <li>
          <Link
            className='px-3'
            to={`${url}/champion`}
            className='d-flex align-items-center flex-column mx-4 px-3'
          >
            <ChampIcon />
            CHAMPION
          </Link>
        </li>
        <li>
          <Link
            className='px-3'
            to={`${url}/map`}
            className='d-flex align-items-center flex-column mx-4 px-3'
          >
            <ChampIcon />
            MAP
          </Link>
        </li>
        <li>
          <Link
            className='px-3'
            to={`${url}/story`}
            className='d-flex align-items-center flex-column mx-4 px-3'
          >
            <ChampIcon />
            REGION
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
