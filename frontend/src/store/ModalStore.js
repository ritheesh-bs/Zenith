import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [modals, setModals] = useState({});

	const openModal = (modalName) => {
		setModals((prev) => ({ ...prev, [modalName]: true }));
	};

	const closeModal = (modalName) => {
		setModals((prev) => ({ ...prev, [modalName]: false }));
	};

	return (
		<ModalContext.Provider value={{ modals, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => useContext(ModalContext);