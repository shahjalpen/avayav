import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.css";

const Button: React.FC<ButtonProps> = ({ text }) => (
    <div data-testid="Button" className="button">{text}</div>
);

export default Button;

