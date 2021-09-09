import React from "react";
export default function Menus(props) {
  const { menu } = props;
  return (
    <div>
      <h2>Drinks</h2>
      {menu.map((menu) => (
        <div className="menu">
          <div className="nama">
            <table>
              <tr>
                <td>{menu.name}</td>
                <td>{menu.option}</td>
                <td>{menu.price}</td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
