import React, { useState, useRef, useEffect, createRef } from "react";
import firebase from "../../firebase.js";
import BirthdayCard from "./Stories/Content/Birthday/BirthdayCard";
import MasonryGrid from "../MasonryGrid/MasonryGrid";
import ContentCard from "./Stories/Content/ContentCard";
import { Button } from "../Button/Button";
import NewPost from "./NewPost";
import Modal from "../Modal/Modal";
import "./news-feed.scss";
import { ProgressIndicator } from "components/ProgressIndicator/ProgressIndicator.jsx";

const NewsFeed = () => {
  const uniqid = require("uniqid");
  const storiesDataRef = firebase.firestore().collection("stories");
  const userDataRef = firebase.firestore().collection("userData");
  const postTypes = [
    { name: "text", selected: true },
    { name: "photo", selected: false },
    { name: "video", selected: false },
  ];
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);
  const [user, setUser] = useState();
  const storiesLength = stories.length;
  const commentRef = useRef([]);
  const videoRefs = useRef([]);
  const [isCommentEmpty, setCommentEmptyState] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  //to fake unique id
  const [buttonState, setButtonState] = useState(postTypes);
  const [inputValue, setInputvalue] = useState("");
  const [modalTextInputEmpty, setModalTextInputEmpty] = useState(true);
  const modalCommentRef = useRef("");

  //Modals Video & image Input values
  const onModalInputChange = (e) => {
    setInputvalue(e.target.value);
  };

  //Modal's video & image input cancel button
  const onModalInputCancelClick = () => {
    setInputvalue("");
  };

  //Modal's switch between Text, vide & image buttons
  const onItemClick = (i) => {
    const buttonArr = [...buttonState];
    buttonArr.forEach((type) => {
      if (type !== buttonArr[i]) {
        type.selected = false;
      }
      if (type === buttonArr[i]) {
        type.selected = true;
      }
    });
    setInputvalue("");
    modalCommentRef.current = "";
    isModalEmpty();
    setButtonState(buttonArr);
  };

  //When Modal exited, put inner modal buttons to initial visual state
  const onItemRestart = () => {
    const buttonArr = [...buttonState];
    buttonArr.forEach((type) => {
      if (type.name === "text") {
        type.selected = true;
      } else {
        type.selected = false;
      }
    });
    setInputvalue("");
    modalCommentRef.current = "";
    isModalEmpty();
    setButtonState(buttonArr);
  };

  //Modal's text input value
  const modalInputOnChange = (e) => {
    modalCommentRef.current = e.target.value;
    isModalEmpty();
  };

  //Check if Modal's text value is empty
  const isModalEmpty = () => {
    if (modalCommentRef.current.length > 0) {
      setModalTextInputEmpty(false);
    } else {
      setModalTextInputEmpty(true);
    }
  };

  const likedPosts = (postId) => {
    return user.likedPostsId.includes(postId) ? true : false;
  };

  //add new post
  const addPost = () => {
    const timeOfPost = new Date();
    let newStory;
    buttonState.forEach((type) => {
      if (type.name === "text" && type.selected) {
        newStory = {
          type: "post",
          id: uniqid(),
          userName: user.userName,
          userImage: user.userImage,
          postLocation: "VLN",
          postDate: timeOfPost.toISOString(),
          postText: modalCommentRef.current,
          likes: 0,
          comments: [],
        };
        setStories([...stories, newStory]);
        storiesDataRef.doc(`${newStory.id}`).set(newStory);
      } else if (type.name === "photo" && type.selected) {
        newStory = {
          type: "photo",
          id: uniqid(),
          userName: user.userName,
          userImage: user.userImage,
          postLocation: "VLN",
          postDate: timeOfPost.toISOString(),
          postImage: inputValue,
          likes: 0,
          comments: [],
        };
        setStories([...stories, newStory]);
        storiesDataRef.doc(`${newStory.id}`).set(newStory);
      } else if (type.name === "video" && type.selected) {
        newStory = {
          type: "video",
          id: uniqid(),
          userName: user.userName,
          userImage: user.userImage,
          postLocation: "VLN",
          postDate: timeOfPost.toISOString(),
          postVideo: inputValue,
          likes: 0,
          comments: [],
        };
        setStories([...stories, newStory]);
        storiesDataRef.doc(`${newStory.id}`).set(newStory);
      }
    });

    onItemRestart();
    setModalOpen(false);
  };

  //On news feed reaciton click
  const onReactionClick = (i) => {
    let storiesArr = [...stories];
    let likedPosts = user.likedPostsId;
    const updateStory = (item) => {
      storiesDataRef.doc(`${storiesArr[i].id}`).set(
        {
          [item]: storiesArr[i][item],
        },
        { merge: true }
      );
    };
    if (!likedPosts.includes(storiesArr[i].id)) {
      likedPosts.push(storiesArr[i].id);
      if (storiesArr[i].type === "birthday") {
        storiesArr[i].wishes += 1;
        updateStory("wishes");
      } else {
        storiesArr[i].likes += 1;
        updateStory("likes");
      }
    } else {
      likedPosts.splice(storiesArr[i].id, 1);
      if (storiesArr[i].type === "birthday") {
        storiesArr[i].wishes -= 1;
        updateStory("wishes");
      } else {
        storiesArr[i].likes -= 1;
        updateStory("likes");
      }
    }
    setStories(storiesArr);
    setUser({ ...user, likedPostsId: likedPosts });
    userDataRef.doc(`userData`).set(
      {
        likedPostsId: likedPosts,
      },
      { merge: true }
    );
  };

  const modalClose = () => {
    onItemRestart();
    setModalOpen(false);
  };
  //comment Submit handler
  const submitCommentHandler = (i) => () => {
    const postDate = new Date();
    let storiesArr = [...stories];
    storiesArr[i].comments = [
      ...storiesArr[i].comments,
      {
        userName: user.userName,
        comment: commentRef.current[i],
        date: JSON.stringify(postDate),
      },
    ];
    setStories(storiesArr);
    storiesDataRef
      .doc(`${storiesArr[i].id}`)
      .set({ comments: storiesArr[i].comments }, { merge: true });
    commentRef.current[i] = "";
    isCommentEmptyCheck(i);
  };

  const onCommentChange = (i) => (e) => {
    commentRef.current[i] = e.target.value;
  };

  const isCommentEmptyCheck = (i) => {
    if (commentRef.current[i].length > 0) {
      setCommentEmptyState(false);
    } else {
      setCommentEmptyState(true);
    }
  };
  const handleCommentBlur = (i) => () => {
    isCommentEmptyCheck(i);
  };

  const onVideoPlay = (i) => {
    videoRefs.current.forEach((videoRef) => {
      if (
        videoRef.current !== videoRefs.current[i].current &&
        videoRef.current !== null
      ) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    });
  };

  // sort posts by date
  stories.sort(function (a, b) {
    let keyA = new Date(a.postDate),
      keyB = new Date(b.postDate);
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });

  useEffect(async () => {
    setLoading(true);
    try {
      await storiesDataRef.get().then((snapshot) => {
        let items = [];
        snapshot.docs.forEach((doc) => {
          items.push(doc.data());
        });
        setStories(items);
      });
      await userDataRef
        .doc("userData")
        .get()
        .then((res) => {
          setUser(res.data());
        });
      setLoading(false);
    } catch (error) {
      console.log("Error getting document: ", error);
    }
  }, []);

  useEffect(() => {
    if (commentRef.current.length !== storiesLength) {
      commentRef.current = Array(storiesLength)
        .fill()
        .map((_, i) => commentRef.current[i] || "");
    }
    if (videoRefs.current.length !== storiesLength) {
      videoRefs.current = Array(storiesLength)
        .fill()
        .map((_, i) => videoRefs.current[i] || createRef());
    }
  }, [storiesLength]);

  if (loading) {
    return <ProgressIndicator message="loading..." />;
  }
  return (
    <>
      <div className="newsFeed__heading">
        <h2 className="dashboard__heading">News and Stories</h2>
        <Button
          className="button button--enabled newsFeed__modal-button"
          handleClick={() => setModalOpen(true)}
        >
          Add new Post
        </Button>
      </div>
      <section className="newsFeed">
        <Modal open={modalOpen} modifierClassName="story" onClose={modalClose}>
          <NewPost
            inputValue={inputValue}
            handleCancelClick={() => setModalOpen(false)}
            handleSubmitClick={addPost}
            buttonState={buttonState}
            onInputChange={(e) => onModalInputChange(e)}
            onItemClick={(i) => onItemClick(i)}
            onInputCancelClick={onModalInputCancelClick}
            modalCommentRef={modalCommentRef.current}
            modalInputOnChange={(e) => modalInputOnChange(e)}
            isModalEmpty={modalTextInputEmpty}
          />
        </Modal>
        <MasonryGrid>
          {stories.map((story, index) => {
            if (story.type === "birthday") {
              return (
                <BirthdayCard
                  key={story.id}
                  data={story}
                  avatar={user.userImage}
                  userName={user.userName}
                  type={story.type}
                  likes={story.wishes}
                  reaction={likedPosts(story.id)}
                  onReactionClick={() => onReactionClick(index)}
                  commentsCount={story.comments.length}
                  commentsList={story.comments}
                  submitHandler={submitCommentHandler(index)}
                  commentField={commentRef.current[index]}
                  handleValueChange={onCommentChange(index)}
                  handleBlur={handleCommentBlur(index)}
                  isCommentEmpty={isCommentEmpty}
                />
              );
            } else {
              return (
                <ContentCard
                  key={story.id}
                  data={story}
                  avatar={user.userImage}
                  userName={user.userName}
                  type={story.type}
                  likes={story.likes}
                  reaction={likedPosts(story.id)}
                  onReactionClick={() => onReactionClick(index)}
                  commentsCount={story.comments.length}
                  commentsList={story.comments}
                  submitHandler={submitCommentHandler(index)}
                  commentField={commentRef.current[index]}
                  handleValueChange={onCommentChange(index)}
                  handleBlur={handleCommentBlur(index)}
                  isCommentEmpty={isCommentEmpty}
                  onVideoPlaying={() => onVideoPlay(index)}
                  videoRef={videoRefs.current[index]}
                />
              );
            }
          })}
        </MasonryGrid>
      </section>
    </>
  );
};

export default NewsFeed;
