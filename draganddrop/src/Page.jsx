import React, { useRef, useState } from 'react';

function Page() {
    const [people, setPeople] = useState([
        { id: 1, name: "abc", content: "hellow1" },
        { id: 2, name: "def", content: "hellow2" },
        { id: 3, name: "ghi", content: "hellow3" },
        { id: 4, name: "jkl", content: "hellow4" }
    ]);

    const dragPerson = useRef(null);
    const draggedOverPerson = useRef(null);

    const handleSort = () => {
        if (dragPerson.current === null || draggedOverPerson.current === null) {
            return;
        }

        const peopleClone = [...people];
        const temp = peopleClone[dragPerson.current];
        peopleClone[dragPerson.current] = peopleClone[draggedOverPerson.current];
        peopleClone[draggedOverPerson.current] = temp;

        setPeople(peopleClone);

        dragPerson.current = null;
        draggedOverPerson.current = null;
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>List</h1>
            {people.map((person, index) => (
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
                    onDragStart={() => { dragPerson.current = index; }}
                    onDragEnter={() => { draggedOverPerson.current = index; }}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                >
                    {person.name}
                </div>
            ))}
        </div>
    );
}

export default Page;
