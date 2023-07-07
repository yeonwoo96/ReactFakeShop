import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
const Acc = () => {
  const CurrentPage = styled.div`
    width: 100vw;
    box-sizing: border-box;
    color: ${(props) => props.theme.fontColor};
    padding-left: 0.75rem;
    margin-top: 2rem;
    @media screen and (min-width: 1360px) {
      width: 1360px;
    }
  `;
  const Category = styled.div`
    font-size: 3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.fontColor};
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    background: ${(props) => props.theme.bgColor};
  `;
  const { data } = useOutletContext();
  console.log(data);
  const UlItembox = styled.ul`
    box-sizing: border-box;
    margin-top: 16px;
    margin-bottom: 32px;
    display: grid;
    gap: 1.5rem;
    padding: 0 1rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    @media screen and (min-width: 1360px) {
      width: 1344px;
    }
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  `;
  const LiItem = styled.li`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height: 438px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 1rem;
    background-color: #fff;
    &:hover img {
      transform: scale(1.2);
    }
    cursor: pointer;
  `;
  const ImgBox = styled.div`
    display: flex;
    padding: 50px 0;
    height: 10rem;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  `;
  const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: var(--padding-card, 2rem);
    gap: 0.5rem;
    background-color: ${(props) => props.theme.ItemTextboxBackground};
    height: 100%;
    color: #a6adba;
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  `;
  return (
    <Wrapper>
      <CurrentPage>
        <p>{`홈 > 악세서리`}</p>
      </CurrentPage>
      <Category>악세서리</Category>
      <UlItembox>
        {data
          .filter((item) => item.category === "jewelery")
          .map((item) => (
            <Link to={`/${item.id}`}>
              <LiItem>
                <ImgBox>
                  <img src={item.image} alt={item.title} />
                </ImgBox>
                <TextBox>
                  <p>
                    {item.title.length > 50
                      ? item.title.slice(0, 50)
                      : item.title}
                  </p>
                  <p>{item.price}</p>
                </TextBox>
              </LiItem>
            </Link>
          ))}
      </UlItembox>
    </Wrapper>
  );
};

export default Acc;
