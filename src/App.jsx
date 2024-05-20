import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [contents, setContent] = useState("");

  const addTodoList = (e) => {
    e.preventDefault();
    if (!title || !contents) {
      alert("빈칸을 채워주세요!");
      return;
    }
    setTitle("");
    setContent("");

    const newTodo = {
      id: Date.now(),
      title,
      contents,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const titleValue = (e) => {
    setTitle(e.target.value);
  };
  const contentValue = (e) => {
    setContent(e.target.value);
  };
  const Working = todoList.filter((e) => e.isDone);

  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <form>
        <label>제목</label>
        <input type="text" value={title} onChange={titleValue} />
        <label>내용</label>
        <input type="text" value={contents} onChange={contentValue} />
        <button type="submit">추가</button>
      </form>
      <div>Working</div>
      <ul>
        {Working.map((todo) => (
          <li>
            <div>
              <p>{todo.title}</p>,<p>{todo.contents}</p>
            </div>
          </li>
        ))}
      </ul>
      <div>Done</div>
    </>
  );
}
