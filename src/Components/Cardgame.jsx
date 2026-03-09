import React, { useState, useEffect } from "react";

const cardsData = [
  { name: "php", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png", id: 1 },
  { name: "css3", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png", id: 2 },
  { name: "html5", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png", id: 3 },
  { name: "jquery", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png", id: 4 },
  { name: "javascript", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png", id: 5 },
  { name: "node", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png", id: 6 },
  { name: "photoshop", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png", id: 7 },
  { name: "python", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png", id: 8 },
  { name: "rails", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png", id: 9 },
  { name: "sass", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png", id: 10 },
  { name: "sublime", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png", id: 11 },
  { name: "wordpress", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png", id: 12 },
];

// Fisher-Yates shuffle
function shuffle(array) {
  let arr = [...array];
  let counter = arr.length;
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    [arr[counter], arr[index]] = [arr[index], arr[counter]];
  }
  return arr;
}

export default function MemoryGame() {
  // Duplicate cards and shuffle
  const [cards, setCards] = useState(() => shuffle([...cardsData, ...cardsData]));
  const [picked, setPicked] = useState([]); // holds indexes of currently picked cards
  const [matched, setMatched] = useState([]); // holds ids of matched cards
  const [paused, setPaused] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // When user picks two cards
  useEffect(() => {
    if (picked.length === 2) {
      const firstCard = cards[picked[0]];
      const secondCard = cards[picked[1]];

      if (firstCard.id === secondCard.id) {
        // match!
        setMatched((prev) => [...prev, firstCard.id]);
        setPicked([]);
      } else {
        // no match, flip back after short pause
        setPaused(true);
        setTimeout(() => {
          setPicked([]);
          setPaused(false);
        }, 600);
      }
    }
  }, [picked, cards]);

  // Check win condition
  useEffect(() => {
    if (matched.length === cardsData.length) {
      setPaused(true);
      setTimeout(() => {
        setShowModal(true);
      }, 1000);
    }
  }, [matched]);

  const handleCardClick = (index) => {
    if (paused) return;
    if (picked.includes(index)) return;
    if (matched.includes(cards[index].id)) return;
    if (picked.length === 2) return;

    setPicked((prev) => [...prev, index]);
  };

  const restartGame = () => {
    setMatched([]);
    setPicked([]);
    setPaused(false);
    setShowModal(false);
    setCards(shuffle([...cardsData, ...cardsData]));
  };

  return (
    <>
      <div className="wrap z-50">
        <div className="game">
          {cards.map((card, idx) => {
            const isPicked = picked.includes(idx);
            const isMatched = matched.includes(card.id);
            const cardClass = `inside${isPicked || isMatched ? " picked" : ""}${isMatched ? " matched" : ""}`;

            return (
              <div
                key={idx}
                className="card"
                onClick={() => handleCardClick(idx)}
                data-id={card.id}
              >
                <div className={cardClass}>
                  <div className="front">
                    <img src={card.img} alt={card.name} />
                  </div>
                  <div className="back">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png"
                      alt="Codepen"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="winner">You Rock!</h2>
              <button className="restart" onClick={restartGame}>
                Play Again?
              </button>
              <p className="message">
                Developed on{" "}
                <a href="https://codepen.io" target="_blank" rel="noreferrer">
                  CodePen
                </a>{" "}
                by{" "}
                <a href="https://codepen.io/natewiley" target="_blank" rel="noreferrer">
                  Nate Wiley
                </a>
              </p>
              <p className="share-text">Share it?</p>
              <ul className="social">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="twitter"
                    href="https://twitter.com/share?url=https://codepen.io/natewiley/pen/HBrbL"
                  >
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="facebook"
                    href="https://www.facebook.com/sharer.php?u=https://codepen.io/natewiley/pen/HBrbL"
                  >
                    <span className="fa fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="google"
                    href="https://plus.google.com/share?url=https://codepen.io/natewiley/pen/HBrbL"
                  >
                    <span className="fa fa-google"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

        <footer>
          {/* <p className="disclaimer">
            All logos are property of their respective owners, No Copyright infringement intended.
          </p> */}
        </footer>
      </div>

      {/* Add your CSS below or import from separate CSS file */}
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        html,
        body,
        .wrap {
          height: 100%;
          min-height: 500px;
        }
        body {
          background: black;
          font-family: Arial, sans-serif;
          margin: 0;
          padding-bottom: 20px;
        }
        .wrap {
          position: relative;
          padding-bottom: 20px;
        }
        .game {
          display: flex;
          flex-wrap: wrap;
          perspective: 500px;
          min-height: 100%;
        }
        .card {
          width: 16.66666%;
          height: 25vh;
          padding: 5px;
          cursor: pointer;
          position: relative;
          perspective: 500px;
        }
        @media (max-width: 800px) {
          .card {
            width: 25%;
            height: 16.666vh;
          }
        }
        .inside {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.4s ease-in-out;
          transform-style: preserve-3d;
          background: white;
          border: 1px solid black;
          backface-visibility: hidden;
        }
        .inside.picked,
        .inside.matched {
          transform: rotateY(180deg);
        }
        .inside.matched {
          animation: matchAnim 1s ease-in-out 0.4s forwards;
        }
        @keyframes matchAnim {
          0% {
            background: #bcffcc;
          }
          100% {
            background: white;
          }
        }
        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          padding: 20px;
          top: 0;
          left: 0;
          backface-visibility: hidden;
        }
        .front {
          transform: rotateY(-180deg);
        }
        .front img,
        .back img {
          max-width: 100%;
          max-height: 100%;
          display: block;
          margin: 0 auto;
        }
        .back {
          background: white;
          transform: rotateX(0);
        }
        @media (max-width: 800px) {
          .front,
          .back {
            padding: 5px 10px;
          }
        }
        .modal-overlay {
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.8);
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1000;
        }
        .modal {
          background: white;
          max-width: 90%;
          max-height: 90%;
          width: 500px;
          min-height: 380px;
          padding: 30px 10px;
          position: relative;
          text-align: center;
        }
        .winner {
          font-size: 80px;
          font-family: "Anton", sans-serif;
          color: #4d4d4d;
          text-shadow: 0px 3px 0 black;
          margin-bottom: 30px;
        }
        @media (max-width: 480px) {
          .winner {
            font-size: 60px;
          }
        }
        .restart {
          font-family: "Anton", sans-serif;
          font-size: 30px;
          padding: 20px 30px;
          background: linear-gradient(#4d4d4d, #222);
          border: 1px solid #222;
          border-radius: 5px;
          color: white;
          cursor: pointer;
          margin-bottom: 20px;
          user-select: none;
          outline: none;
        }
        .restart:hover {
          background: linear-gradient(#222, black);
        }
        .message a {
          text-decoration: none;
          color: #28afe6;
          font-weight: bold;
        }
        .message a:hover {
          color: #3bb3f7;
          border-bottom: 1px dotted #3bb3f7;
        }
        .share-text {
          margin: 10px 0;
          font-weight: bold;
          color: #444;
        }
        .social {
          list-style: none;
          padding: 0;
          margin: 20px auto;
          display: flex;
          justify-content: center;
          gap: 10px;
        }
        .social li {
          width: 50px;
          height: 50px;
        }
        .social a {
          display: block;
          height: 100%;
          width: 100%;
          line-height: 50px;
          font-size: 20px;
          color: white;
          text-align: center;
          border-radius: 5px;
          text-decoration: none;
          user-select: none;
        }
        .social a.facebook {
          background: #3b5998;
        }
        .social a.facebook:hover {
          background: #4a69ad;
        }
        .social a.google {
          background: #d34836;
        }
        .social a.google:hover {
          background: #e25b4c;
        }
        .social a.twitter {
          background: #4099ff;
        }
        .social a.twitter:hover {
          background: #55b0ff;
        }
        footer {
          height: 20px;
          position: absolute;
          bottom: 0;
          width: 100%;
          z-index: 0;
          text-align: center;
        }
        .disclaimer {
          font-size: 12px;
          color: #727272;
          line-height: 20px;
          user-select: none;
        }
        @media (max-width: 767px) {
          .disclaimer {
            font-size: 8px;
          }
        }
      `}</style>
    </>
  );
}
