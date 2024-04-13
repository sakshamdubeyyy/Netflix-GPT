import { Provider, useDispatch } from "react-redux";
import Body from "./components/Body";
import userStore from "./utils/userStore";

function App() {


  return (
    <div className="App">
      <Provider store={userStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
