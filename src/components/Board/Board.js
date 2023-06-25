import React, { useState } from "react";
import "./Board.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Board = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id: "1",
      level: "Low",
      title: "BrainStorming",
      content:
        "Brainstorming brings team members' diverse experience into play.",
    },
    {
      id: "2",
      level: "High",
      title: "Research",
      content:
        "We don’t have any notice for you, till then you can share your thoughts with your peers.",
    },
  ]);

  const [inProgressItems, setInProgressItems] = useState([
    {
      id: "3",
      level: "Low",
      title: "Onboarding Illustrations",
      content:
        "Low fidelity wireframes include the most basic content and visuals.",
    },
    {
      id: "4",
      level: "Low",
      title: "Inboarding Illustrations",
      content:
        "User research helps you to create an optimal product for users.",
    },
  ]);

  const [doneItems, setDoneItems] = useState([
    {
      id: "5",
      level: "Completed",
      title: "Mobile App Design",
      content: "It just needs to adapt the UI from what you did before",
    },
    {
      id: "6",
      level: "Completed",
      title: "Design System",
      content:
        "Low fidelity wireframes include the most basic content and visuals.",
    },
  ]);

  const onDragEnd = (result) => {
    console.log(result);
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let add;
    let active = todoItems;
    let progress = inProgressItems;
    let done = doneItems;
    if (source.droppableId === "todo") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else if (source.droppableId === "inprogress") {
      add = progress[source.index];
      progress.splice(source.index, 1);
    } else {
      add = done[source.index];
      done.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "todo") {
      if (add.level === "Completed") {
        add.level = "High";
      }
      active.splice(destination.index, 0, add);
    } else if (destination.droppableId === "inprogress") {
      if (add.level === "Completed") {
        add.level = "Low";
      }
      progress.splice(destination.index, 0, add);
    } else {
      add.level = "Completed";
      done.splice(destination.index, 0, add);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        <Droppable droppableId="todo">
          {(provided, snapshot) => (
            <div
              className="column"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div className="heading1">
                <span className="dot1"></span>
                <h3>To Do</h3>
              </div>
              {todoItems.map((item, index) => (
                <Draggable draggableId={item.id} index={index} key={item.id}>
                  {(provided, snapshot) => (
                    <div
                      className="cards"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      index={index}
                    >
                      <div className="toplayer">
                        <p
                          className={`${
                            item.level === "Completed"
                              ? "levelDone"
                              : item.level === "High"
                              ? "levelHigh"
                              : "levelLow"
                          }`}
                        >
                          {item.level}
                        </p>
                        <span>...</span>
                      </div>
                      <p className="midlayer">{item.title}</p>
                      <p className="lastlayer">{item.content}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="inprogress">
          {(provided, snapshot) => (
            <div
              className="column"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div className="heading2">
                <span className="dot2"></span>
                <h3>On progress</h3>
              </div>
              {inProgressItems.map((item, index) => (
                <Draggable draggableId={item.id} index={index} key={item.id}>
                  {(provided, snapshot) => (
                    <div
                      className="cards"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      index={index}
                    >
                      <div className="toplayer">
                        <p
                          className={`${
                            item.level === "Completed"
                              ? "levelDone"
                              : item.level === "High"
                              ? "levelHigh"
                              : "levelLow"
                          }`}
                        >
                          {item.level}
                        </p>
                        <span>...</span>
                      </div>
                      <p className="midlayer">{item.title}</p>
                      <p className="lastlayer">{item.content}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="done">
          {(provided, snapshot) => (
            <div
              className="column"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div className="heading3">
                <span className="dot3"></span>
                <h3>Done</h3>
              </div>
              {doneItems.map((item, index) => (
                <Draggable draggableId={item.id} index={index} key={item.id}>
                  {(provided, snapshot) => (
                    <div
                      className="cards"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      index={index}
                    >
                      <div className="toplayer">
                        <p className="levelDone">Completed</p>
                        <span>...</span>
                      </div>
                      <p className="midlayer">{item.title}</p>
                      <p className="lastlayer">{item.content}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Board;
