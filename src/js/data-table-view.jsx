let React = require('react');

let DataTableView = React.createClass({

  render() {

    let eachRow = this.props.rows.map((item, i) => {
      let td = item.map((itm, j) => {
        return i===0 ? (<th key={"td"+j}>{itm}</th>) : (<td key={"td"+j}>{itm}</td>);
      })
      return (<tr key={"tr"+i}>{td}</tr>)
    });

    return (
      <div className="react-table-view">
        <h2>{this.props.title}</h2>
        <table width={this.props.width}>
          <tbody>{eachRow}</tbody>
        </table>
      </div>
    )
  }

});

module.exports = DataTableView;
