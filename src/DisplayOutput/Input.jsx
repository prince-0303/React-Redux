import { useState } from "react"
import { useDispatch } from "react-redux"
import { addInput } from "../Action"


const Input = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim()) {
            dispatch(addInput(text))
            setText('')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
            <button type="submit" >Submit</button>
        </form>
    )

}
export default Input;