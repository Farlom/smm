import React, {useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Columns from "./Columns";


const Main = () => {

    const data = [
        {
            columnName: "To do",
            id: "test-1",
            data: [
                {
                    name: "Eliseev Ivan",
                    age: 22,
                    id: "1"
                },
                {
                    name: "Keril",
                    age: 21,
                    id: "2"
                },
                {
                    name: "Jordan",
                    age: 23,
                    id: "3"
                },
                {
                    name: "Tolik ebolik",
                    age: 0,
                    id: "4"
                }
            ]
        },
        {
            columnName: "Progress",
            id: "test-2",
            data: []
        },
        {
            columnName: "Done",
            id: "test-3",
            data: []
        },
    ]

    const [state, setState] = useState(data)

    const onDragEnd = (result) => {
        console.log(result, " res")
        const {destination, source, draggableId} = result

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const currentColumn = state.find(item => item.id === source.droppableId)
        const nextColumn = state.find(item => item.id === destination.droppableId)

        const removed = currentColumn.data.splice(source.index, 1)
        nextColumn.data.splice(destination.index, 0, ...removed)

        const newState = state.map((column) => {
            if (column.id === currentColumn.id) {
                return currentColumn
            }
            if (column.id === nextColumn.id) {
                return nextColumn
            }
            return column
        })

    }

    return (
        <div style={{display: "flex"}}>
            <DragDropContext onDragEnd={onDragEnd}>
                {
                    state.map(column => <Columns key={column.id} column={column} />)
                }
            </DragDropContext>
        </div>
    );
};

export default Main;
