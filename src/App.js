import React, { useState } from "react";
import Dice from "./Dice";
import Button from "./Button";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [records, setRecords] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    // 배열의 내용이 바뀌었다. != 배열이 바뀌었다.
    // 명시적으로 set을 불렀다!
    // records.push(nextNum);
    // setRecords만 써서 화면을 갱신해주자!
    // setRecords(records);
    setRecords([...records, nextNum]);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    // setRecords([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="blue" num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        {records.join(", ")}
      </div>
    </div>
  );
}

export default App;
