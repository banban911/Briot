import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { ChampIcon } from "../../components/icons/Icons";
import CardChampion from "../../components/card/CardChampion";
import "./Lol.scss";
const axios = require("axios");

function Champions() {
  const { url } = useRouteMatch();
  const [champion, setChampion] = useState([]);
  // const anyRole = ;
  const [filterRole, setFilterRole] = useState("");

  useEffect(() => {
    const fetchChampion = async () => {
      try {
        const response = await axios.get(
          "https://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion.json"
        );
        console.log(Object.values(response.data));
        // window.localStorage.setItem(
        //   "datadragonChampion",
        //   Object.values(response.data)
        // );
        setChampion(Object.values(response.data.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchChampion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [itemNum, setItemNum] = useState(15);
  const loadmore = () => {
    const newItemNum = itemNum + 15;
    setItemNum(newItemNum);
  };
  return (
    <div className='lol'>
      <div
        className='filter_search px-3  mb-4 d-flex'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <form
          className='search d-flex py-2'
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <label for='search_nav'>
            <ChampIcon />
          </label>

          <input
            className='ms-3'
            type='text'
            name='search_nav'
            id='search_nav'
            placeholder='Find champion...'
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#fff",
              maxWidth: "50%",
            }}
          />
        </form>
        {/* navbar desktop min-wdith: 768px*/}
        <ul className='champion_trait position-relative justify-content-between align-items-center flex-column flex-md-row flex-sm-column d-none d-md-flex d-sm-none'>
          <li
            clasName='filter_role_item active'
            onClick={() => {
              setFilterRole("");
            }}
          >
            All
          </li>

          <li
            clasName='filter_role_item'
            onClick={() => {
              setFilterRole("Assassin");
            }}
          >
            Assassin
          </li>
          <li
            clasName='filter_role_item'
            onClick={() => {
              setFilterRole("Fighter");
            }}
          >
            Fighter
          </li>
          <li
            clasName='filter_role_item'
            onClick={() => {
              setFilterRole("Mage");
            }}
          >
            Mage
          </li>
          <li
            clasName='filter_role_item'
            onClick={() => {
              setFilterRole("Marksman");
            }}
          >
            Marksman
          </li>
          <li
            clasName='filter_role_item'
            onClick={() => {
              setFilterRole("Support");
            }}
          >
            Support
          </li>
          <li
            clasName='filter_role_item'
            onClick={() => {
              setFilterRole("Tank");
            }}
          >
            Tank
          </li>
        </ul>
        {/**navbar in mobile screen  */}
        <select className='form-select my-2 d-block d-md-none d-sm-block'>
          <option
            selected
            value='All'
            className='filter_role_item'
            onClick={() => {
              setFilterRole("");
            }}
          >
            All
          </option>
          <option
            onClick={() => {
              setFilterRole("Assassin");
            }}
            value='Assassin'
          >
            Assassin
          </option>
          <option
            value='Fighter'
            clasName='filter_role_item'
            onClick={() => {
              setFilterRole("Fighter");
            }}
          >
            Fighter
          </option>
          <option
            value='Mage'
            clasName='filter_role_item'
            onClick={() => {
              setFilterRole("Mage");
            }}
          >
            Mage
          </option>
          <option
            value='Marksman'
            clasName='filter_role_item'
            onClick={() => {
              setFilterRole("Marksman");
            }}
          >
            Marksman
          </option>
          <option
            value='Support'
            clasName='filter_role_item'
            onClick={() => {
              setFilterRole("Support");
            }}
          >
            Support
          </option>
          <option
            value='Tank'
            clasName='filter_role_item'
            onClick={() => {
              setFilterRole("Tank");
            }}
          >
            Tank
          </option>
        </select>
      </div>

      <div className='champions d-flex flex-wrap  container'>
        {champion
          .filter((item) => {
            return filterRole === "" ? item : item.tags.includes(filterRole);
          })
          .slice(0, itemNum)
          .map((item, index) => (
            <CardChampion
              url={`${url}/${item.id}`}
              key={index}
              name={item.name.toUpperCase()}
              img={item.id}
              tags={item.title.toUpperCase()}
            />
          ))}
      </div>
      <div className='d-flex justify-content-center align-items-center mt-4'>
        <button
          onClick={loadmore}
          className={`px-4 py-2 ${itemNum >= champion.length ? "d-none" : ""}`}
          style={{
            backgroundColor: "#252423",
            color: "tan",
            fontWeight: "600",
            border: "none",
          }}
        >
          See more
        </button>
      </div>
    </div>
  );
}

export default Champions;
