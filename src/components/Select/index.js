import React, { useState, useEffect } from "react";
import {
	WrappInput,
	Select,
	Label,
	ErrorMessage,
	WarningMessage,
	IconFinger,
} from "./styles";

import IconArrow from "@assets/images/icons/adown.svg";

import { Svg } from "@components";

import fingerIcon from "@assets/images/icons/fingerprint.svg";
import keyIcon from "@assets/images/icons/key.svg";
import rollback from "@assets/images/icons/rollback.svg";

const change = (e) => {
	return e.target.value;
};

const Option = ({ key, name, value, disabled, exclusion = false }) => {
	console.log("exclusion: ", exclusion);
	if (exclusion) return null;
	return (
		<option key={key} value={value} disabled={disabled}>
			{name}
			{disabled ? " (disabled)" : ""}
		</option>
	);
};

const customSelect = ({
	options,
	id,
	defaultValue,
	otherLess,
	excludes,
	exclusion = "default",
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
	error = "",
	warning = "",
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
	...props
}) => {
	const [exclusions, setExclusions] = useState([]);

	const [hasFocus, setHasFocus] = useState(false);
	const [localError, setLocalError] = useState("");
	const [localWarning, setLocalWarning] = useState("");

	useEffect(() => {
		if (excludes) {
			let idsExcludes = [];
			idsExcludes = excludes.map((item) => item?.id).filter(Boolean);
			!!idsExcludes?.length && setExclusions(idsExcludes);
			console.log("exclusions ids :: ", idsExcludes);
		}
	}, []);

	const handleFocus = () => {
		onFocus && onFocus();
		setHasFocus(true);
	};

	return (
		<WrappInput
			{...props}
			hasFocus={hasFocus}
			small={!placeholder}
			hasError={error.length || localError.length}
			hasWarning={warning.length || localWarning.length}
			disabled={disabled}
		>
			<Select
				id={id}
				value={value}
				disabled={disabled}
				required={hasRequired}
				onFocus={() => handleFocus()}
				right={hasRequired ? true : false}
				onChange={(e) => getValue(change(e))}
				onBlur={() => setHasFocus(false)}
				defaultValue={defaultValue ? defaultValue : ""}
			>
				<option selected disabled value=""></option>
				{options &&
					options.map((option, key) => (
						<Option
							key={key}
							value={option.id}
							name={option.name}
							exclusion={
								exclusion === "invert"
									? !exclusions.includes(option.id)
									: false
							}
							disabled={
								exclusion === "invert"
									? !exclusions.includes(option.id)
									: exclusions.includes(option.id)
							}
						/>
					))}
				{!otherLess && exclusion !== "invert" && (
					<option value="9999">Other</option>
				)}
			</Select>

			<IconFinger>
				<Svg
					style={{ PointerEvents: "none" }}
					icon={IconArrow}
					wsvg={26}
				/>
			</IconFinger>
			{placeholder && (
				<Label hasFocus={hasFocus || !!value} disabled={disabled}>
					{placeholder}
				</Label>
			)}
			{hasRequired && (
				<Label hasFocus={true} disabled={disabled} right>
					Required
				</Label>
			)}
			{error && <ErrorMessage>{error}</ErrorMessage>}
			{warning && <WarningMessage>{warning}</WarningMessage>}
			{localError && <ErrorMessage>{localError}</ErrorMessage>}
			{localWarning && <WarningMessage>{localWarning}</WarningMessage>}
		</WrappInput>
	);
};

export default customSelect;
