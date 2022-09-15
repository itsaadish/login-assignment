import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from './redux/store';
import PostsList from "./PostsList"
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
      <h1>React Hooks + Redux Saga </h1>
      <PostsList/>
    </div>
      </Provider>
  );
}

export default App;
