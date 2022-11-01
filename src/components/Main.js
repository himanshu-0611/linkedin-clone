import styled from "styled-components";
import React from "react";

// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const Main = (props) => {
  return (
    <Container>
      <ShareBox>Share</ShareBox>
      <div>
        <img src="/images/user.svg" alt="" />
        <button>Start a Post</button>

        <div>
          <button>
            {/* <AddAPhotoIcon/> */}
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15), 0 0 0 rgb(0 0 0 / 20);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  background: white;
`;

export default Main;
