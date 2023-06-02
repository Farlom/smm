import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 5px;
  background: white;
  margin-bottom: 3px;
  
  ${({isDragging}) => isDragging && "background: blue;"}
  
`

const Handle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background: red;
   margin-right: 15px;
`

const Item = ({data, index}) => {
    const {id, name, age} = data
    return (
        <Draggable key={id} draggableId={id} index={index}>
            {
                (provided, snapshot) => (
                    <StyledItem
                        draggableid={id}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        ref={provided.innerRef}
                    >
                        <div style={{opacity: 0.4}}>#{id}</div>
                        <span> я {name}, </span>
                        <span> мне {age} лет </span>
                    </StyledItem>
                )
            }
        </Draggable>
    );
};

export default Item;
