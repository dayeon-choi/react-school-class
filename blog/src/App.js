import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [posts, setPost] = useState({
    title: ["스포츠 관련", "연예인 관련", "정치 관련"],
    created: ["2월 17일 발행", "3월 18일 발행", "4월 19일 발행"],
  });

  return (
    <div className="App">
      <div className="black-nav">
        <div>😎 Dayeon's Blog</div>
      </div>
      <div className="list">
        <Post postName={posts.title[0]} postCreated={posts.created[0]} />
        <Post postName={posts.title[1]} postCreated={posts.created[1]} />
        <Post postName={posts.title[2]} postCreated={posts.created[2]} />
      </div>
    </div>
  );
}

function Post({ postName, postCreated }) {
  const [likeBtn, setLikeBtn] = useState(0);

  return (
    <div>
      <h3>{postName}</h3>
      <span>{postCreated}</span>
      <span
        onClick={() => {
          setLikeBtn(likeBtn + 1);
        }}
      >
        {"  👍 "}
      </span>
      {likeBtn}
      <hr />
    </div>
  );
}

export default App;
