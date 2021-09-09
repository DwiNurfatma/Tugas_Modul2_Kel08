import React from "react";
export default function Foods(props) {
  const { food } = props;
  return (
    <div>
      <h2>Snack</h2>
      {food.map((food) => (
        <div className="menu">
          <div className="nama">
            <table>
              <tr>
                <td>{food.name}</td>
                <td>{food.option}</td>
                <td>{food.price}</td>
              </tr>
            </table>
          </div>
        </div>
      ))}
      <div className="space"></div>
    </div>
  );
}
