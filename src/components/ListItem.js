import React, { useEffect, useState } from "react";

export default function ListItem(props) {

    const [classes, setClasses] = useState("")
    const [complete, setComplete] = useState(false)
    const [priority, setPriority] = useState("low")

    const handleClick = (e) => {
        let temp = complete
        setComplete(!temp)
    }

    useEffect(() => {
        let temp = "list-item"
        props.item.id % 2 === 0 ? temp += " even" : temp += " odd"
        setClasses(temp)
    }, [])
    console.log(complete)
    return (
        <div className="item">
            <div className={classes}>
                <div className="task">
                    <h3 className="task">{props.item.task}</h3>
                </div>
                {props.item.dueDate ? <div className="date"><h4>DUE: {props.item.dueDate}</h4></div> :
                                      <div className="date"><h4>NO DUE DATE</h4></div>}
                <button className="delete-btn" 
                        onClick={() => props.deleteItem(props.item.id)}>Remove</button>
            </div>
            {complete ? <div className="complete" onClick={handleClick}>
                            <span><h4>DONE!</h4></span></div> :
                        <div className="in-progress" onClick={handleClick}>
                            <span><h4>IN PROGRESS</h4></span></div>}
        </div>
    )
}