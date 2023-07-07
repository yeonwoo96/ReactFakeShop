import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./reset.css";
import Space from "./pages/space";
import Footer from "./Footer";
import styled, { ThemeProvider } from "styled-components";
import { BlackTheme, WhiteTheme } from "./store/theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./store/atom";
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;
function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data));
  }, []);

  return (
    <ThemeProvider theme={isDark ? BlackTheme : WhiteTheme}>
      <Wrapper>
        <Nav />
        <Space />
        <Outlet context={{ data }} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
