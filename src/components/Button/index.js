import React from "react";

import "./Button.css";

const Button = ({ content, onButtonClick, type }) => {
	return (
		<div
			className={`Button ${content === "0" ? "zero" : ""} ${type || ""}`}
			onClick={onButtonClick(content)}
			tabIndex="0"
		>
			{content}
		</div>
	);
};

export default Button;
