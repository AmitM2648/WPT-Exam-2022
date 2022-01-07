import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [message,setMessage] = useState("");
  const [list, setList] = useState([]);

  const tweetHere = () => {
    const newList = [message,...list];

    setList(newList);
    setMessage("");
  };
  
  const changeMessage = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };

  let student_name = "Amit"
  let student_id="017"
  return (
    <div className="container">
      <div className="row bg-dark text-light p-2">
      <div class="col-2">
        <h1>MyChatapp</h1>
      </div>
      <div className="col mt-4">
        <h5>
          by {student_name} {student_id}
        </h5>
      </div>
    </div>
    <div className="row d-flex">
      <div className="col mt-2 p-2">
        <input
          type="text"
          value={message}
          name=""
          placeholder="Lets chat here..."
          onChange={changeMessage}
            class="inputtext"
            style={{width:'1200px'}}
        />
      </div>
      <div className="col p-2 mt-2">
        <input type="button" value="SEND" onClick={tweetHere} style={{backgroundcolor:"silver"}} />
      </div>
    </div>
    <div>

      <div id="parent">
        {list.map((item) => (
          <div style={{border:'2px'}}>{item}</div>
        ))}
      </div>
      </div>
      </div>
    
    
      );
  }
