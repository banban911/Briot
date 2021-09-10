import React from "react";
import "./CardMain.scss";
function CardMain(props) {
  const { url } = props;
  return (
    <div className='riot_game_item p-2 position-relative'>
      <div className='game_item'>
        <img src={url} alt='poster'></img>
      </div>
      <div className='game_item_overlay w-100 h-100 position-absolute'></div>
      <button className='px-5 py-2'>/ Offical Site</button>
    </div>
  );
}

export { CardMain };
