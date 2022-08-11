import { useState } from "react"
import "./todo.css"
import { DeleteOutlined } from "@ant-design/icons"
import { EditOutlined } from "@ant-design/icons"
import { SendOutlined } from "@ant-design/icons"
import { RetweetOutlined  } from "@ant-design/icons"

import img from "./images/laptop.svg"
import swal from 'sweetalert';





function Todo() {

    const [task, setTask] = useState("")
    const [value, setValue] = useState()
    const [showUpdate, setShowUpdate] = useState("show")
    const [data, setData] = useState([])

    const Totaltodo = () => {
        if (task === "") {
            swal("...Please fill out this field!...");
        }
        else {
        
                let obj = {
                    task: task
                }
                setData(data.concat([obj]))
                setTask("")

           
        }
    }



    const Ubtn = () => {
        data[value].task = task
        swal("Good job!", "Your Todo is Update!", "success");
        setTask("")

    }


    return (
        <>
            <div className="main">
                <div className="heading">

                    <img src={img} className="img" ></img>
                    <b class="heading__title">To-Do List</b>
                    {/* <h1 className='heading'>toDoApp;</h1> */}
                </div>

                <div className="input_box">
                    <input className='input' placeholder='Enter Your Todo' type="text" value={task} onChange={(e) => { setTask(e.target.value) }} />

                    {
                        showUpdate === "show"
                            ?
                            <button className='btn' onClick={Totaltodo}><span><SendOutlined /></span></button>
                            :
                            <button className='btn' onClick={Ubtn}><RetweetOutlined /></button>
                           
                    }



                </div>
                
{/* {
    task === ""
    ?
    null
    : */}
                    <table>
                    <tr>
                        <th></th>
                    </tr>
                    {
                        data.map((value, i) => {
                            return (
                                <div className="data">
                                    <div className="tr">
                                        <tr >
                                            <td className="td">{value.task}</td>


                                            <div className="buttons">

                                                <span className="edit" onClick={() => {
                                                   let edit = data[i].task
                                                    setTask(edit)
                                                    setValue(i)
                                                    setShowUpdate("hide")
                                                }} >{< EditOutlined />}</span>


                                                <span className="delete" onClick={() => {
                                                    let deleteone = data.filter((value, index) => {
                                                        return i != index
                                                    })
                                                    setData(deleteone)
                                                    setShowUpdate("show")

                                                }}>  <DeleteOutlined /> </span>

                                            </div>
                                        </tr>
                                    </div>
                                    

                                </div>
                            )
                        })
                    }
                </table> </div>
{/* } */}


        </>
    )
}

export default Todo



