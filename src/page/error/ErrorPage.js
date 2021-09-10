import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

function ErrorPage() {
  return (
    <div className='error_page'>
      <div className='notif position-absolute py-4'>
        <img
          className='eareal-404 position-absolute'
          width='400'
          height='423'
          src='https://rerollcdn.com/home/Ezreal.png'
          alt='loading...'
        />
        <h2>
          404: PAGE NOT FOUND
          <br />
        </h2>
        <h1>
          Something wrong with your url
          <br />
          or
          <br />
          the page hasn't been ready yet
        </h1>
        <Link className='my-3 btn btn-warning py-3 px-4' to='/'>
          Return homepage
        </Link>
      </div>
      <img
        src='https://universe.leagueoflegends.com/images/trendingBackground.jpg'
        alt='loading...'
      />
    </div>
  );
}

export default ErrorPage;
