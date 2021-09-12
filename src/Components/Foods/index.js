import React from "react";
export default function Foods(props) {
  const { food, foodChef, foodPromo } = props;
  return (
    <div>
      <h2>Snack</h2>
      <p className="notes">
        Chef: {foodChef}<br/>
        This promo is valid untill: {foodPromo}
      </p>
      {food.map((food) => (
        <div className="menu">
          <div className="nama">
            <table>
              <tr>
                <td className="cell">{food.name}</td>
                <td className="cell">{food.option}</td>
                <td className="cell">{food.price}</td>
              </tr>
            </table>
          </div>
        </div>
      ))}
      <div className="space"></div>
    </div>
  );
}
