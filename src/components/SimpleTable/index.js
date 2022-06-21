import React from "react";
import PropTypes from "prop-types";

export const SimpleTable = ({ columns, rows, onRowClick }) => {
  const handleRowClick = row => e => {
    if (onRowClick) onRowClick(row);
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th key={i} style={{ width: column.width || "auto" }}>
              {column.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          rows.map((row, i) => (
            <tr key={i} onClick={handleRowClick(row)}>
              {columns.map((column, j) => (
                <td key={j}>
                  {column.formatter
                    ? column.formatter(row, row[column.key])
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-center" colSpan={columns.length}>
              No Record Found!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

SimpleTable.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  onRowClick: PropTypes.func,
};
