import React from "react";
export default function Menus(props) {
  const { menu, menuChef, menuPromo } = props;
  return (
    <div>
      <h2>Drinks</h2>
      <p className="notes">
        Head Chef: {menuChef}<br/>
        This promo is valid untill: {menuPromo}
      </p>
      {menu.map((menu) => (
        <div className="menu">
          <div className="nama">
            <table>
              <tr>
                <td className="cell">{menu.name}</td>
                <td className="cell">{menu.option}</td>
                <td className="cell">{menu.price}</td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
