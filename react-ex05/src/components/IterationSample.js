import React, { useState } from "react";

const IterationSample = () => {
  const [recordList, setRecordList] = useState([
    { id: 1, name: "UN Vilage" },
    { id: 2, name: "Amusement Park" },
    { id: 3, name: "Love Again" },
    { id: 4, name: "Garden In The Air" },
    { id: 5, name: "Bungee" },
  ]);

  const [nextName, setNextName] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChangeNextName = (e) => {
    const { value } = e.target;
    setNextName(value);
  };

  const onClick = () => {
    setNextId(nextId + 1);
    setRecordList([...recordList, { id: nextId, name: nextName }]);
    setNextName("");
  };

  const onRemove = (id) => {
    const nextRecordList = recordList.filter((name) => name.id !== id);
    setRecordList(nextRecordList);
  };

  const nameList = recordList.map(({ name, id }) => (
    <li key={id} onDoubleClick={() => onRemove(id)}>
      {name}
    </li>
  ));

  return (
    <div>
      <h2>내가 좋아하는 백현이 노래 모음</h2>
      <input value={nextName} onChange={onChangeNextName} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
