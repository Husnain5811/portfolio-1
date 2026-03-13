import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="inner" style={{ "--quantity": 6 }}>

          <a href="#" className="card" style={{ "--index": 0, "--color-card": "142,249,252" }}>
            <img className="rounded-t-lg" src="https://img.freepik.com/free-vector/engineering-technical-drawing-isometric-landing-page_107791-5056.jpg?uid=R117162851&ga=GA1.1.1635411387.1735129246&semt=ais_hybrid&w=740" alt="" />

            <div>
                <h1 className="text-white font-bold">MERN stack developer </h1>
                <p className="text-gray-600 text-xs">MERN Stack Developer: Skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Experienced in developing responsive user interfaces and scalable backend APIs.</p>
            </div>
          </a>

          <a href="#" className="card" style={{ "--index": 1, "--color-card": "142,252,204" }}>
            <img className="rounded-t-lg" src="https://img.freepik.com/free-vector/engineering-technical-drawing-isometric-landing-page_107791-5056.jpg?uid=R117162851&ga=GA1.1.1635411387.1735129246&semt=ais_hybrid&w=740" alt="" />
            <div>
                <h1 className="text-white font-bold">MERN stack developer </h1>
                <p className="text-gray-600 text-xs">MERN Stack Developer: Skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Experienced in developing responsive user interfaces and scalable backend APIs.</p>
            </div>
          </a>

          <a href="#" className="card" style={{ "--index": 2, "--color-card": "215,252,142" }}>
            <img className="rounded-t-lg" src="https://img.freepik.com/free-vector/engineering-technical-drawing-isometric-landing-page_107791-5056.jpg?uid=R117162851&ga=GA1.1.1635411387.1735129246&semt=ais_hybrid&w=740" alt="" />
            <div>
                <h1 className="text-white font-bold">MERN stack developer </h1>
                <p className="text-gray-600 text-xs">MERN Stack Developer: Skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Experienced in developing responsive user interfaces and scalable backend APIs.</p>
            </div>
          </a>

          <a href="#" className="card" style={{ "--index": 3, "--color-card": "252,208,142" }}>
            <img className="rounded-t-lg" src="https://img.freepik.com/free-vector/engineering-technical-drawing-isometric-landing-page_107791-5056.jpg?uid=R117162851&ga=GA1.1.1635411387.1735129246&semt=ais_hybrid&w=740" alt="" />
            <div>
                <h1 className="text-white font-bold">MERN stack developer </h1>
                <p className="text-gray-600 text-xs">MERN Stack Developer: Skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Experienced in developing responsive user interfaces and scalable backend APIs.</p>
            </div>
          </a>

          <a href="#" className="card" style={{ "--index": 4, "--color-card": "204,142,252" }}>
            <img className="rounded-t-lg" src="https://img.freepik.com/free-vector/engineering-technical-drawing-isometric-landing-page_107791-5056.jpg?uid=R117162851&ga=GA1.1.1635411387.1735129246&semt=ais_hybrid&w=740" alt="" />
            <div>
                <h1 className="text-white font-bold">MERN stack developer </h1>
                <p className="text-gray-600 text-xs">MERN Stack Developer: Skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Experienced in developing responsive user interfaces and scalable backend APIs.</p>
            </div>
          </a>

          <a href="#" className="card" style={{ "--index": 5, "--color-card": "252,142,142" }}>
            <img className="rounded-t-lg" src="https://img.freepik.com/free-vector/engineering-technical-drawing-isometric-landing-page_107791-5056.jpg?uid=R117162851&ga=GA1.1.1635411387.1735129246&semt=ais_hybrid&w=740" alt="" />
            <div>
                <h1 className="text-white font-bold">MERN stack developer </h1>
                <p className="text-gray-600 text-xs">MERN Stack Developer: Skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Experienced in developing responsive user interfaces and scalable backend APIs.</p>
            </div>
          </a>

        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

.wrapper{
  width:100%;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
}

.inner{
  --w:240px;
  --h:300px;
  --translateZ:320px;
  --rotateX:-10deg;
  --perspective:1200px;

  position:relative;
  width:var(--w);
  height:var(--h);

  transform-style:preserve-3d;
  animation:rotating 18s linear infinite;
}

/* hover par rotation stop */
.wrapper:hover .inner .card{
  animation-play-state: paused;
}

@keyframes rotating{
  from{
    transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0deg);
  }
  to{
    transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(360deg);
  }
}

.card{
  position:absolute;
  width:var(--w);
  height:var(--h);
  border-radius:16px;
  border:3px solid rgba(var(--color-card));
  overflow:hidden;
  text-decoration:none;

  transform:
  rotateY(calc((360deg / var(--quantity)) * var(--index)))
  translateZ(var(--translateZ));
}

.img{
  width:100%;
  height:100%;
  background:
  radial-gradient(
    circle,
    rgba(var(--color-card),0.3) 0%,
    rgba(var(--color-card),0.7) 60%,
    rgba(var(--color-card),1) 100%
  );
}

`;

export default Card;