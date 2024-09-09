import React from "react";

const Table = ({ columns, dataSource }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {columns?.length > 0 ? (
              columns.map((obj, idx) => (
                <th className={obj?.align ? `text-${obj.align}` : ""} key={idx}>
                  {obj.title}
                </th>
              ))
            ) : (
              <th></th>
            )}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {dataSource && dataSource?.length > 0 ? (
            dataSource.map((val, index) => (
              <tr key={index}>
                {columns.map((col, colIndex) => (
                  <td
                    className={col?.align ? `text-${col.align}` : ""}
                    key={colIndex}
                  >
                    {col.render
                      ? col.render(val[col.dataIndex], val, index)
                      : val[col.dataIndex]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
