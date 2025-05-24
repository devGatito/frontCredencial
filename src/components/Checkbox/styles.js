import styled, { css } from "styled-components";

const Check = styled.input`
	display: block;
	height: 0px;
	margin: 0;
	opacity: 0;
	width: 0px;

	&:checked ~ #checked {
		display: inline-flex;
	}
	&:checked ~ #empty {
		display: none;
	}

	&:not(:checked) ~ #checked {
		display: none;
	}

	&:not(:checked) ~ #empty {
		display: inline-flex;
	}
`;

const WrapCheck = styled.span`
	display: flex;
	justify-content: start;
	align-items: center;
	width: 100%;

	label {
		text-decoration: ${({disabled}) => (disabled ? "line-through" : "none")};
		cursor: ${({disabled}) => (disabled ? "not-allowed" : "pointer")};
		color: ${({disabled}) => (disabled? "#bbb" : "black")};
	}
	
`;

const Label = styled.label`
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	font-size: 14px;
`;

export { Label, Check, WrapCheck };
