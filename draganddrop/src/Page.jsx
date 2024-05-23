import React, { useRef, useState } from 'react';

function Page() {
    const [people1, setPeople1] = useState([
        { id: 1, name: "abc", content: "hellow1" },
        { id: 2, name: "def", content: "hellow2" },
        { id: 3, name: "ghi", content: "hellow3" },
        { id: 4, name: "jkl", content: "hellow4" }
    ]);

    const [people2, setPeople2] = useState([
        { id: 5, name: "mno", content: "world1" },
        { id: 6, name: "pqr", content: "world2" },
        { id: 7, name: "stu", content: "world3" },
        { id: 8, name: "vwx", content: "world4" }
    ]);

    const dragPerson = useRef(null);
    const draggedOverPerson = useRef(null);

    const handleOnDragOver = (e) => {
        e.preventDefault();
    };

    const handleOnDragStart = (e, person, listType) => {
        dragPerson.current = { person, listType };
    };

    const handleOnDrop = (e, targetListType) => {
        e.preventDefault();

        const droppedPerson = dragPerson.current.person;
        const sourceListType = dragPerson.current.listType;

        // Remove the dropped person from the source list
        if (sourceListType === "people1") {
            setPeople1((prevList) => prevList.filter((person) => person.id !== droppedPerson.id));
        } else if (sourceListType === "people2") {
            setPeople2((prevList) => prevList.filter((person) => person.id !== droppedPerson.id));
        }

        // Add the dropped person to the target list
        if (targetListType === "people1") {
            setPeople1((prevList) => [...prevList, droppedPerson]);
        } else if (targetListType === "people2") {
            setPeople2((prevList) => [...prevList, droppedPerson]);
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>List 1</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    border: "1px solid black",
                    padding: '10px'
                }}
                onDragOver={handleOnDragOver}
                onDrop={(e) => handleOnDrop(e, "people1")}
            >
                {people1.map((person) => (
                    <div
                        key={person.id}
                        style={{
                            border: "1px solid black",
                            backgroundColor: "#f0f0f0",
                            padding: "10px",
                            margin: "5px",
                            borderRadius: "5px",
                            cursor: "move"
                        }}
                        draggable
                        onDragStart={(e) => handleOnDragStart(e, person, "people1")}
                    >
                        {person.name}
                    </div>
                ))}
            </div>

            <h1>List 2</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    border: "1px solid black",
                    padding: '10px'
                }}
                onDragOver={handleOnDragOver}
                onDrop={(e) => handleOnDrop(e, "people2")}
            >
                {people2.map((person) => (
                    <div
                        key={person.id}
                        style={{
                            border: "1px solid black",
                            backgroundColor: "#f0f0f0",
                            padding: "10px",
                            margin: "5px",
                            borderRadius: "5px",
                            cursor: "move"
                        }}
                        draggable
                        onDragStart={(e) => handleOnDragStart(e, person, "people2")}
                    >
                        {person.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
