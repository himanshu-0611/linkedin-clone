import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import { signOutAPI } from "../actions";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

const Footer = (props) => {
  return (
    <LastLine>
      <span>
        Developed and Designed by{" "}
        <a href="https://www.instagram.com/agarkar.himanshu/">
          @himanshuagarkar
        </a>{" "}
        @piyushkawale & team
      </span>
    </LastLine>
  );
};

const LastLine = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: black;
  left: -342px;
  padding: 7px 81px;
  position: fixed;
  margin-top: 14px;
  bottom: -10px;
  width: 140vw;
  height: 30px;
  z-index: 100;

  span {
    text-align: center;
    font-weight: bold;
    margin-left: 730px;
    color: white;
    font-size: 12px;
    padding: 2px;

    a {
      text-decoration: none;
      color: white;
      @media (max-width: 768px) {
        padding-left: -170px;
      }
    }
    @media (max-width: 768px) {
      margin-left: 55px;
    }
  }

  @media (max-width: 768px) {
    /* margin-top: -30px; */
    /* margin-bottom: -30px; */
    position: relative;
    bottom: 0;

    margin-top: -90px;

    color: white;
    padding-bottom: 20px;
    height: 30px;
    margin-left: 306px;
    /* margin-left: 329px; */
    width: 89vw;
    /* margin-top: -300px; */
    z-index: 60px;
    /* margin-bottom: 35px;
      font-size: 3px;
      font-weight: lighter;
      width: 341px;
      left: 0;
      position: relative;
      margin-left: -15px;
      text-align: center; */
  }
  /* background-color: black; */

  p {
    width: 204px;
    height: 60px;
    /* background: -webkit-linear-gradient(#33ffab, #aa33ff); */
    color: white;
    background-clip: border-box;
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 38px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    margin-top: -4px;

    @media (max-width: 768px) {
      margin-left: 169px;
      align-content: center;
      margin-top: -7px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
  /* background: -webkit-linear-gradient(#e3f9fc,#ffffff); */
`;

const LogoPhoto = styled.div`
  img {
    width: 40px;
    /* margin-top: 5px; */
    margin-right: 10px;
    @media (max-width: 768px) {
      margin-left: -20px;
    }
  }
`;

// const Logo = styled.span`
//   margin-right: 8px;
//   font-size: 10px;
//   margin-top: 10px;
//   p {
//     width: 204px;
//     height: 60px;
//     background: -webkit-linear-gradient(#33ffab, #aa33ff);
//     background-clip: border-box;
//     background-clip: border-box;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     font-size: 38px;
//     font-family: "Poppins", sans-serif;
//     font-weight: 600;
//     margin-top: -20px;

//     @media (max-width: 768px) {
//       margin-left: 169px;
//       align-content: center;
//       margin-top: -7px;
//     }
//   }
// `;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 10s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }

  @media (max-width: 768px) {
    margin-left: 210px;
    /* position: fixed; */
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 20px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    color: black;

    /* img {
    margin-top: 100px;
    } */

    span {
      color: rgba(0, 0, 0, 1);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 1);
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const SignOut = styled.div`
  /* position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center; */
  position: absolute;
  top: 51px;
  border-radius: 0 0 5px 5px;
  /* border: 2px solid black; */
  background: -webkit-linear-gradient(#ffffff, #95ffdf);
  /* width: 150px; */
  /* height: 40px; */
  font-size: 16px;
  display: none;

  &:hover {
    color: #27006b;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: -90px;
  }
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  ul {
    /* margin-top: 40px; */
    list-style-type: none;

    li {
      padding: 2px 0 2px 0;
    }
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      /* flex-direction: column; */
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    span {
      img {
        opacity: 0;
      }
      margin-left: 17px;
    }
  }
`;

const HomeEdit = styled.div`
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
// localStorage.setItem("props", props);
// const userDet = localStorage.getItem("props");
// const Button = styled.div``;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

// const HomeIcon = styled.div`
//   margin-top: 8px;
// `;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

// import styled from "styled-components";
// import React from "react";
// import { connect } from "react-redux";
// import { signOutAPI } from "../actions";
// import { Navigate } from "react-router";
// import { Link } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
// // import { NavigationContainer } from "@react-navigation/native";
// // import { createStackNavigator } from "@react-navigation/stack";

// const Footer = (props) => {
//   return (
//     <LastLine>
//       <span>
//         Developed and Designed by{" "}
//         <a href="https://www.instagram.com/agarkar.himanshu/">
//           @himanshuagarkar
//         </a>{" "}
//         @piyushkawale & team
//       </span>
//     </LastLine>
//   );
// };

// const LastLine = styled.div`
//   border-bottom: 1px solid rgba(0, 0, 0, 0.08);
//   background: -webkit-linear-gradient(#e3f9fc, #ffffff);
//   left: -342px;
//   padding: 0 24px;
//   position: relative;
//   margin-top: 14px;
//   bottom: -10px;
//   width: 100vw;
//   height: 30px;
//   z-index: 100;

//   span {
//     text-align: center;
//     font-weight: bold;
//     margin-left: 446px;
//     font-size: 12px;

//     a {
//       text-decoration: none;
//       color: black;
//     }
//   }

//   @media (max-width: 768px) {
//       display: none;
//       /* margin-bottom: 35px;
//       font-size: 3px;
//       font-weight: lighter;
//       width: 341px;
//       left: 0;
//       position: relative;
//       margin-left: -15px;
//       text-align: center; */
//     }
//   /* background-color: black; */

//   p {
//     width: 204px;
//     height: 60px;
//     background: -webkit-linear-gradient(#33ffab, #aa33ff);
//     background-clip: border-box;
//     background-clip: border-box;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     font-size: 38px;
//     font-family: "Poppins", sans-serif;
//     font-weight: 600;
//     margin-top: -4px;

//     @media (max-width: 768px) {
//       margin-left: 169px;
//       align-content: center;
//       margin-top: -7px;
//     }
//   }
// `;

// const Content = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
//   min-height: 100%;
//   max-width: 1128px;
//   /* background: -webkit-linear-gradient(#e3f9fc,#ffffff); */
// `;

// const LogoPhoto = styled.div`
//   img {
//     width: 40px;
//     /* margin-top: 5px; */
//     margin-right: 10px;
//     @media (max-width: 768px) {
//       margin-left: -20px;
//     }
//   }
// `;

// // const Logo = styled.span`
// //   margin-right: 8px;
// //   font-size: 10px;
// //   margin-top: 10px;
// //   p {
// //     width: 204px;
// //     height: 60px;
// //     background: -webkit-linear-gradient(#33ffab, #aa33ff);
// //     background-clip: border-box;
// //     background-clip: border-box;
// //     -webkit-background-clip: text;
// //     -webkit-text-fill-color: transparent;
// //     font-size: 38px;
// //     font-family: "Poppins", sans-serif;
// //     font-weight: 600;
// //     margin-top: -20px;

// //     @media (max-width: 768px) {
// //       margin-left: 169px;
// //       align-content: center;
// //       margin-top: -7px;
// //     }
// //   }
// // `;

// const Search = styled.div`
//   opacity: 1;
//   flex-grow: 1;
//   position: relative;
//   & > div {
//     max-width: 280px;
//     input {
//       border: none;
//       box-shadow: none;
//       background-color: #eef3f8;
//       border-radius: 2px;
//       color: rgba(0, 0, 0, 0.9);
//       width: 218px;
//       padding: 0 8px 0 40px;
//       line-height: 1.75;
//       font-weight: 400;
//       font-size: 14px;
//       height: 34px;
//       border-color: #dce6f1;
//       vertical-align: text-top;
//     }
//   }
// `;

// const SearchIcon = styled.div`
//   width: 40px;
//   position: absolute;
//   z-index: 1;
//   top: 10px;
//   left: 2px;
//   border-radius: 0 2px 2px 0;
//   margin: 0;
//   pointer-events: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Nav = styled.nav`
//   margin-left: auto;
//   display: block;
//   @media (max-width: 768px) {
//     position: fixed;
//     left: 0;
//     bottom: 0;
//     background: white;
//     width: 100%;
//   }
// `;

// const NavListWrap = styled.ul`
//   display: flex;
//   flex-wrap: nowrap;
//   list-style-type: none;

//   .active {
//     span:after {
//       content: "";
//       transform: scaleX(1);
//       border-bottom: 2px solid var(--white, #fff);
//       bottom: 0;
//       left: 0;
//       position: absolute;
//       transition: transform 10s ease-in-out;
//       width: 100%;
//       border-color: rgba(0, 0, 0, 0.9);
//     }
//   }

//   @media (max-width: 768px) {
//     margin-left: 210px;
//     /* position: fixed; */
//   }
// `;

// const NavList = styled.li`
//   display: flex;
//   align-items: center;
//   a {
//     align-items: center;
//     background: transparent;
//     display: flex;
//     flex-direction: column;
//     font-size: 12px;
//     font-weight: 400;
//     justify-content: center;
//     line-height: 1.5;
//     min-height: 20px;
//     min-width: 80px;
//     position: relative;
//     text-decoration: none;
//     color: black;

//     /* img {
//     margin-top: 100px;
//     } */

//     span {
//       color: rgba(0, 0, 0, 1);
//       display: flex;
//       align-items: center;
//     }

//     @media (max-width: 768px) {
//       min-width: 70px;
//     }
//   }

//   &:hover,
//   &:active {
//     a {
//       span {
//         color: rgba(0, 0, 0, 1);
//         background-color: rgba(0, 0, 0, 0.08);
//       }
//     }
//   }
// `;

// const SignOut = styled.div`
//   /* position: absolute;
//   top: 45px;
//   background: white;
//   border-radius: 0 0 5px 5px;
//   width: 100px;
//   height: 40px;
//   font-size: 16px;
//   transition-duration: 167ms;
//   text-align: center; */
//   position: absolute;
//   top: 51px;
//   border-radius: 0 0 5px 5px;
//   /* border: 2px solid black; */
//   background: -webkit-linear-gradient(#ffffff, #95ffdf);
//   /* width: 150px; */
//   /* height: 40px; */
//   font-size: 16px;
//   display: none;

//   &:hover {
//     color: #27006b;
//     cursor: pointer;
//   }

//   @media (max-width: 768px) {
//     margin-top: -90px;
//   }
// `;

// const User = styled(NavList)`
//   a > svg {
//     width: 24px;
//     border-radius: 50%;
//   }

//   a > img {
//     width: 24px;
//     height: 24px;
//     border-radius: 50%;
//   }

//   span {
//     display: flex;
//     align-items: center;
//   }

//   ul {
//     /* margin-top: 40px; */
//     list-style-type: none;

//     li {
//       padding: 2px 0 2px 0;
//     }
//   }

//   &:hover {
//     ${SignOut} {
//       align-items: center;
//       display: flex;
//       /* flex-direction: column; */
//       justify-content: center;
//     }
//   }

//   @media (max-width: 768px) {
//     span {
//       img {
//         opacity: 0;
//       }
//       margin-left: 17px;
//     }
//   }
// `;

// const HomeEdit = styled.div`
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.08);
//   }
// `;
// // localStorage.setItem("props", props);
// // const userDet = localStorage.getItem("props");
// // const Button = styled.div``;

// const Work = styled(User)`
//   border-left: 1px solid rgba(0, 0, 0, 0.08);
// `;

// // const HomeIcon = styled.div`
// //   margin-top: 8px;
// // `;

// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   signOut: () => dispatch(signOutAPI()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Footer);

// // import styled from "styled-components";
// // import React from "react";
// // import { connect } from "react-redux";
// // import { signOutAPI } from "../actions";
// // import { Navigate } from "react-router";
// // import { Link } from "react-router-dom";
// // import {
// //   BrowserRouter as Router,
// //   Switch,
// //   Route,
// //   Redirect,
// // } from "react-router-dom";
// // // import { NavigationContainer } from "@react-navigation/native";
// // // import { createStackNavigator } from "@react-navigation/stack";

// // const Header = (props) => {
// //   return (
// //     <Container>
// //       <Content>
// //         <Logo>{/* <p>RecSkill.</p> */}</Logo>
// //         {/* <Search>
// //           <div>
// //             <input type="text" placeholder="Search" />
// //           </div>
// //           <SearchIcon>
// //             <img src="/images/search-icon.svg" alt="" />
// //           </SearchIcon>
// //         </Search> */}
// //         <Nav>
// //           <NavListWrap>
// //             <NavList className="active">
// //               {/* <a href="/Home"> */}
// //               <a>
// //                 {/* <HomeIcon> */}
// //                   <img src="/images/nav-home.svg" alt="" />
// //                 {/* </HomeIcon> */}
// //                 {/* <img src="/images/nav-home.svg" alt=""/> */}

// //                 <Link to="/Home">Home</Link>
// //                 {/* Home */}
// //               </a>
// //             </NavList>

// //             {/* <NavList>
// //               <a>
// //                 <img src="/images/nav-network.svg" alt="" />
// //                 <span>My Network</span>
// //               </a>
// //             </NavList>

// //             <NavList>
// //               <a>
// //                 <img src="/images/nav-jobs.svg" alt="" />
// //                 <span>Jobs</span>
// //               </a>
// //             </NavList>

// //             <NavList>
// //               <a>
// //                 <img src="/images/nav-messaging.svg" alt="" />
// //                 <span>Messaging</span>
// //               </a>
// //             </NavList>

// //             <NavList>
// //               <a>
// //                 <img src="/images/nav-notifications.svg" alt="" />
// //                 <span>Notifications</span>
// //               </a>
// //             </NavList> */}

// //             <User>
// //               {/* <HomeIcon></HomeIcon> */}
// //               <a>
// //                 {props.user && props.user.photoURL ? (
// //                   <img
// //                     src={props.user.photoURL}
// //                     alt=""
// //                     referrerPolicy="no-referrer"
// //                   />
// //                 ) : (
// //                   <img src="/images/user.svg" alt="" />
// //                 )}
// //                 <span>
// //                   Me
// //                   <img src="/images/down-icon.svg" alt="" />
// //                 </span>
// //               </a>

// //               <SignOut>
// //                 <ul>
// //                   <li>
// //                     <Link to="/Profile">Profile</Link>
// //                     {/* <a href="/Profile">Profile</a> */}
// //                   </li>
// //                   {/* <Button
// //                     title="First"
// //                     onPress={(props) => navigation.navigate("/Profile", props)}
// //                   /> */}
// //                   {/* <li>
// //                     <a>Profile</a>
// //                   </li> */}
// //                   <li>
// //                     <a onClick={() => props.signOut()}>Sign Out</a>
// //                   </li>
// //                 </ul>
// //               </SignOut>
// //             </User>

// //             <Work>
// //               {/* <a>
// //                 <img src="/images/nav-work.svg" alt="" />
// //                 <span>
// //                   Work
// //                   <img src="/images/down-icon.svg" alt="" />
// //                 </span>
// //               </a> */}
// //             </Work>
// //           </NavListWrap>
// //         </Nav>
// //       </Content>
// //     </Container>
// //   );
// // };

// // const Container = styled.div`
// //   background-color: white;
// //   border-bottom: 1px solid rgba(0, 0, 0, 0.08);
// //   left: 0;
// //   padding: 0 24px;
// //   position: fixed;
// //   top: 0;
// //   width: 100vw;
// //   height: 50px;
// //   z-index: 100;
// // `;

// // const Content = styled.div`
// //   display: flex;
// //   align-items: center;
// //   margin: 0 auto;
// //   min-height: 100%;
// //   max-width: 1128px;
// // `;

// // const Logo = styled.span`
// //   margin-right: 8px;
// //   font-size: 10px;
// //   p {
// //     width: 204px;
// //     height: 60px;
// //     background: -webkit-linear-gradient(#33ffab, #aa33ff);
// //     background-clip: border-box;
// //     background-clip: border-box;
// //     -webkit-background-clip: text;
// //     -webkit-text-fill-color: transparent;
// //     font-size: 48px;
// //     font-family: "Poppins", sans-serif;
// //     font-weight: 600;
// //   }
// // `;

// // const Search = styled.div`
// //   opacity: 1;
// //   flex-grow: 1;
// //   position: relative;
// //   & > div {
// //     max-width: 280px;
// //     input {
// //       border: none;
// //       box-shadow: none;
// //       background-color: #eef3f8;
// //       border-radius: 2px;
// //       color: rgba(0, 0, 0, 0.9);
// //       width: 218px;
// //       padding: 0 8px 0 40px;
// //       line-height: 1.75;
// //       font-weight: 400;
// //       font-size: 14px;
// //       height: 34px;
// //       border-color: #dce6f1;
// //       vertical-align: text-top;
// //     }
// //   }
// // `;

// // const SearchIcon = styled.div`
// //   width: 40px;
// //   position: absolute;
// //   z-index: 1;
// //   top: 10px;
// //   left: 2px;
// //   border-radius: 0 2px 2px 0;
// //   margin: 0;
// //   pointer-events: none;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// // const Nav = styled.nav`
// //   margin-left: auto;
// //   display: block;
// //   @media (max-width: 768px) {
// //     position: fixed;
// //     left: 0;
// //     bottom: 0;
// //     background: white;
// //     width: 100%;
// //   }
// // `;

// // const NavListWrap = styled.ul`
// //   display: flex;
// //   flex-wrap: nowrap;
// //   list-style-type: none;

// //   .active {
// //     span:after {
// //       content: "";
// //       transform: scaleX(1);
// //       border-bottom: 2px solid var(--white, #fff);
// //       bottom: 0;
// //       left: 0;
// //       position: absolute;
// //       transition: transform 0.2s ease-in-out;
// //       width: 100%;
// //       border-color: rgba(0, 0, 0, 0.9);
// //     }
// //   }
// // `;

// // const NavList = styled.li`
// //   display: flex;
// //   align-items: center;
// //   a {
// //     align-items: center;
// //     background: transparent;
// //     display: flex;
// //     flex-direction: column;
// //     font-size: 12px;
// //     font-weight: 400;
// //     justify-content: center;
// //     line-height: 1.5;
// //     min-height: 52px;
// //     min-width: 80px;
// //     position: relative;
// //     text-decoration: none;

// //     /* img {
// //     margin-top: 100px;
// //     } */

// //     span {
// //       color: rgba(0, 0, 0, 0.6);
// //       display: flex;
// //       align-items: center;
// //     }

// //     @media (max-width: 768px) {
// //       min-width: 70px;
// //     }
// //   }

// //   &:hover,
// //   &:active {
// //     a {
// //       span {
// //         color: rgba(0, 0, 0, 0.9);
// //       }
// //     }
// //   }
// // `;

// // const SignOut = styled.div`
// //   /* position: absolute;
// //   top: 45px;
// //   background: white;
// //   border-radius: 0 0 5px 5px;
// //   width: 100px;
// //   height: 40px;
// //   font-size: 16px;
// //   transition-duration: 167ms;
// //   text-align: center; */
// //   position: absolute;
// //   top: 45px;
// //   border-radius: 0 0 5px 5px;
// //   border: 2px solid black;
// //   background: white;
// //   /* width: 150px; */
// //   /* height: 40px; */
// //   font-size: 16px;
// //   display: none;
// // `;

// // const User = styled(NavList)`
// //   a > svg {
// //     width: 24px;
// //     border-radius: 50%;
// //   }

// //   a > img {
// //     width: 24px;
// //     height: 24px;
// //     border-radius: 50%;
// //   }

// //   span {
// //     display: flex;
// //     align-items: center;
// //   }

// //   ul {
// //     /* margin-top: 40px; */
// //     list-style-type: none;

// //     li {
// //       padding: 2px 0 2px 0;
// //     }
// //   }

// //   &:hover {
// //     ${SignOut} {
// //       align-items: center;
// //       display: flex;
// //       /* flex-direction: column; */
// //       justify-content: center;
// //     }
// //   }
// // `;
// // // localStorage.setItem("props", props);
// // // const userDet = localStorage.getItem("props");
// // // const Button = styled.div``;

// // const Work = styled(User)`
// //   border-left: 1px solid rgba(0, 0, 0, 0.08);
// // `;

// // // const HomeIcon = styled.div`
// // //   margin-top: 8px;
// // // `;

// // const mapStateToProps = (state) => {
// //   return {
// //     user: state.userState.user,
// //   };
// // };

// // const mapDispatchToProps = (dispatch) => ({
// //   signOut: () => dispatch(signOutAPI()),
// // });

// // export default connect(mapStateToProps, mapDispatchToProps)(Header);
