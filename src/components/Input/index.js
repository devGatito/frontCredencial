import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import {
	WrappInput,
	ItemInput,
	Label,
	ErrorMessage,
	WarningMessage,
	IconFinger,
	Label2,
} from "./styles";
import { REGEX } from "@constants";

import { Svg } from "@components";
import { normalize } from "@utils";

import fingerIcon from "@assets/images/icons/fingerprint.svg";
import keyIcon from "@assets/images/icons/key.svg";
import rollback from "@assets/images/icons/rollback.svg";
import calendar from "@assets/images/icons/calendar.svg";
import { randomKey, slugify } from "@src/utils";

const Input = ({
	isSlug,
	placeholder,
	type,
	getValue,
	mask,
	value,
	forwardRef,
	onKeyDown,
	onKeyUp,
	onChange,
	onBlur,
	onFocus,
	onCopy,
	onPaste,
	error,
	warning,
	disabled,
	maxLength,
	isNumber,
	scapeCharacters,
	onlyCharaters,
	onlyAlpha,
	normalizer,
	isCurp,
	onlyNL,
	onlyPositiveNumbers,
	readonly,
	capitalize,
	showCalendar,
	hasRequired,
	align,
	styles = {},
	...props
}) => {
	const componentId = randomKey(5);
	const [hasFocus, setHasFocus] = useState(false);
	const [localError, setLocalError] = useState("");
	const [localWarning, setLocalWarning] = useState("");
	const [showPasswd, setShowPasswd] = useState(false);
	const { emailRgx, curpRgx, specialChars, onlyLetterNumbers, onlySlug } =
		REGEX;

	const handleChange = (e) => {
		const { type } = e.target;
		let { value } = e.target;

		if (onlyAlpha) {
			value = value.replace(
				/[0-9$&\\+:·,.;=¬?´@¿¡ç#|'"/`|°¨<>_^*()%![\]}+~{-]/g,
				"",
			);
		}

		if (scapeCharacters) {
			value = value.replace(specialChars, "");
		}

		if (onlyCharaters) {
			//permite guion
			value = value.replace(
				/[$&\\+:·,;=¬?´@¿¡ç|'"/`|°¨<>_^*()%![\]}+~{]/g,
				"",
			);
		}

		if (onlyNL) {
			value = value.replace(onlyLetterNumbers, "");
		}

		if (isSlug) {
			value = value.replace(onlySlug, "").replace(/ /g, "-");
		}

		if (onlyPositiveNumbers) {
			const valid = /^[1-9]$|^[1-9][0-9]$|^(100)$/.test(value);
			if (!valid) value = value.slice(0, -1);
		}

		if (type === "email") {
			const valid = emailRgx.test(value);
			setLocalError(
				valid || value.length === 0 ? "" : "Formato no válido",
			);
		}

		if (isCurp) {
			const valid = curpRgx.test(value);
			setLocalError(valid || value.length === 0 ? "" : "Curp no válido");
		}

		if (capitalize) {
			value = value
				.toLowerCase()
				.replace(/\w/, (firstLetter) => firstLetter.toUpperCase());
		}

		if (normalizer) {
			value = normalize(value);
		}

		onChange && onChange(value);
		if (getValue) {
			maxLength
				? getValue(
						value.length > maxLength
							? value.slice(0, maxLength).trimStart()
							: value.trimStart(),
					)
				: getValue(value.trimStart());
		}
	};

	const handleBlur = ({ value }) => {
		getValue && getValue(value.trimStart().trim());
		onBlur && onBlur();
		setHasFocus(false);
	};

	const handleFocus = () => {
		onFocus && onFocus();
		setHasFocus(true);
	};

	const handleCopy = (e) => {
		if (onCopy) e.preventDefault();
	};
	const handlePaste = (e) => {
		if (onPaste) e.preventDefault();
	};

	return (
		<WrappInput
			{...props}
			hasFocus={hasFocus}
			small={!placeholder}
			hasError={error.length || localError.length}
			hasWarning={warning.length || localWarning.length}
			disabled={disabled}
			{...styles}
		>
			<ItemInput
				readonly={readonly}
				onFocus={() => handleFocus()}
				onBlur={({ target }) => handleBlur(target)}
				value={value}
				ref={forwardRef}
				onChange={handleChange}
				onKeyDown={onKeyDown}
				onKeyUp={onKeyUp}
				onPaste={handlePaste}
				onCopy={handleCopy}
				disabled={disabled}
				maxLength={maxLength}
				align={align}
				type={
					isNumber
						? "number"
						: type === "password"
							? showPasswd
								? "text"
								: "password"
							: type || "text"
				}
				min={isNumber ? "0" : null}
				max={isNumber ? "9" : null}
				autoComplete="off"
				id={slugify(placeholder)+componentId}
				name={slugify(placeholder)+componentId}
			/>
			{type === "password" && (
				<IconFinger className="actionButton">
					<Svg
						onClick={() => setShowPasswd(!showPasswd)}
						icon={!showPasswd ? fingerIcon : keyIcon}
						wsvg={22}
					/>
				</IconFinger>
			)}

			{!!value && (
				<IconFinger
					className="actionButton"
					style={{
						right: ["password", "calendar"].includes(type)
							? "2.5rem"
							: "0.5rem",
					}}
				>
					<Svg
						onClick={() => getValue("")}
						icon={rollback}
						wsvg={22}
					/>
				</IconFinger>
			)}
			{placeholder && (
				<Label
					htmlFor={slugify(placeholder)+componentId}
					hasFocus={hasFocus || !!value}
					disabled={disabled}
				>
					{placeholder}
				</Label>
			)}
			{hasRequired && (
				<Label2 hasFocus={true} disabled={disabled} right>
					Required
				</Label2>
			)}
			{error && <ErrorMessage>{error}</ErrorMessage>}
			{warning && <WarningMessage>{warning}</WarningMessage>}
			{localError && <ErrorMessage>{localError}</ErrorMessage>}
			{localWarning && <WarningMessage>{localWarning}</WarningMessage>}
		</WrappInput>
	);
};

Input.defaultProps = {
	error: "",
	warning: "",
};

Input.propTypes = {
	placeholder: PropTypes.string,
	getValue: PropTypes.func.isRequired,
	mask: PropTypes.string,
	value: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	forwardRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.any }),
	]),
	onKeyDown: PropTypes.func,
	onKeyUp: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	error: PropTypes.string,
	warning: PropTypes.string,
};

export default Input;
