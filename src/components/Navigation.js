import { useState, useEffect } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { VscListFilter } from "react-icons/vsc";

import GridLayout from "./../views/GridLayout";
import DndLayout from "./../views/DndLayout";

import data from "../data/data.json";
import { orderBy } from "lodash";
import Select from "react-select";

const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
];  

const Navigation = () => {
  const history = useHistory();
  const { itemId } = useParams();
  const [viewToShow, setViewToShow] = useState(null);
  const [sortFilter, setSortFilter] = useState(null);
  const [itemlist, setItemlist] = useState(data);
  

  useEffect(() => {
    if (itemId) {
      setViewToShow(itemId);
    } else {
      /* setViewToShow("grid") */
      history.push("/row");
    }
  }, [itemId,history]);

  useEffect(() => {
    if (sortFilter?.value === "newest") {
      setItemlist(orderBy(itemlist, "released", "desc"));
    } else if (sortFilter?.value === "oldest") {
      setItemlist(orderBy(itemlist, "released", "asc"));
    } else {
      setItemlist(orderBy(itemlist, "position"));
    }

  }, [sortFilter]);



  const listFilters = (
    <div className="layout-filter">
      {viewToShow === "grid" && 
      <Select
          options={SORT_OPTIONS}
          value={sortFilter}
          onChange={setSortFilter}
          placeholder="Sort by released date"
          isClearable
        />}
      
      <NavLink
        to="/row"
        className="layout-filter--default"
        activeClassName="layout-filter--active"
      >
        <VscListFilter />
      </NavLink>

      <NavLink
        to="/grid"
        className="layout-filter--default"
        activeClassName="layout-filter--active"
      >
        <BsFillGrid3X3GapFill />
      </NavLink>
    </div>
  );

  return (
    <div>
      {listFilters}
      {viewToShow === "grid" && <GridLayout itemlist={itemlist} />}
      {viewToShow === "row" && <DndLayout itemlist={itemlist} />}
      {/*  <nav className="layout-filter">
        <NavLink
          to="/grid"
          className="layout-filter--default"
          activeClassName="layout-filter--active"
        >
          <BsFillGrid3X3GapFill />
        </NavLink>
        <NavLink
          to="/row"
          className="layout-filter--default"
          activeClassName="layout-filter--active"
        >
          <VscListFilter />
        </NavLink>
      </nav>  */}
    </div>
  );
};
export default Navigation;
