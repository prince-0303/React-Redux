import { useSelector } from "react-redux"

const Display = ()=> {
    const output = useSelector((state) => state.Input.output)

    return(
        <div>
            <h2>Output</h2>
            <ul>
                {output.map((item, index) => (
                    <li key={index}> {item} </li>
                ))}
            </ul>
        </div>
    )
}

export default Display