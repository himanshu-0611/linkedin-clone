import { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            {/* <Photo><img src={props.user.photoURL} /></Photo> */}
            {/* <Photo></Photo> */}
            <Link>
              Welcome, {props.user ? props.user.displayName : "there"}{" "}
            </Link>
          </a>
          <a>{/* <AddPhotoText>Add a photo</AddPhotoText> */}</a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>
                Upload information about your courses or internship completion
                certificates, achievements.
              </span>
              <span>Keep a record of your skills</span>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/4762/4762232.png" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
  position: fixed;
  width: 20%;
  z-index: 100;
  @media (max-width: 768px){
    width:98%;
    position: absolute;
    margin-left: -10px;
    margin-top: 10px;
  }
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background: -webkit-linear-gradient(#e3f9fc,#ffffff);
  border-radius: 10px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHB1cnBsZSUyMGN5YW4lMjBiYWNrZ3JvdW5kJTIwY292ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  /* background-image: url({props.user.photoURL}); */
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;

  img {
    border-radius: 50%;
    width: 69px;
  }
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;

  img {
    width: 24px;
  }

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;

    &:hover {
      color: #0a66c2;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;

      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const appStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(appStateToProps)(Leftside);

// import { useState } from "react";
// import styled from "styled-components";
// import ReactPlayer from "react-player";
// import { connect } from "react-redux";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";

// const Leftside = (props) => {
//   return (
//     <Container>
//       <ArtCard>
//         <UserInfo>
//           <CardBackground />
//           <a>
//             <Photo>{/* <img src={propsp.user.photoURL} /> */}</Photo>
//             <Link>
//               Welcome, {props.user ? props.user.displayName : "there"}{" "}
//             </Link>
//           </a>
//           <a>{/* <AddPhotoText>Add a photo</AddPhotoText> */}</a>
//         </UserInfo>
//         <Widget>
//           <a>
//             <div>
//               <span>
//                 Upload information about your courses or internship completion
//                 certificates, achievements.
//               </span>
//               <span>Keep a record of your skills</span>
//             </div>
//             <img src="/images/widget-icon.svg" alt="" />
//           </a>
//         </Widget>
//         <Item>
//           <span>
//             <img src="/images/item-icon.svg" alt="" />
//             My Items
//           </span>
//         </Item>
//       </ArtCard>

//       <CommunityCard>
//         <a>
//           <span>Groups</span>
//         </a>
//         <a>
//           <span>
//             Events
//             <img src="/images/plus-icon.svg" alt="" />
//           </span>
//         </a>
//         <a>
//           <span>Follow Hashtags</span>
//         </a>
//         <a>
//           <span>Discover more</span>
//         </a>
//       </CommunityCard>
//     </Container>
//   );
// };

// const Container = styled.div`
//   grid-area: leftside;
//   position: fixed;
//   width: 20%;
//   z-index: 100;
// `;

// const ArtCard = styled.div`
//   text-align: center;
//   overflow: hidden;
//   margin-bottom: 8px;
//   background-color: #fff;
//   border-radius: 10px;
//   transition: box-shadow 83ms;
//   position: relative;
//   border: none;
//   box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
// `;

// const UserInfo = styled.div`
//   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
//   padding: 12px 12px 16px;
//   word-wrap: break-word;
//   word-break: break-word;
// `;

// const CardBackground = styled.div`
//   background: url("https://images.unsplash.com/photo-1579547621309-5e57ab324182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHB1cnBsZSUyMGN5YW4lMjBiYWNrZ3JvdW5kJTIwY292ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60");
//   background-position: center;
//   background-size: 462px;
//   height: 54px;
//   margin: -12px -12px 0;
// `;

// const Photo = styled.div`
//   box-shadow: none;
//   /* background-image: url({props.user.photoURL}); */
//   width: 72px;
//   height: 72px;
//   box-sizing: border-box;
//   background-clip: content-box;
//   background-color: white;
//   background-position: center;
//   background-size: 60%;
//   background-repeat: no-repeat;
//   border: 2px solid white;
//   margin: -38px auto 12px;
//   border-radius: 50%;

//   img {
//     border-radius: 50%;
//     width: 69px;
//   }
// `;

// const Link = styled.div`
//   font-size: 16px;
//   line-height: 1.5;
//   color: rgba(0, 0, 0, 0.9);
//   font-weight: 600;
// `;

// const AddPhotoText = styled.div`
//   color: #0a66c2;
//   margin-top: 4px;
//   font-size: 12px;
//   line-height: 1.33;
//   font-weight: 400;
// `;

// const Widget = styled.div`
//   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
//   padding-top: 12px;
//   padding-bottom: 12px;

//   & > a {
//     text-decoration: none;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 4px 12px;

//     &:hover {
//       background-color: rgba(0, 0, 0, 0.08);
//     }

//     div {
//       display: flex;
//       flex-direction: column;
//       text-align: left;
//       span {
//         font-size: 12px;
//         line-height: 1.333;
//         &:first-child {
//           color: rgba(0, 0, 0, 0.6);
//         }
//         &:nth-child(2) {
//           color: rgba(0, 0, 0, 1);
//         }
//       }
//     }
//   }

//   svg {
//     color: rgba(0, 0, 0, 1);
//   }
// `;

// const Item = styled.a`
//   border-color: rgba(0, 0, 0, 0.8);
//   text-align: left;
//   padding: 12px;
//   font-size: 12px;
//   display: block;
//   span {
//     display: flex;
//     align-items: center;
//     color: rgba(0, 0, 0, 1);
//     svg {
//       color: rgba(0, 0, 0, 0.6);
//     }
//   }

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.08);
//   }
// `;

// const CommunityCard = styled(ArtCard)`
//   padding: 8px 0 0;
//   text-align: left;
//   display: flex;
//   flex-direction: column;
//   a {
//     color: black;
//     padding: 4px 12px 4px 12px;
//     font-size: 12px;

//     &:hover {
//       color: #0a66c2;
//     }

//     span {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//     }

//     &:last-child {
//       color: rgba(0, 0, 0, 0.6);
//       text-decoration: none;

//       border-top: 1px solid #d6cec2;
//       padding: 12px;
//       &:hover {
//         background-color: rgba(0, 0, 0, 0.08);
//       }
//     }
//   }
// `;

// const appStateToProps = (state) => {
//   return {
//     user: state.userState.user,
//   };
// };

// export default connect(appStateToProps)(Leftside);
