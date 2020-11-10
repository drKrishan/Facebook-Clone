import React, { useEffect, useState } from "react";
import "../StyleSheets/Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { useStateValue } from "../StateProvider";
import db from "../firebase";

function Feed() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPost(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  console.log("posts", posts);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp?.toDate()}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

      <Post
        profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu8uezxBofHNHHRNI-C1f--A8hQ4jz8anKvy8a7G=s83-c-mo"
        message="This is my Second Post"
        timestamp="Thisis a time stamp 2"
        username="Dr. Vinoth Krishan"
      />
    </div>
  );
}

export default Feed;
