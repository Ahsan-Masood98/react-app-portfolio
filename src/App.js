import React from "react";
//GlobalStyled Component
import GlobalStyle from "./components/GlobalStyled";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
