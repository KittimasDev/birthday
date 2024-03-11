"use client"
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import styled, { css, keyframes } from "styled-components";
import Lottie from 'react-lottie';
import * as animationData from '../public/anime/Animation - 1709889088251.json'
import * as animationData_1 from '../public/anime/animetion_1.json'
import * as animationData_2 from '../public/anime/animetion_2.json'
import * as Ball from '../public/anime/animetion_3.json'
import * as LR_S from '../public/anime/animetion_4.json'
import * as animationData_5 from '../public/anime/animation_5.json'


export default function Home() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const FireworksLeft = {
    loop: false,
    autoplay: true,
    animationData: animationData_1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const FireworksRight = {
    loop: true,
    autoplay: true,
    animationData: animationData_5,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const [HappyTime, setHappyTime] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHappyTime(true)
    }, 2200);
  }, [])

  return (
    <body>
      <div className="card animate__animated animate__tada">
        <Flower >
          {
            HappyTime &&
            <Lottie
              options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isStopped={false}
              isPaused={false}
            />
          }
        </Flower>
        <div className="back"></div>
        <div className="front">
          <div className="imgset">
            <div className="bg-image">
              <div className="image-eve">
                <div className="view">
                </div>
              </div>
              <View>
                <div className="hbd animate__animated animate__rubberBand">Happy Birthday</div>
              </View>
              <Name>
                <div className="animate__animated animate__rubberBand">Best</div>
              </Name>
            </div>
          </div>
        </div>
        <div className="text-container">
          <p id="head">Happy Birthday அத்தான்!</p>
          <p>I hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy!</p>
          <p>Hope your day goes great!</p>
        </div>
      </div>
      {/* <Fireworks_left>
        <div data-fireworks='left'>
          {
            HappyTime &&
            <Lottie
              options={FireworksLeft}
              height={"100%"}
              width={"100%"}
              isStopped={false}
              isPaused={false}
            />
          }
        </div>
      </Fireworks_left> */}
      <Fireworks_Right>
        <div data-fireworks='right'>
          {
            HappyTime &&
            <Lottie
              options={FireworksRight}
              height={"100%"}
              width={"100%"}
              isStopped={false}
              isPaused={false}
            />
          }
        </div>
      </Fireworks_Right>
    </body>
  );
}

const animationMenu = keyframes`
    0%, 
   75% { display:none; }
  100% { display:block; }
`;

const View = styled.div`
    animation: ${animationMenu} 1.2s;
    margin-top: 20px;
`

const Name = styled.div`
    animation: ${animationMenu} 2.2s;
    text-align: center;
    margin-top: 0px;
    font-size: 26px;
    @media (min-width: 992) {
      font-size: 32px;
    }
`

const Flower = styled.div`
  animation: ${animationMenu} 2.2s;
  div
  {
    position: absolute;
    z-index: 99999;
    top: -50%;
  }
`

const Fireworks_left = styled.div`
    position: absolute;
    bottom: 0;
    left: -20px;
    max-width: 200px;
    rotate: -8deg;
`

const Fireworks_Right = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
