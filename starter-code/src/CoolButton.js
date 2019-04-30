import React, { Component } from "react";

const bulmaClasses = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white"
};

class CoolButton extends Component {
  render() {
    const { children, className } = this.props;

    let classes =
      `button ${className} ` +
      Object.keys(this.props)
        .filter(el => el !== "className" && el !== "children")
        .map(el => bulmaClasses[el])
        .join(" ");

    const button = <button className={classes}>{children}</button>;
    return button;
  }
}

// class CoolButton extends Component {
//   render() {
//     const { children, className, isSmall, isDanger, isSuccess } = this.props;

//     let classes = `button ${className}`;

//     if (isSmall) classes += " is-small";
//     if (isDanger) classes += " is-danger";
//     if (isSuccess) classes += " is-success";

//     const button = <button className={classes}>{children}</button>;
//     return button;
//   }
// }

export default CoolButton;
