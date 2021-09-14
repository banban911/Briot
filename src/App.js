import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/home/Home";
import News from "./page/news/News";
import ErrorPage from "./page/error/ErrorPage";
import GameInfoLol from "./page/gameInfo/Lol/Lol";
import GameInfoTft from "./page/gameInfo/Tft/Tft";
import DownloadLol from "./page/download/Lol";
import DownloadTft from "./page/download/Tft";
import SupportBugReport from "./page/support/BugReport";
import SupportPlayerReport from "./page/support/PlayerReport";
import SupportPayment from "./page/support/Payment";
import SupportFeedback from "./page/support/Feedback";
import Esport from "./page/esport/Esport";
import ChampionDetail from "../src/page/gameInfo/Lol/ChampionDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/news' component={News}></Route>
        <Route
          path='/game-info/lol/champion/:championId'
          component={ChampionDetail}
        ></Route>
        <Route path='/game-info/lol' component={GameInfoLol}></Route>
        <Route path='/game-info/tft' component={GameInfoTft}></Route>
        <Route path='/esport' component={Esport}></Route>
        <Route path='/support/bug' component={SupportBugReport}></Route>
        <Route
          path='/support/player-report'
          component={SupportPlayerReport}
        ></Route>
        <Route path='/support/payment' component={SupportPayment}></Route>
        <Route path='/support/feedback' component={SupportFeedback}></Route>
        <Route path='/download/lol' component={DownloadLol}></Route>
        <Route path='/download/tft' component={DownloadTft}></Route>
        <Route path='/:FukingNonsenseWords' component={ErrorPage}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
