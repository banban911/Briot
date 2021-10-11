import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/home/Home";
import News from "./page/news/News";
import ErrorPage from "./page/error/ErrorPage";
import Download from "./page/download/Download";
// import SupportBugReport from "./page/support/BugReport";
// import SupportPlayerReport from "./page/support/PlayerReport";
// import SupportPayment from "./page/support/Payment";
// import SupportFeedback from "./page/support/Feedback";
// import Tournament from "./page/tournamnet/Tournament";
import ChampionDetail from "../src/page/gameInfo/ChampionDetail";
import Lol from "../src/page/gameInfo";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/news' component={News}></Route>
        <Route
          path='/game-info/champion/:championId'
          component={ChampionDetail}
        ></Route>
        <Route path='/game-info' component={Lol}></Route>
        <Route path='/tournament' component={ErrorPage}></Route>
        <Route path='/support/bug' component={ErrorPage}></Route>
        <Route path='/support/player-report' component={ErrorPage}></Route>
        <Route path='/support/payment' component={ErrorPage}></Route>
        <Route path='/support/feedback' component={ErrorPage}></Route>
        <Route path='/download' component={Download}></Route>
        <Route path='/:fukingNonsenseWords' component={ErrorPage}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
