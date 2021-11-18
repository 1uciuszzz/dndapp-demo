import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  border: 2px solid;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  padding: 10px;
`;

const ShowId = styled.small`
  padding: 10px 10px 0px 10px;
  margin: 0;
`;

const TaskList = styled.div`
  padding: 10px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;

class Column extends React.Component {
  render() {
    return (
      <Container>
        <ShowId>{"[id: " + this.props.column.id + "]"}</ShowId>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default Column;
