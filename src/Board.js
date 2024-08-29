import Dice from "./Dice";

function Board({color, name, records}) {
  // 저장 속성으로부터 계산
  const num = records[records.length - 1] || 1;
  const sum = records.reduce((a, b) => a + b, 0);
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <Dice color={color} num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        {records.join(', ')}
      </div>
    </div>
  );
} 

export default Board;