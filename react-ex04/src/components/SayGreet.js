import React, { useState } from "react";

const SayGreet = () => {
  const [greetMessage, setGreetMessage] = useState("음...");
  const [textColor, setTextColor] = useState("black");

  const onChangeGreetMessage = (e) => {
    const { value } = e.target;
    value === "입장"
      ? setGreetMessage("앗, 안녕하세요!!!!🙋🏻‍♀️")
      : setGreetMessage("앗, 안녕히가세요!!!🙇🏻‍♀️");
  };

  return (
    <div>
      <div className="enter">
        <button onClick={onChangeGreetMessage} value="입장">
          입장
        </button>
        <button onClick={onChangeGreetMessage} value="퇴장">
          퇴장
        </button>
      </div>
      <div className="greet">
        <h2 style={{ color: textColor }}>{greetMessage}</h2>
      </div>
      <div className="color">
        <button onClick={() => setTextColor("red")} style={{ color: "red" }}>
          빨간색
        </button>
        <button onClick={() => setTextColor("blue")} style={{ color: "blue" }}>
          파란색
        </button>
        <button
          onClick={() => setTextColor("green")}
          style={{ color: "green" }}
        >
          초록색
        </button>
      </div>
    </div>
  );
};

export default SayGreet;
