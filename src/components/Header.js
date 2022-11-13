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

const Header = (props) => {
  return (
    <Container>
      <Content>
        <LogoPhoto>
          <img src="images/recSkill.png" alt="" />
        </LogoPhoto>

        <p>RecSkill.</p>

        {/* <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search> */}
        <Nav>
          <NavListWrap>
            <NavList className="active">
              {/* <a href="/Home"> */}
              <a>
                {/* <HomeIcon> */}
                <HomeArea>
                  <img src="/images/nav-home.svg" alt="" />
                  {/* </HomeIcon> */}
                  {/* <img src="/images/nav-home.svg" alt=""/> */}
                  <HomeEdit>
                    <Link to="/Home">Home</Link>
                  </HomeEdit>
                </HomeArea>
                {/* Home */}
              </a>
            </NavList>

            {/* <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList> */}

            <User>
              {/* <HomeIcon></HomeIcon> */}
              <a>
                {props.user && props.user.photoURL ? (
                  <img
                    src={props.user.photoURL}
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>

              <SignOut>
                <ul>
                  <li>
                    <Link to="/Profile">Profile</Link>
                    {/* <a href="/Profile">Profile</a> */}
                  </li>
                  {/* <Button
                    title="First"
                    onPress={(props) => navigation.navigate("/Profile", props)}
                  /> */}
                  {/* <li>
                    <a>Profile</a>
                  </li> */}
                  <li>
                    <a onClick={() => props.signOut()}>Sign Out</a>
                  </li>
                </ul>
              </SignOut>
            </User>

            <Work>
              {/* <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a> */}
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: -webkit-linear-gradient(#e3f9fc, #ffffff);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 50px;
  z-index: 100;
  /* background-color: black; */

  p {
    width: 204px;
    height: 60px;
    background: -webkit-linear-gradient(#33ffab, #aa33ff);
    background-clip: border-box;
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 38px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    margin-top: -4px;

    @media (max-width: 768px) {
      /* margin-left: 169px; */
      /* align-content: center;
      margin-top: 0px;
      font-size: 30px; */
      margin-top: 4px;
      font-size: 30px;
      margin-left: -5px;
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
      /* margin-left: -20px; */
      margin-left: -1px;
      margin-top: -6px;
    }
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    /* left: 0;
    bottom: 0; */
    background: white;
    width: 0%;
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
      /* min-width: 70px; */
      min-width: 88px;
      margin-top: -6px;
      margin-left: -30px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 1);
        /* background-color: rgba(0, 0, 0, 0.08); */
      }
    }
  }
`;

const SignOut = styled.div`
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
    /* margin-top: -90px; */
    margin-top: -15px;

    a {
      margin-left: -10px;
      margin-top: 2px;
    }
    /* margin-top: 0.1px; */
    margin-left: -24px;
    height: 50px;
    width: 70px;
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

const HomeArea = styled.div`
  img {
    margin-left: 28px;

    @media (max-width: 768px) {
      margin-left: 88px;
    }
  }
`;

const HomeEdit = styled.div`
  margin-top: -5px;
  &:hover {
    /* background-color: rgba(0, 0, 0, 0.08); */
  }
  @media (max-width: 768px) {
    margin-left: -4px;

    a {
      margin-left: 59px;
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

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

// const Header = (props) => {
//   return (
//     <Container>
//       <Content>
//         <Logo>{/* <p>RecSkill.</p> */}</Logo>
//         {/* <Search>
//           <div>
//             <input type="text" placeholder="Search" />
//           </div>
//           <SearchIcon>
//             <img src="/images/search-icon.svg" alt="" />
//           </SearchIcon>
//         </Search> */}
//         <Nav>
//           <NavListWrap>
//             <NavList className="active">
//               {/* <a href="/Home"> */}
//               <a>
//                 {/* <HomeIcon> */}
//                   <img src="/images/nav-home.svg" alt="" />
//                 {/* </HomeIcon> */}
//                 {/* <img src="/images/nav-home.svg" alt=""/> */}

//                 <Link to="/Home">Home</Link>
//                 {/* Home */}
//               </a>
//             </NavList>

//             {/* <NavList>
//               <a>
//                 <img src="/images/nav-network.svg" alt="" />
//                 <span>My Network</span>
//               </a>
//             </NavList>

//             <NavList>
//               <a>
//                 <img src="/images/nav-jobs.svg" alt="" />
//                 <span>Jobs</span>
//               </a>
//             </NavList>

//             <NavList>
//               <a>
//                 <img src="/images/nav-messaging.svg" alt="" />
//                 <span>Messaging</span>
//               </a>
//             </NavList>

//             <NavList>
//               <a>
//                 <img src="/images/nav-notifications.svg" alt="" />
//                 <span>Notifications</span>
//               </a>
//             </NavList> */}

//             <User>
//               {/* <HomeIcon></HomeIcon> */}
//               <a>
//                 {props.user && props.user.photoURL ? (
//                   <img
//                     src={props.user.photoURL}
//                     alt=""
//                     referrerPolicy="no-referrer"
//                   />
//                 ) : (
//                   <img src="/images/user.svg" alt="" />
//                 )}
//                 <span>
//                   Me
//                   <img src="/images/down-icon.svg" alt="" />
//                 </span>
//               </a>

//               <SignOut>
//                 <ul>
//                   <li>
//                     <Link to="/Profile">Profile</Link>
//                     {/* <a href="/Profile">Profile</a> */}
//                   </li>
//                   {/* <Button
//                     title="First"
//                     onPress={(props) => navigation.navigate("/Profile", props)}
//                   /> */}
//                   {/* <li>
//                     <a>Profile</a>
//                   </li> */}
//                   <li>
//                     <a onClick={() => props.signOut()}>Sign Out</a>
//                   </li>
//                 </ul>
//               </SignOut>
//             </User>

//             <Work>
//               {/* <a>
//                 <img src="/images/nav-work.svg" alt="" />
//                 <span>
//                   Work
//                   <img src="/images/down-icon.svg" alt="" />
//                 </span>
//               </a> */}
//             </Work>
//           </NavListWrap>
//         </Nav>
//       </Content>
//     </Container>
//   );
// };

// const Container = styled.div`
//   background-color: white;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.08);
//   left: 0;
//   padding: 0 24px;
//   position: fixed;
//   top: 0;
//   width: 100vw;
//   height: 50px;
//   z-index: 100;
// `;

// const Content = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
//   min-height: 100%;
//   max-width: 1128px;
// `;

// const Logo = styled.span`
//   margin-right: 8px;
//   font-size: 10px;
//   p {
//     width: 204px;
//     height: 60px;
//     background: -webkit-linear-gradient(#33ffab, #aa33ff);
//     background-clip: border-box;
//     background-clip: border-box;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     font-size: 48px;
//     font-family: "Poppins", sans-serif;
//     font-weight: 600;
//   }
// `;

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
//       transition: transform 0.2s ease-in-out;
//       width: 100%;
//       border-color: rgba(0, 0, 0, 0.9);
//     }
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
//     min-height: 52px;
//     min-width: 80px;
//     position: relative;
//     text-decoration: none;

//     /* img {
//     margin-top: 100px;
//     } */

//     span {
//       color: rgba(0, 0, 0, 0.6);
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
//         color: rgba(0, 0, 0, 0.9);
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
//   top: 45px;
//   border-radius: 0 0 5px 5px;
//   border: 2px solid black;
//   background: white;
//   /* width: 150px; */
//   /* height: 40px; */
//   font-size: 16px;
//   display: none;
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

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
