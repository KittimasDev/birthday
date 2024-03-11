"use client"
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import styled, { css, keyframes } from "styled-components";
import Lottie from 'react-lottie';
import * as animationData from '../public/anime/Animation - 1709889088251.json'
import * as animationData_1 from '../public/anime/animetion_1.json'
import * as animationData_2 from '../public/anime/animetion_2.json'
import * as animationData_3 from '../public/anime/animetion_3.json'
import * as LR_S from '../public/anime/animetion_4.json'
import * as animationData_4 from '../public/anime/animation_5.json'
import * as animationData_5 from '../public/anime/animation_5.json'
import * as animationData_6 from '../public/anime/animation_6.json'
import * as animationData_7 from '../public/anime/animation_7.json'




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
    animationData: animationData_4,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const Fireworks = {
    loop: true,
    autoplay: true,
    animationData: animationData_6,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const Ball = {
    loop: true,
    autoplay: true,
    animationData: animationData_3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const Ribbon = {
    loop: true,
    autoplay: true,
    animationData: animationData_7,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [HappyTime, setHappyTime] = useState(false)
  const [BallShow, setBall] = useState(false)
  const [BallShow2, setBall2] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHappyTime(true)
    }, 2200);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setBall(true)
    }, 1600);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setBall2(true)
    }, 8000);
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
                   {
            HappyTime &&
            <Lottie
              options={Ribbon}
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
                <div className="animate__animated animate__rubberBand">Test</div>
              </Name>
            </div>
          </div>
        </div>
        <div className="text-container">
          <p id="head">Happy Birthday</p>
          <p>I hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy!</p>
          <p>Hope your day goes great!</p>
        </div>
        <BallLayout>
          {
            BallShow &&
            <Lottie
              options={Ball}
              height={"100%"}
              width={"100%"}
              isStopped={false}
              isPaused={false}
            />
          }
        </BallLayout>

      </div>
      <Fireworks_Right>
        <div data-fireworks='right'>
          {
            BallShow2 &&
            <Lottie
              options={Fireworks}
              height={"100%"}
              width={"100%"}
              isStopped={false}
              isPaused={false}
            />
          }
        </div>
      </Fireworks_Right>
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
  pointer-events: none;
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
    /* width: 100%; */
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    [data-fireworks='right']
    {
      width: 100%;
      height: 100%;
    }
    @media (min-width: 992) {
      max-width: 320px;
    }
    
`

const BallLayout = styled.div`
    position: absolute;
    bottom: 0;
    max-width: 320px;
    width: 100%;
    pointer-events: none;
    /* height: 100%; */
`
