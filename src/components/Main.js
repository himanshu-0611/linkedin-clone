import { useState } from "react";
import { useEffect } from "react";
import { getArticlesAPI } from "../actions";
import styled from "styled-components";
import React from "react";
import PostModal from "./PostModal";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("clsoe");
        break;
    }
  };

  return (
    <>
      {props.articles.length === 0 ? (
        <p>There are no articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img
                  src={props.user.photoURL}
                  alt=""
                  referrerPolicy="no-referrer"
                />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start a Post
              </button>
            </div>
            <div>
              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1375/1375106.png"
                  alt=""
                />
                <span>Photo</span>
              </button>

              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3074/3074767.png"
                  alt=""
                />
                <span>Video</span>
              </button>

              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3277/3277431.png"
                  alt=""
                />
                <span>Event</span>
              </button>

              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6612/6612250.png"
                  alt=""
                />
                <span>Article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {props.loading && (
              <img src="https://cdn-icons-png.flaticon.com/512/889/889843.png" />
            )}
            {props.articles.length > 0 &&
              // props.articles.title === props.user.displayName &&
              props.articles.map((article, key) =>
                article.actor.title === props.user.displayName ? (
                  <Article key={key}>
                    <SharedActor>
                      <a>
                        <img src={article.actor.image} alt="" />
                        <div>
                          <p>{article.actor.title}</p>
                          {/* <span>{article.actor.title}</span> */}
                          <span>{article.actor.description}</span>
                          {/* <span>{article.actor.createdAt.toDate()}</span> */}
                        </div>
                      </a>
                      <button>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2311/2311523.png"
                          alt=""
                        />
                      </button>
                    </SharedActor>
                    <Description>{article.description}</Description>
                    <SharedImg>
                      <a>
                        {!article.sharedImg && article.video ? (
                          <ReactPlayer width={"100%"} url={article.video} />
                        ) : (
                          article.sharedImg && <img src={article.sharedImg} />
                        )}
                      </a>
                    </SharedImg>
                    {/* <SocialCounts>
                    <li>
                      <button>
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/456/456115.png"
                          alt=""
                        />
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/1629/1629881.png"
                          alt=""
                        />

                        <span>75</span>
                      </button>
                    </li>
                    <li>
                      <a>{article.comments}</a>
                    </li>
                  </SocialCounts>
                  <SocialActions>
                    <button>
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/456/456115.png"
                        alt=""
                      />
                      <span>Like</span>
                    </button>

                    <button>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2593/2593491.png"
                        alt=""
                      />
                      <span>Comment</span>
                    </button>

                    <button>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/929/929468.png"
                        alt=""
                      />
                      <span>Share</span>
                    </button>

                    <button>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2161/2161491.png"
                        alt=""
                      />
                      <span>Send</span>
                    </button>
                  </SocialActions> */}
                  </Article>
                ) : null
              )}
          </Content>
          <PostModal
            showModal={showModal}
            handleClick={handleClick}
          ></PostModal>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  grid-area: main;
  /* border-radius: 2px solid black; */
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 0px rgb(0 0 0 / 15), 0 0 0 rgb(0 0 0 / 20);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 -9px 15px -9px;
  background: white;
  /* padding-bottom: 10px; */
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
          width: 25px;
        }

        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 -9px 15px -9px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8 px;
      overflow: hidden;

      p {
        margin-top: 5px;
        font-size: 15px;
        text-align: left;
        margin-left: 10px;
        color: rgba(0, 0, 0, 0.6);
        color: black;
      }

      span {
        text-align: left;
        margin-left: 10px;

        &:first-child {
          font-size: 30px;
          font-weight: 900;
          color: rgba(0, 0, 0, 1);
          /* color: green; */
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
          /* color: green;  */
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;

    img {
      width: 25px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1 px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;
      border: none;
      background-color: white;

      img {
        width: 25px;
      }
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    background-color: white;

    img {
      width: 15px;
    }

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const Content = styled.div`
  text-align: center;
  /* margin-bottom: 5px; */

  & > img {
    width: 30px;
  }
`;

const mapStateToPops = (state) => {
  return {
    // loading: state.ArticleState.loading,
    articles: state.articleState.articles,
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToPops, mapDispatchToProps)(Main);
