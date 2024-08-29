import { useState } from "react";
import Button from "./Button";
import Board from "./Board";
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  console.log('A');
  // Unrolling vs rolling (array)
  const [myRecords, setMyRecords] = useState([]);
  const [yourRecords, setYourRecords] = useState([]);

  const handleRollClick = () => {
    // 불순함(impure)의 다른 말 
    // 새 주사위 눈의 수를 상태로 관리하겠다. 그 상태의 이름이 num이다. 
    // 그리고 지금 기존의 눈의 수를 새로 받는 nextNum으로 바꾸겠다.
    // 그럴 때 num 상태의 세터 함수인 setNum을 nextNum 인수로 호출한다.
    // 그러면 화면이 바뀐다.(다시 그린다)    
    // 불변형 데이터로부터 불변형 데이터를 파생시킨다.
    const nextMyNum = random(6); 
    const newMyRecords = [...myRecords, nextMyNum];
    setMyRecords(newMyRecords);
    const nextYourNum = random(6); 
    const newYourRecords = [...yourRecords, nextYourNum];
    setYourRecords(newYourRecords);
  };

  const handleClearClick = () => {
    setMyRecords([]);
    setYourRecords([]);
  }

  return (
    <div className="App">
      <div>
        <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" records={myRecords} />
        <Board name="너" color="red" records={yourRecords} />
      </div>
    </div>
  );
} 

export default App;