import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { ChampIcon } from "../../components/icons/Icons";
import CardChampion from "../../components/card/CardChampion";
import "./Lol.scss";
const axios = require("axios");

function Champions() {
  const { url } = useRouteMatch();
  const [champion, setChampion] = useState([]);
  const [filterRole, setFilterRole] = useState("");
  const [itemNum, setItemNum] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // load 15 more champion once
  const loadmore = () => {
    const newItemNum = itemNum + 15;
    setItemNum(newItemNum);
  };

  //toggle active tab in filtering as champion role
  const toogleTabActive = () => {
    const roles = document.querySelectorAll(".filter_role_item");

    roles.forEach((role) => {
      role.onclick = function () {
        let currentActive = document.querySelector(".filter_role_item.active");
        if (role === currentActive) {
          return;
        } else {
          currentActive.classList.remove("active");
          role.classList.add("active");
        }
      };
    });
  };

  // get saerch term
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    event.preventDefault();
    console.log(searchTerm);
  };

  useEffect(() => {
    const fetchChampion = async () => {
      try {
        const response = await axios.get(
          "https://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion.json"
        );

        const championData = Object.values(response.data.data);
        if (searchTerm !== "") {
          const rerults = championData.filter((item) =>
            item.id.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSearchResults(rerults);
          setChampion(rerults);
          console.log(searchResults);
        } else {
          setChampion(championData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // execute functions
    fetchChampion();
    toogleTabActive();
  }, [searchTerm, searchResults]);

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
          <label>
            <ChampIcon />
          </label>

          <input
            className='ms-3'
            type='text'
            name='search_nav'
            value={searchTerm}
            onChange={handleChange}
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
        <ul className='champion_trait position-relative justify-content-around align-items-center flex-column flex-md-row flex-sm-column d-none d-md-flex d-sm-none'>
          <li
            className='filter_role_item active'
            onClick={() => {
              setFilterRole("");
            }}
          >
            All
          </li>

          <li
            className='filter_role_item'
            onClick={() => {
              setFilterRole("Assassin");
            }}
          >
            Assassin
          </li>
          <li
            className='filter_role_item'
            onClick={() => {
              setFilterRole("Fighter");
            }}
          >
            Fighter
          </li>
          <li
            className='filter_role_item'
            onClick={() => {
              setFilterRole("Mage");
            }}
          >
            Mage
          </li>
          <li
            className='filter_role_item'
            onClick={() => {
              setFilterRole("Marksman");
            }}
          >
            Marksman
          </li>
          <li
            className='filter_role_item'
            onClick={() => {
              setFilterRole("Support");
            }}
          >
            Support
          </li>
          <li
            className='filter_role_item'
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
            className='filter_role_item'
            onClick={() => {
              setFilterRole("Fighter");
            }}
          >
            Fighter
          </option>
          <option
            value='Mage'
            className='filter_role_item'
            onClick={() => {
              setFilterRole("Mage");
            }}
          >
            Mage
          </option>
          <option
            value='Marksman'
            className='filter_role_item'
            onClick={() => {
              setFilterRole("Marksman");
            }}
          >
            Marksman
          </option>
          <option
            value='Support'
            className='filter_role_item'
            onClick={() => {
              setFilterRole("Support");
            }}
          >
            Support
          </option>
          <option
            value='Tank'
            className='filter_role_item'
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
