import React, { useEffect, useState, useContext, useMemo, useCallback } from "react";
import defaultState, { defaultData } from "./defaultState";
import { CONTEXT } from "@constants/config";
import { hasWindow } from "../../utils";

const StorageContext = React.createContext(defaultState);

const StorageProvider = ({ children }) => {
	// Estados del contexto
	const [state, setState] = useState(defaultState);

	// Función para actualizar un estado específico, envuelta en useCallback
	const updateStore = useCallback((key, value) => {
		setState((prevState) => ({ ...prevState, [key]: value }));
	}, []);

	// Handlers envueltos en useCallback
	const setRoute = useCallback((route) => {
		updateStore("route", route);
	}, [updateStore]);
	const setIsLoading = useCallback((isLoading) => {
		updateStore("isLoading", isLoading);
	}, [updateStore]);
	const setError = useCallback((error) => {
		updateStore("error", error);
	}, [updateStore]);
	const setFingerprint = useCallback((fingerprint) => {
		updateStore("fingerprint", fingerprint);
	}, [updateStore]);
	const setAuth = useCallback((auth) => {
		updateStore("auth", auth);
	}, [updateStore]);
	const setUTM = useCallback((utm) => {
		updateStore("utm", utm);
	}, [updateStore]);

	const setModal = useCallback((modal) => {
		updateStore("modal", modal);
	}, [updateStore]);
	const setSchema = useCallback((schema) => {
		updateStore("schema", schema);
	}, [updateStore]);

	// Función para limpiar el almacenamiento
	const clearStore = () => setState(defaultData);

	// Memorizar el `value` del contexto
	const contextValue = useMemo(
		() => ({
			...state,
			updateStore,
			clearStore,
			setRoute,
			setError,
			setFingerprint,
			setIsLoading,
			setAuth,
			setUTM,
			setModal,
			setSchema,
		}),
		[setAuth, setError, setFingerprint, setIsLoading, setModal, setRoute, setSchema, setUTM, state, updateStore],
	);

	// Guardar en sessionStorage cuando cambia el estado
	useEffect(() => {
		if (hasWindow()) {
			sessionStorage.setItem(CONTEXT, JSON.stringify(state));
		}
	}, [state]);

	// Auto-limpiar notificaciones después de 5 segundos
	useEffect(() => {
		if (state.notify?.show) {
			const timer = setTimeout(
				() => updateStore("notify", defaultData.notify),
				5000,
			);
			return () => clearTimeout(timer);
		}
	}, [state.notify, updateStore]);

	return (
		<StorageContext.Provider value={contextValue}>
			{children}
		</StorageContext.Provider>
	);
};

// Hook personalizado para usar el contexto
const useStore = () => useContext(StorageContext);

export { StorageProvider, useStore };
