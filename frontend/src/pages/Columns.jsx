import React from 'react';
import Item from "./Item";
import {Droppable} from "react-beautiful-dnd";
import styled from "styled-components";

const StyledColumn = styled.div`
  min-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 5px;
`

const StyledDropArea = styled.div`
    padding: 15px;
    flex-grow: 1;
  min-height: 100%;
    ${({isDraggingOver}) => isDraggingOver && "background: #ccc;"}
`

const Columns = ({column}) => {
    const { columnName, id, data } = column
    return (
        <StyledColumn>
            <div> { columnName } </div>
            <Droppable droppableId={id}>
                {
                    (provided, snapshot) => <StyledDropArea
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                        {...provided.droppableProps}
                    >
                        {
                            data.map((data, index) => {
                                return <Item key={id + "_" + data.id} data={data} index={index}/>
                            })
                        }
                        {provided.placeholder}
                    </StyledDropArea>
                }
            </Droppable>
        </StyledColumn>
    );
};

export default Columns;
