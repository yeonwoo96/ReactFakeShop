import React from "react";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background: ${(props) => props.theme.bgColor};
  h2 {
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 2.25rem;
    color: ${(props) => props.theme.fontColor};
  }
  .ItemList {
    display: grid;
    box-sizing: border-box;
    width: 100%;
    padding: 48px 8px 32px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
    @media (min-width: 1360px) {
      width: 1360px;
    }
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      color: #000;
    }
  }
  .item {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #fff;
    border-radius: 4%;
    overflow: hidden;
    display: flex;
    flex-flow: column;
  }
  .item .itemImage {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 320px;
  }
  .item .itemImage .image {
    max-width: 50%;
    max-height: 50%;
  }

  .item .itemText {
    height: 116px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 16px;
    color: #a6adba;
    background-color: ${(props) => props.theme.ItemTextboxBackground};
  }
`;

// @media (min-width: 1360px) {
//   .wrapper > .ItemList {
//     width: 1360px;
//   }
// }
// @media (max-width: 1360px) {
//   .itemWrap {
//     grid-template-columns: repeat(4, minmax(0, 1fr));
//     color: #000;
//   }
// }

const ItemList = () => {
  const { data } = useOutletContext();
  return (
    <Wrapper>
      {/* 패션 */}
      <h2>패션</h2>
      <div className="ItemList">
        {data
          .filter((item) => item.category === "men's clothing")
          .splice(0, 4)
          .map((item) => (
            <Link to={`/${item.id}`}>
              <div className={"item"}>
                <div className={"itemImage"}>
                  <img className={"image"} src={item.image} alt={item.title} />
                </div>
                <div className={"itemText"}>
                  <h3>
                    {item.title.length < 30
                      ? item.title
                      : `${item.title.slice(1, 30)}...`}
                  </h3>
                  <h4>{item.price}</h4>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {/* 액세서리 */}
      <h2>액세서리</h2>
      <div className="ItemList">
        {data
          .filter((item) => item.category === "jewelery")
          .splice(0, 4)
          .map((item) => (
            <Link to={`/${item.id}`}>
              <div className="item">
                <div className="itemImage">
                  <img className="image" src={item.image} alt={item.title} />
                </div>
                <div className="itemText">
                  <h3>
                    {item.title.length < 30
                      ? item.title
                      : `${item.title.slice(1, 30)}...`}
                  </h3>
                  <h4>{item.price}</h4>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {/* 디지털 */}
      <h2>디지털</h2>
      <div className="ItemList">
        {data
          .filter((item) => item.category === "electronics")
          .splice(0, 4)
          .map((item) => (
            <Link to={`/${item.id}`}>
              <div className={"item"}>
                <div className={"itemImage"}>
                  <img className={"image"} src={item.image} alt={item.title} />
                </div>
                <div className={"itemText"}>
                  <h3>
                    {item.title.length < 30
                      ? item.title
                      : `${item.title.slice(1, 30)}...`}
                  </h3>
                  <h4>{item.price}</h4>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </Wrapper>
  );
};

export default ItemList;
