import { useState } from "react";

export default function App() {
  const [count, SetCount] = useState(0);
  const [plus, SetPlus] = useState("");
  const [minus, SetMinus] = useState("");

  const addPluse = () => {
    SetPlus(Number + input);
  };

  const reset = () => {
    SetCount(0);
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          value={count}
          onChange={(e) => {
            SetCount();
          }}
        />{" "}
        만큼을
        <button onClick={() => SetPlus}>더할게요</button>
        <button>뺄게요</button>
        <button onClick={() => SetCount}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}
