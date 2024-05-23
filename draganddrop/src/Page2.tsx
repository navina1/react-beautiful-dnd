import React from 'react'
import { useRef, useState } from 'react'
function Page2() {
    const [people,setpeople]=useState([
        {id:1,name:"abc",content:"hellow1"},
        {id:2,name:"def",content:"hellow2"},
        {id:3,name:"ghi",content:"hellow3"},
        {id:4,name:"jkl",content:"hellow4"}
    ]);
    const dragPerson=useRef<number>(0);
    const draggedOverPerson=useRef<Number>(0);
    function handleSort(){
        const peopleclone=[...people];
        const temp=peopleclone[dragPerson.current]
        peopleclone[dragPerson.current]=peopleclone[draggedOverPerson.current]
        peopleclone[draggedOverPerson.current]=temp
        setpeople(peopleclone)
    }
  return (
    <div style={{"textAlign":"center"}}>
        <h1>List</h1>
        {people.map((person,index)=>(
            <div key={person.id}
            style={{
                border: "1px solid black",
                backgroundColor: "#f0f0f0",
                padding: "10px",
                margin: "5px",
                borderRadius: "5px",
            }}
            draggable
            onDragStart={()=>{dragPerson.current=index}}
            onDragEnter={()=>{draggedOverPerson.current=index}}
            onDragEnd={()=>{handleSort}}
            onDragOver={(e)=>e.preventDefault()}
            >
                {person.name}
            </div>
        ))}
    </div>
  )
}

export default Page2