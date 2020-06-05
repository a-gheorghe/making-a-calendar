import React from "react";
import "./styles.css";
import { List } from "react-virtualized";
import moment from "moment";

export const App = () => {
  const list = [];
  const weekdayshort = moment.weekdaysShort();

  let weekdayshortname = weekdayshort.map(day => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    );
  });

  for (let i = 0; i < 100; i++) {
    list.push(i);
  }

  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style // Style object to be applied to row (to position it)
  }) {
    return (
      <div key={key} style={style} className="month">
        <div className="week">
          <div className="day">{list[index]}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="calendar">
        <div className="day-headings">{weekdayshortname} </div>
        <List
          width={400}
          height={600}
          rowCount={list.length}
          rowHeight={20}
          rowRenderer={rowRenderer}
        />
      </div>
    </div>
  );
};
