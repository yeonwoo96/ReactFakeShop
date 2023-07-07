import React, { useEffect } from "react";
import { useState } from "react";
import bannerImg2 from "../asset/img/img_shop_digital.jpeg";
import bannerImg1 from "../asset/img/img_shop_fashion.jpeg";
import bannerImg3 from "../asset/img/img_shop_grocery.jpeg";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import styled from "styled-components";

/* 1025 */

const ArrowBtn = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 28px;
  box-sizing: border-box;
  padding: 5px;
  position: absolute;
  height: 100%;
  background: none;
  border: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  &.LeftBtn {
    left: 0;
  }
  &.RightBtn {
    right: 0;
  }
`;

const BannerCase = styled.div`
  @media screen and (min-width: 1024px) {
    height: 700px;
    background-color: rgb(28, 29, 28);
    overflow: hidden;
    position: relative;
  }
  @media screen and (max-width: 1023px) {
    height: 200px;
    background-color: aquamarine;
    overflow: hidden;
    position: relative;
  }
`;

const ImageWrap = styled.ul`
  width: 300vw;
  height: 100%;
  background-color: black;
  position: absolute;
  transition: translate 0.25s;
  display: flex;
`;
const BannerImg = styled.li`
  width: 100%;
  /* 바뀐부분 */
  overflow: hidden;
  display: flex;
  align-items: center;
`;
const TextBox = styled.div`
  width: 1360px;
  color: white;
  box-sizing: border-box;
  padding: 0 40px;
  margin: auto;
  h2 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
  }
  p {
    margin: 0.5rem 0;
  }
  button {
    color: ${(props) => props.theme.BannerBtnColor};
    height: 3rem;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 3rem;
    font-size: 0.875rem;
    border: none;
    margin-top: 0.75rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme.BannerShorcutBackground};
  }
`;

const CircleWrap = styled.ul`
  position: absolute;
  bottom: 0;
  margin: 10px 0;
  padding: 0;
  text-align: center;
  width: 100%;
  z-index: 1;
  li {
    transition: opacity 0.25s ease-in;
    opacity: 0.3;
    filter: alpha(opacity=30);
    box-shadow: 1px 1px 2px #000000e6;
    background: #fff;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    cursor: pointer;
    display: inline-block;
    margin: 0 8px;
    &:hover {
      opacity: 1;
    }
  }
`;

const Banner = () => {
  const [page, setPage] = useState(0);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    page >= 2 ? setPage(0) : setPage(page + 1);
  }, 7000);

  function LeftClickAction() {
    if (page === 0) {
      setPage(2);
    } else {
      setPage((page) => page - 1);
      console.log(page);
    }
  }
  function RightClickAction() {
    if (page === 2) {
      setPage(0);
    } else {
      setPage((page) => page + 1);
      console.log(page);
    }
  }
  function CircleClick0() {
    setPage(0);
  }
  function CircleClick1() {
    setPage(1);
  }
  function CircleClick2() {
    setPage(2);
  }
  const BannerImages = [
    {
      src: `${bannerImg1}`,
      key: "fashion",
      title: "물빠진 청바지!",
      ment: "이제 막 도착한 패션 청바지를 구경해 보세요.",
    },
    {
      src: `${bannerImg2}`,
      key: "digital",
      title: "신속한 업무처리!",
      ment: "다양한 디지털 상품을 둘러보세요",
    },
    {
      src: `${bannerImg3}`,
      key: "",
      title: "신선한 식품!",
      ment: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
    },
  ];

  return (
    <BannerCase>
      <ImageWrap style={{ translate: -(window.innerWidth * page) }}>
        {BannerImages.map((image) => (
          <BannerImg
            style={{
              background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(${image.src})`,
              backgroundSize: "cover",
            }}
            key={image.key}
          >
            <TextBox>
              <h2>{image.title}</h2>
              <p>{image.ment}</p>
              <Link style={{ textDecoration: "none" }} to={`/${image.key}`}>
                <button>바로가기</button>
              </Link>
            </TextBox>
          </BannerImg>
        ))}
      </ImageWrap>
      <ArrowBtn className={"LeftBtn"} onClick={LeftClickAction}>
        <AiFillCaretLeft
          style={{
            fontSize: "450",
            color: "#fff",
          }}
        ></AiFillCaretLeft>
      </ArrowBtn>
      <ArrowBtn className={"RightBtn"} onClick={RightClickAction}>
        <AiFillCaretRight
          style={{
            fontSize: "1.25rem",
            color: "#fff",
          }}
        ></AiFillCaretRight>
      </ArrowBtn>
      <CircleWrap>
        <li
          onClick={CircleClick0}
          style={{ opacity: page === 0 ? 1 : 0.3 }}
        ></li>
        <li
          onClick={CircleClick1}
          style={{ opacity: page === 1 ? 1 : 0.3 }}
        ></li>
        <li
          onClick={CircleClick2}
          style={{ opacity: page === 2 ? 1 : 0.3 }}
        ></li>
      </CircleWrap>
    </BannerCase>
  );
};

export default Banner;
