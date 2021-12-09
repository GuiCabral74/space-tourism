import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GloblaStyle } from "./components/style/styles";
// import Destination from "./components/Destination";
// import Crew from "./components/Crew";
// import Technology from "./components/Technology";
import { router } from "./components/routes"
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
    <GloblaStyle />
    <Header />
    <Routes>
      <Route path="/"element={ <Home />}/>
      {router.map((route, index) => (
        <Route path={route.path} element={route.element} key={index} />
      ))}

      /** */
      {/* <Route path="destination"element={ <Destination />} key="destination"/>
      <Route path="crew" element={<Crew />} key="crew"/>
      <Route path="technology" element={<Technology />} key="technology"/> */}
      /**comentario */
    </Routes>
    </BrowserRouter>
  );
}

export default App;
