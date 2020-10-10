import React from "react";

/**
 *
 * @param {JSX} JSX - JSX flexItem
 * @param {wrap} wrap - boolean
 * @param {string} xaxis - left, center, right, space1, space2
 * @param {string} yaxis - top, center, bottom, stretch
 * @param {boolean} column - top, center, bottom, stretch
 */
export const FlexContainer = (props) => {
  console.log(props);
  const { children, wrap, xaxis, yaxis, column, className } = props;

  let isColumn = false;
  if (typeof column === "boolean" && column === true) isColumn = true;

  const easyflex_x_axis = isColumn
    ? `easyflex-column column-easyflex-xaxis-${xaxis} `
    : ` row-easyflex-xaxis-${xaxis} `;
  const easyflex_y_axis = isColumn
    ? `easyflex-column column-easyflex-yaxis-${yaxis} `
    : ` row-easyflex-yaxis-${yaxis} `;

  let classNames = className
    ? `easyflex-container ${className} ${easyflex_x_axis} ${easyflex_y_axis}`
    : `${easyflex_x_axis} ${easyflex_y_axis}`;

  return <div className={`${classNames}`}>{children}</div>;
};

export const FlexItem = (props) => {
  const { children } = props;
  return <>{children}</>;
};
