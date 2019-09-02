import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "./redux/reducer";
import { fetchData } from "./redux/action";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { status, items, error } = useSelector((state: Store) => state);

  const [input, setInput] = useState("");
  const handleInput: React.ChangeEventHandler<HTMLInputElement> = e =>
    setInput(e.target.value);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    dispatch(fetchData(input));
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleInput} />
          <button type="submit">확인</button>
        </form>
      </div>
      <div>
        <h2>Status {status}</h2>
      </div>
      <div>
        {items.map(({ id, title, body, userId }) => (
          <div key={id}>
            <h1>
              {title} by User {userId}
            </h1>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
