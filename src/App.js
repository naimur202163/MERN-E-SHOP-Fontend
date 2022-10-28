import React from "react";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";


export default function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto" ]
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Footer/>
    </Router>
  );
}
