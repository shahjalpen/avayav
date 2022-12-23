import React from "react";

import { AvatarProps } from "./Avatar.types";

import "./Avatar.css";

const Avatar: React.FC<AvatarProps> = ({ text }) => (
    <div data-testid="Avatar" className="button">{text}</div>
);

export default Avatar;

