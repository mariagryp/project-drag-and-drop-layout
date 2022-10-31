import { useState } from "react";
import data from "../data/data.json";

import { AiFillHeart } from "react-icons/ai";
import { orderBy, range } from "lodash";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ItemsData = () => {
  const [itemlist, setItemlist] = useState(data);

  const listRenderer = orderBy(itemlist, "position").map((item) => (
    <Draggable
      draggableId={item.id.toString()}
      index={item.position}
      key={item.id}
    >
      {(provided) => (
        <div
          className="list-container__item"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <a {...provided.dragHandleProps} className="handle">
            <AiFillHeart />
          </a>
          <div>
            <img src={item.thumb} alt="" className="image" />
          </div>
          <div>
            {item.position} - {item.title}
          </div>
          <div>{item.artist}</div>
          <div>{item.released}</div>
        </div>
      )}
    </Draggable>
  ));

  const onDragEnd = (result) => {
    const { destination, source } = result;
    //make sure there is a change a destination and a source
    if (!destination || !source) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    //x access to the initial position
    //x access to where it was dropped

    //check the direction greater than or less than
    const directionOfDrag =
      destination.index > source.index ? "GREATER" : "LESS";

    // find the affected range of other songs
    let affectedRange;

    if (directionOfDrag === "GREATER") {
      affectedRange = range(source.index, destination.index + 1);
    } else {
      affectedRange = range(destination.index, source.index + 1);
    }

    //if songs are affected increment or decrement based on greater/less value
    // update positions
    const reOrderedList = itemlist.map((item) => {
      if (item.id === parseInt(result.draggableId)) {
        item.position = destination.index;
        return item;
      } else if (affectedRange.includes(item.position)) {
        if (directionOfDrag === "GREATER") {
          item.position = item.position - 1;
          return item;
        } else if (directionOfDrag === "LESS") {
          item.position = item.position + 1;
          return item;
        }
      } else {
        return item;
      }
      return null;
    });
    // update playlist state
    setItemlist(reOrderedList);
  };

  return (
    <div className=" list-container">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="ITEMLIST">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {listRenderer}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>

    /* #BDD1DA #DBD7D1<div>
      {ItemsData &&
        ItemsData.map((item) => {
          return (
            <div key={item.id}>
              <a className="handle">
                <VscThreeBars />
              </a>
              <img src={item.thumb} alt="" className="image" />
              {item.title}
            </div>
          );
        })}
    </div> */
  );
};

export default ItemsData;
