import React from 'react';
import ReactDOM from 'react-dom';

const fetchBtn = document.getElementById('fetch-btn')

var tuna = require('./controller.js');

fetchBtn.addEventListener('click', (event) => {
  console.log("Button clicked!");
  tuna.get_all_tuna();
})

class Table extends React.Component {
  render() {
    const rows = [];
    this.props.rows.forEach((row) => {
      rows.push(
        <tr>
          <td> photo.css.{row} </td>
          <td> CSS </td>
          <td> 27K </td>
        </tr>
      );
    });
    return (
      <table>
      <thead>
          <tr>
            <th>Name</th>
            <th>Kind</th>
            <th>File Size</th>
          </tr>
      </thead>
      <tbody>{rows}</tbody>
      </table>
    );
  }
}

const rows = [1,2,3,4,5,6,7]
ReactDOM.render(
  <Table rows = {rows}/>,
  document.getElementById('data')
)