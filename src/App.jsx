import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "./Action";

function App() {

  const count  = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
   <div>
    <button onClick={() => dispatch({type :INCREMENT})} > INCREMENT </button>
    <h2>{count}</h2>
    <button onClick={() => dispatch ({type :DECREMENT})} >DECREMENT</button>

   </div>

  )
}

export default App;