import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/home/Home";
import LeagueOfLegend from "./page/lol/LeagueOfLegend";
import TeamFightTactic from "./page/tft/TeamFightTactic";
import ErrorPage from "./page/error/ErrorPage";
function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/lol" component={LeagueOfLegend}></Route>
        <Route path="/tft" component={TeamFightTactic}></Route>
        <Route path="/:someNosenseWords" component={ErrorPage}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
