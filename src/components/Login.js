import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import { signInAPI } from "../actions";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  return (
    <Container>
      {props.user && <Navigate to="/home" />}
      <Nav>
        <img src="/images/recSkill.png" alt="" />
        <p>RecSkill.</p>
        <div>
          {/* <Join>Join now</Join>
          <SignIn>Sign in</SignIn> */}
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>
            Keep a Record of Your Skills, Stay Active in your Learning Journey
          </h1>
          {/* <img src="/images/login-hero.svg" alt="" /> */}
          {/* <img src="/images/front.gif" alt="" /> */}
          <img src="/images/Front.png" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > p {
    @media (max-width: 768px) {
      padding: 0 5px;
      margin-left: -28px;
      margin-top: 9px;
    }
    width: 204px;
    margin-left: -810px;
    height: 60px;
    background: -webkit-linear-gradient(#33ffab, #aa33ff);
    background-clip: border-box;
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 48px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }

  img {
    width: 80px;
    margin-top: 17px;
    @media (max-width: 768px) {
      margin-top: 21px;
      margin-left: 49px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    font-size: 72px;
    background: -webkit-linear-gradient(#a733ff, #33f5ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 200;
    line-height: 70px;
    height: 290px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
      margin-top: -10px;
      height: 140px;
    }
  }

  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    border-radius: 50%;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
      width: 379px;
      height: auto;
      padding: 0;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 70px;
    margin-left: 54px;
    margin-right: 62px;
    margin-bottom: -26px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  /* background-color: #33ccff; */
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  /* box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0); */

  vertical-align: middle;
  z-index: 0;
  /* transition-duration: 167ms; */
  font-size: 20px;
  /* color: rgba(0, 0, 0, 0.6); */
  outline-color: transparent;
  outline-style: solid;
  box-shadow: 0 0 0 4px #5a01a7;
  /* transition: 0.7s; */
  background-image: linear-gradient(
    to right,
    #fbc2eb 0%,
    #a6c1ee 51%,
    #fbc2eb 100%
  );
  &:hover {
    /* background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75); */
    background-position: right center;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// import styled from "styled-components";
// import React from "react";
// import { connect } from "react-redux";
// import { signInAPI } from "../actions";
// import { Navigate } from "react-router-dom";

// const Login = (props) => {
//   return (
//     <Container>
//       {props.user && <Navigate to="/home" />}
//       <Nav>
//         <img src="/images/recSkill.png" alt="" />
//         <p>RecSkill.</p>
//         <div>
//           {/* <Join>Join now</Join>
//           <SignIn>Sign in</SignIn> */}
//         </div>
//       </Nav>
//       <Section>
//         <Hero>
//           <h1>Keep a Record of Your Skills, Stay Active in your Learning Journey</h1>
//           <img src="/images/login-hero.svg" alt="" />
//         </Hero>
//         <Form>
//           <Google onClick={() => props.signIn()}>
//             <img src="/images/google.svg" alt="" />
//             Sign in with Google
//           </Google>
//         </Form>
//       </Section>
//     </Container>
//   );
// };

// const Container = styled.div`
//   padding: 0px;
// `;

// const Nav = styled.nav`
//   max-width: 1128px;
//   margin: auto;
//   padding: 12px 0 16px;
//   display: flex;
//   align-items: center;
//   position: relative;
//   justify-content: space-between;
//   flex-wrap: nowrap;

//   & > p {
//     @media (max-width: 768px) {
//       padding: 0 5px;
//       margin-left: 150px;
//     }
//     width: 204px;
//     margin-left: -810px;
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

//   img {
//     width: 80px;
//     margin-top: 17px;
//   }
// `;

// const Join = styled.a`
//   font-size: 16px;
//   padding: 10px 12px;
//   text-decoration: none;
//   border-radius: 4px;
//   color: rgba(0, 0, 0, 0.6);
//   margin-right: 12px;
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.08);
//     color: rgba(0, 0, 0, 0.9);
//     text-decoration: none;
//   }
// `;

// const SignIn = styled.a`
//   box-shadow: inset 0 0 0 1px #0a66c2;
//   color: #0a66c2;
//   border-radius: 24px;
//   transition-duration: 167ms;
//   font-size: 16px;
//   font-weight: 600;
//   line-height: 40px;
//   padding: 10px 24px;
//   text-align: center;
//   background-color: rgba(0, 0, 0, 0);
//   &:hover {
//     background-color: rgba(112, 181, 249, 0.15);
//     color: #0a66c2;
//     text-decoration: none;
//   }
// `;

// const Section = styled.section`
//   display: flex;
//   align-content: start;
//   min-height: 700px;
//   padding-bottom: 138px;
//   padding-top: 40px;
//   padding: 60px 0;
//   position: relative;
//   flex-wrap: wrap;
//   width: 100%;
//   max-width: 1128px;
//   align-items: center;
//   margin: auto;

//   @media (max-width: 768px) {
//     margin: auto;
//     min-height: 0px;
//   }
// `;

// const Hero = styled.div`
//   width: 100%;
//   h1 {
//     padding-bottom: 0;
//     width: 55%;
//     font-size: 56px;
//     font-size: 72px;
//     background: -webkit-linear-gradient(#a733ff, #33f5ff);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     font-weight: 200;
//     line-height: 70px;
//     height: 301px;
//     @media (max-width: 768px) {
//       text-align: center;
//       font-size: 20px;
//       width: 100%;
//       line-height: 2;
//     }
//   }

//   img {
//     /* z-index: -1; */
//     width: 700px;
//     height: 670px;
//     position: absolute;
//     bottom: -2px;
//     right: -150px;
//     @media (max-width: 768px) {
//       top: 230px;
//       width: initial;
//       position: initial;
//       height: initial;
//     }
//   }
// `;

// const Form = styled.div`
//   margin-top: 100px;
//   width: 408px;
//   @media (max-width: 768px) {
//     margin-top: 20px;
//     margin-left: 64px;
//   }
// `;

// const Google = styled.button`
//   display: flex;
//   justify-content: center;
//   /* background-color: #33ccff; */
//   align-items: center;
//   height: 56px;
//   width: 100%;
//   border-radius: 28px;
//   /* box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
//     inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0); */

//   vertical-align: middle;
//   z-index: 0;
//   /* transition-duration: 167ms; */
//   font-size: 20px;
//   /* color: rgba(0, 0, 0, 0.6); */
//   outline-color: transparent;
//   outline-style: solid;
//   box-shadow: 0 0 0 4px #5a01a7;
//   /* transition: 0.7s; */
//   background-image: linear-gradient(
//     to right,
//     #fbc2eb 0%,
//     #a6c1ee 51%,
//     #fbc2eb 100%
//   );
//   &:hover {
//     /* background-color: rgba(207, 207, 207, 0.25);
//     color: rgba(0, 0, 0, 0.75); */
//     background-position: right center;
//   }
// `;

// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   signIn: () => dispatch(signInAPI()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

// import styled from "styled-components";
// import React from "react";
// import { connect } from "react-redux";
// import { signInAPI } from "../actions";
// import { Navigate } from "react-router-dom";

// const Login = (props) => {
//   return (
//     <Container>
//       {props.user && <Navigate to="/home" />}
//       <Nav>
//         <p>RecSkill.</p>
//         <div>
//           {/* <Join>Join now</Join>
//           <SignIn>Sign in</SignIn> */}
//         </div>
//       </Nav>
//       <Section>
//         <Hero>
//           <h1>Welcome to your professional community</h1>
//           <img src="/images/login-hero.svg" alt="" />
//         </Hero>
//         <Form>
//           <Google onClick={() => props.signIn()}>
//             <img src="/images/google.svg" alt="" />
//             Sign in with Google
//           </Google>
//         </Form>
//       </Section>
//     </Container>
//   );
// };

// const Container = styled.div`
//   padding: 0px;
// `;

// const Nav = styled.nav`
//   max-width: 1128px;
//   margin: auto;
//   padding: 12px 0 16px;
//   display: flex;
//   align-items: center;
//   position: relative;
//   justify-content: space-between;
//   flex-wrap: nowrap;

//   & > p {
//     @media (max-width: 768px) {
//       padding: 0 5px;
//     }
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

// const Join = styled.a`
//   font-size: 16px;
//   padding: 10px 12px;
//   text-decoration: none;
//   border-radius: 4px;
//   color: rgba(0, 0, 0, 0.6);
//   margin-right: 12px;
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.08);
//     color: rgba(0, 0, 0, 0.9);
//     text-decoration: none;
//   }
// `;

// const SignIn = styled.a`
//   box-shadow: inset 0 0 0 1px #0a66c2;
//   color: #0a66c2;
//   border-radius: 24px;
//   transition-duration: 167ms;
//   font-size: 16px;
//   font-weight: 600;
//   line-height: 40px;
//   padding: 10px 24px;
//   text-align: center;
//   background-color: rgba(0, 0, 0, 0);
//   &:hover {
//     background-color: rgba(112, 181, 249, 0.15);
//     color: #0a66c2;
//     text-decoration: none;
//   }
// `;

// const Section = styled.section`
//   display: flex;
//   align-content: start;
//   min-height: 700px;
//   padding-bottom: 138px;
//   padding-top: 40px;
//   padding: 60px 0;
//   position: relative;
//   flex-wrap: wrap;
//   width: 100%;
//   max-width: 1128px;
//   align-items: center;
//   margin: auto;

//   @media (max-width: 768px) {
//     margin: auto;
//     min-height: 0px;
//   }
// `;

// const Hero = styled.div`
//   width: 100%;
//   h1 {
//     padding-bottom: 0;
//     width: 55%;
//     font-size: 56px;
//     font-size: 72px;
//     background: -webkit-linear-gradient(#a733ff, #33f5ff);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     font-weight: 200;
//     line-height: 70px;
//     @media (max-width: 768px) {
//       text-align: center;
//       font-size: 20px;
//       width: 100%;
//       line-height: 2;
//     }
//   }

//   img {
//     /* z-index: -1; */
//     width: 700px;
//     height: 670px;
//     position: absolute;
//     bottom: -2px;
//     right: -150px;
//     @media (max-width: 768px) {
//       top: 230px;
//       width: initial;
//       position: initial;
//       height: initial;
//     }
//   }
// `;

// const Form = styled.div`
//   margin-top: 100px;
//   width: 408px;
//   @media (max-width: 768px) {
//     margin-top: 20px;
//   }
// `;

// const Google = styled.button`
//   display: flex;
//   justify-content: center;
//   /* background-color: #33ccff; */
//   align-items: center;
//   height: 56px;
//   width: 100%;
//   border-radius: 28px;
//   /* box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
//     inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0); */

//   vertical-align: middle;
//   z-index: 0;
//   /* transition-duration: 167ms; */
//   font-size: 20px;
//   /* color: rgba(0, 0, 0, 0.6); */
//   outline-color: transparent;
//   outline-style: solid;
//   box-shadow: 0 0 0 4px #5a01a7;
//   /* transition: 0.7s; */
//   background-image: linear-gradient(
//     to right,
//     #fbc2eb 0%,
//     #a6c1ee 51%,
//     #fbc2eb 100%
//   );
//   &:hover {
//     /* background-color: rgba(207, 207, 207, 0.25);
//     color: rgba(0, 0, 0, 0.75); */
//     background-position: right center;
//   }
// `;

// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   signIn: () => dispatch(signInAPI()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
