import {Provider} from "react-redux";
import store from "./redux"
import Num from "./Num";
import Btn from "./Btn";


function App() {
  return (
    <Provider store={store}>
      <Num/>
      <Btn/>



    </Provider>  
    
  );
}

export default App;
