let React = require('react');
let ReactDOM = require('react-dom');
let TableView = require('./data-table-view.jsx');

let Main = React.createClass({
  render() {
    let tableRows = [
      ["Name", "Age", "Salary"],
      ["John", 35, "20,000"],
      ["Anna", 44, "40,000"],
      ["Dan", 32, "30,000"],
      ["Herry", 30, "40,000"]
    ];

    return (
      <div >
        <h1>React Table View</h1>
        <TableView
          title={"The Table"}
          rows={tableRows}
        />
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("main"));
