import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {actionLogin} from "./redux/posts/action"
import {cancel} from "./redux/posts/reducer"
function PostsList() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.login);
  const [username,setUsername] = React.useState("");
  const [password,setpassword] = React.useState("");
  let data = {
    username:username,
    password:password
  }
  const reset = () => {
    setUsername('');
    setpassword('');
    dispatch(cancel()) ;
  }
  return (
    <div>
    <div>{message.value != "" ? message.value : "whatever you want"}</div>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <div style={{ margin: "5px" }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
        onChange={(e) => setpassword(e.target.value)}
        />
        <div>
          <button onClick={() => dispatch(actionLogin(data))} disabled={!username || !password }>
            Submit
          </button>
        </div>
        <button onClick={reset}>
          Cancel
        </button>
        
      </div>
    </div>
  );
};

export default PostsList;
