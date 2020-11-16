import React from "react";
import "./Easyflex.css";

export const getPropsClassName = (className?: string) => {
  if (className) return className;
  else return "defaultFlexContainerSize";
};

export const getXaxisClassName = (isColumn?: boolean, xaxis?: Axis) => {
  return isColumn
    ? `easyflex-column column-easyflex-xaxis-${xaxis || "center"} `
    : ` row-easyflex-xaxis-${xaxis || "center"} `;
};

export const getYaxisClassName = (isColumn?: boolean, yaxis?: Axis) => {
  return isColumn
    ? `easyflex-column column-easyflex-yaxis-${yaxis || "center"} `
    : ` row-easyflex-yaxis-${yaxis || "center"} `;
};

/*

||
||
||
|| Y AXIS
||
||
||

          X AXIS
==========================
*/

type Axis =
  | "left"
  | "center"
  | "right"
  | "space1"
  | "space2"
  | "bottom"
  | "top";

interface Props {
  id?: string;
  children: JSX.Element;
  wrap?: boolean;
  xaxis: Axis;
  yaxis: Axis;
  column?: boolean;
  className?: string | undefined;
  style?: object;
}

/**
 * 
 * @example
    <Easyflex
        id="flex1"
        className="customCSS"
        xaxis="center"
        yaxis="center"
        column={true}
        style={ {background: "black", fontSize: "1em"} }
    >
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </Easyflex>
 * 
 * @example
 * 
 * 
 * ||
 * ||
 * ||
 * || Y AXIS (vertical)
 * ||
 * ||
 * ||
 *
 *     X AXIS (horizontal)
 * ==========================
 * @param {JSX} JSX - JSX: Children
 * @param {string} id - String: Sets the div id
 * @param {wrap} wrap - Boolean: true/false
 * @param {string} xaxis - String: left, center, right, space1, space2
 * @param {string} yaxis - String: top, center, bottom, stretch
 * @param {boolean} column - Boolean: true/false
 * @param {string} className - String: Name of a custom CSS class
 * @param {object} style - Object: for custom CSS inline styling
 */
export const Easyflex = (props: Props): JSX.Element => {
  const { children, wrap, xaxis, yaxis, column, className, id, style } = props;

  const classNames = `easyflex-container ${getPropsClassName(
    className
  )} ${getXaxisClassName(column, xaxis)} ${getYaxisClassName(column, yaxis)}`;

  return (
    <div style={style} id={id} className={classNames}>
      {children}
    </div>
  );
};
