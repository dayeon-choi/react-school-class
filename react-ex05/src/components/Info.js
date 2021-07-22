import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState();
  const [nickname, setNickname] = useState();

  const onChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const onChangeNickname = (e) => {
    const { value } = e.target;
    setNickname(value);
  };

  return (
    <div>
      <div className="input">
        <div>
          <label for="inputName">이름 : </label>
          <input value={name} onChange={onChangeName} className="inputName" />
        </div>
        <div>
          <label for="inputNickname">닉네임 : </label>
          <input
            value={nickname}
            onChange={onChangeNickname}
            className="inputNickname"
          />
        </div>
      </div>
      <div className="result">
        <b>이름 : </b> {name}
        <b>닉네임 : </b> {nickname}
      </div>
    </div>
  );
};

export default Info;
