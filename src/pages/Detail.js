import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-flow: column;
  align-items: center;
  background: ${(props) => props.theme.bgColor};
`;
const CurrentPage = styled.div`
  width: 100vw;
  box-sizing: border-box;
  color: #a6adba;
  padding-left: 0.75rem;
  margin-top: 2rem;
  @media screen and (min-width: 1360px) {
    width: 1360px;
  }
`;
const ItemBox = styled.div`
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  @media screen and (min-width: 1360px) {
    width: 1360px;
  }
  @media screen and (max-width: 768px) {
    flex-flow: column;
  }
`;
const ImgBox = styled.div`
  max-height: 320px;
  min-height: 320px;
  @media screen and (min-width: 1025px) {
    width: 100%;
  }
  box-sizing: border-box;
  border-radius: 15px;
  padding: 16px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 320px;
    max-height: 320px;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--padding-card, 2rem);
  gap: 0.5rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  @media screen and (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  color: #a6adba;
  h2 {
    margin-bottom: 1rem;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
`;
const Detail = () => {
  const { id } = useParams();
  const { data } = useOutletContext();
  const item = data[id - 1];
  return (
    <Wrapper>
      <CurrentPage>
        <p>{`패션 > ${item.title}`}</p>
      </CurrentPage>
      <ItemBox>
        <ImgBox>
          <img src={item.image} alt={item.title} />
        </ImgBox>
        <TextBox>
          <h2>{item.title.toUpperCase()}</h2>
          <p>{item.description}</p>
          <p>{`${item.rating.rate} / ${item.rating.count} 참여`}</p>
          <p>{`$${item.price}`}</p>
        </TextBox>
      </ItemBox>
    </Wrapper>
  );
};

export default Detail;
