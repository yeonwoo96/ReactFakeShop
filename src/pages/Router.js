import { createMemoryRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import Fashion from "./Fashion";
import Digital from "./Digital";
import Acc from "./Acc";
import Home from "./Home";
import Detail from "./Detail";

const Router = createMemoryRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "fashion",
        element: <Fashion />,
      },
      {
        path: "acc",
        element: <Acc />,
      },
      {
        path: "digital",
        element: <Digital />,
      },
      {
        path: ":id",
        element: <Detail />,
      },
    ],
  },
]);

// function App() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const resizing = () => setWidth(window.innerWidth);
//   useEffect(() => window.addEventListener("resize", resizing), []);
//   // 하위 컴포넌트에게 props로 전해주지는 않으나 resize될때마다 화면을 업데이트 하기 위해서 적음
//   return (
//     <BrowserRouter>
//       <Nav />
//       <Space />
//       <Routes>
//         <Route path={"/"} element={<Home />}></Route>
//         <Route path={"/fashion"} element={<Fashion />}></Route>
//         <Route path={"/acc"} element={<Acc />}></Route>
//         <Route path={"/digital"} element={<Digital />}></Route>
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

export default Router;
