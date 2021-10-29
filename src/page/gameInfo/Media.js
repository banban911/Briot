import React from "react";
import CardMedia from "../../components/card/CardMedia";
import "./Lol.scss";
const cardmediaInfo = [
  {
    src: "https://www.youtube-nocookie.com/embed/1Z6CHioIn3s",
    title: "Burn It All Down (ft. PVRIS) | Worlds 2021 - League of Legends",
    content:
      "Down on the slaughter docks, Miss Fortune springs a trap for wanted criminals Twisted Fate and Graves… but soon finds the tables turned against her.",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/KbNL9ZyB49c",
    title:
      "Take Over (ft. Jeremy McKinnon (A Day To Remember), MAX, Henry) | Worlds 2020 - League of Legends",
    content:
      "Listen as Lars spins a tale of four Bilgewater legends - Nautilus, Fizz, Tahm Kench, and Pyke - and discovers the terrifying fact woven into his fiction.",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/i1IKnWDecwA",
    title:
      "Phoenix (ft. Cailin Russo and Chrissy Costanza) | Worlds 2019 - League of Legends",
    content:
      "Down on the slaughter docks, Miss Fortune springs a trap for wanted criminals Twisted Fate and Graves… but soon finds the tables turned against her.",
  },

  {
    src: "https://www.youtube-nocookie.com/embed/fB8TyLTD7EE",
    title:
      "RISE (ft. The Glitch Mob, Mako, and The Word Alive) | Worlds 2018 - League of Legends",
    content:
      "Listen as Lars spins a tale of four Bilgewater legends - Nautilus, Fizz, Tahm Kench, and Pyke - and discovers the terrifying fact woven into his fiction.",
  },
];

function Media() {
  return (
    <div className='media container'>
      {cardmediaInfo.map((media, index) => (
        <CardMedia
          src={media.src}
          title={media.title}
          content={media.content}
          key={index}
        />
      ))}
    </div>
  );
}

export default Media;
