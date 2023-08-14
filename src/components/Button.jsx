
import { useDispatch } from "react-redux"
import { addItem, removeItem } from "../store/slices/itemSlice"
function Button() {
     const dispatch = useDispatch()

     return (
          <div className="container">
               <button type="button" className="btn btn-success" onClick={() => dispatch(addItem("Leanne Graham"))}>Add items</button>
               <button type="button" className="btn btn-danger" onClick={() => dispatch(removeItem())}>Remove items</button>
          </div>
     )
}

export default Button
