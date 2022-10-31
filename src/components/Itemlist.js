import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import data from "../data/data.json";

import Navigation from './Navigation';

/* const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
]; */

function Itemlist() {
  const history = useHistory();
  const { itemId } = useParams();
  const [itemlist, setItemlist] = useState(data);
  const [viewToShow, setViewToShow] = useState(null);

  /* useEffect(() => {
    if (itemId) {
      setViewToShow(itemId);
    } else {
      /* setViewToShow("grid") 
      history.push("/row");
    }
  }, [history, itemId]); */

  /* useEffect(() => {
    if (sortFilter?.value === "newest") {
      setItemlist(orderBy(itemlist, "released", "desc"));
    } else if (sortFilter?.value === "oldest") {
      setItemlist(orderBy(itemlist, "released", "asc"));
    } else {
      setItemlist(orderBy(itemlist, "position"));
    }
  }, [sortFilter]);
 */
  /* console.log(params.itemId); */

  //list filter
  /* const listFilters = ( 
    <div className="layout-filter">
      <a onClick={() => setViewToShow("row")}>
      <VscListFilter />
      </a>

      <a onClick={() => setViewToShow("grid")}>
      <BsFillGrid3X3GapFill />
      </a>
    </div>
   ) */

  return (
    <div>
     {/*  {viewToShow === "grid" && (
        <Select
          options={SORT_OPTIONS}
          value={sortFilter}
          onChange={setSortFilter}
          placeholder="Sort by released date"
          isClearable
        />
      )}
      {viewToShow === "row" && (
        <Select
          options={SORT_OPTIONS}
          value={sortFilter}
          onChange={setSortFilter}
          placeholder="Sort by released date"
          isClearable
        />
      )} */}  
      {/*  {listFilters} */}
      {/* <p>{itemId}</p> */}

      {/* //a ternary operator
    /* const someValue = name === "row" ? "do one thing" : null;  */}
      <Navigation/>
      {/* {viewToShow === "grid" && <GridLayout itemlist={itemlist} />}
      {viewToShow === "row" && <DndLayout itemlist={itemlist} />} */}
    </div>
  );
}

export default Itemlist;
