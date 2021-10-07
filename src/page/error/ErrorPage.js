import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

function ErrorPage() {
  return (
    <div
      className='error_page'
      style={{
        backgroundImage:
          "url(https://universe.leagueoflegends.com/images/trendingBackground.jpg)",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className='notif py-3'>
        <h2>404: PAGE NOT FOUND</h2>
        <h5 className='mt-2 mb-4'>The page hasn't been ready yet</h5>
        <Link className='returnBtn my-4' to='/'>
          <button
            className=' px-4 py-3'
            style={{
              backgroundColor: "transparent",
              color: "rgb(14, 150, 138)",
              fontWeight: "bold",
              border: "1px solid rgb(14, 150, 138)",
            }}
          >
            Return homepage
          </button>
        </Link>
      </div>
      <img
        className='page-404'
        src='https://rerollcdn.com/home/Ezreal.png'
        alt='ezreal'
      />
    </div>
  );
}

export default ErrorPage;
