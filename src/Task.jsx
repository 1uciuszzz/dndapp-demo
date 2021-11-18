import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 2px solid;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.isDragging ? "yellow" : "white")};
`;

const ShowId = styled.small`
  margin: 0;
`;

class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <ShowId>{"[id: " + this.props.task.id + "]"}</ShowId>
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Task;
