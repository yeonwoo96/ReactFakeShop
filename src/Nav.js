import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { IoSunnyOutline, IoBagOutline } from "react-icons/io5";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "./store/atom";
const NavWrap = styled.div`
  box-shadow: rgba(33, 35, 38, 0.3) 0px 10px 10px -10px;
  height: 64px;
  width: 100%;
  box-sizing: border-box;
  background: ${(props) => props.theme.navBackground};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;
  * {
    color: ${(props) => props.theme.navFont};
    text-decoration: none;
  }
`;
const Wrap = styled.div`
  width: 1360px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    li {
      height: 2rem;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      min-height: 2rem;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
    }
    .none {
      @media screen and (max-width: 620px) {
        display: none;
      }
    }
  }
  .home {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  .icon {
    font-size: 1.6rem;
    cursor: pointer;
  }
`;
const Input = styled.input`
  background: ${(props) => props.theme.navSearchBackground}; ;
`;
const Nav = () => {
  const setterFn = useSetRecoilState(isDarkAtom);
  return (
    <NavWrap>
      <Wrap>
        <ul>
          <li>
            <Link to="">
              <h1 className="home">Reacshop</h1>
            </Link>
          </li>
          <li className="none">
            <Link to="/fashion">패션</Link>
          </li>
          <li className="none">
            <Link to="acc">액세서리</Link>
          </li>
          <li className="none">
            <Link to="digital">디지털</Link>
          </li>
        </ul>
        <ul>
          <li>
            <IoSunnyOutline
              className="icon"
              onClick={() => setterFn((prev) => !prev)}
            />
          </li>
          <li>
            <Input type="text" placeholder="검색"></Input>
          </li>
          <li>
            <IoBagOutline className="icon" />
          </li>
        </ul>
      </Wrap>
    </NavWrap>
  );
};

export default Nav;
