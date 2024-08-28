import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [records, setRecords] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6); // 불순함(impure)의 다른 말 
    // side effect 부수 효과
    // 현재 시간 얻기 
    // 새 주사위 눈의 수를 상태로 관리하겠다.
    // 그 상태의 이름이 num이다.
    // 그리고 지금 기존의 눈의 수를
    // 새로 받는 nextNum으로 바꾸겠다.
    // 그럴 때 num 상태의 세터 함수인
    // setNum을 nextNum 인수로 호출한다.
    // 그러면 화면이 바뀐다.(다시 그린다)    
    setNum(nextNum);
    setSum(sum + nextNum);
    // 불변형 데이터로부터 불변형 데이터를 파생시킨다.
    const newRecords = [...records, nextNum]; // 클론 records.slice()
    setRecords(newRecords);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setRecords([]);
  }

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
        {records.join(', ')}
      </div>
    </div>
  );
} 

export default App;