import React, { useEffect } from "react";
import Login from "./components/Login";
// import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []); 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/Profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToPorps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToPorps, mapDispatchToProps)(App);
