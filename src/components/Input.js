import React from "react";
import { useState } from "react";

export default function Input(props){
    const [input, setInput] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit = () => {
        input ? props.addTask(input, date) : alert("You cannot add an empty task!")
    }

    return (
        <div className="input">
            <form className="form">
                <input
                    placeholder="Add Item Here"
                    type={"text"}
                    onChange={(e) => setInput(e.target.value)}
                />
                <label htmlFor="due-date"> Due Date: </label>
                <input
                    type={"date"}
                    name={"due-date"}
                    onChange={(e) => setDate(e.target.value)}
                />

                <input 
                    type={"button"}
                    value={"Add"}
                    onClick={handleSubmit}
                />
            </form>
        </div>
    )
}