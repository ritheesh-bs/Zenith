import BgImage from "./comps/misc/BgImage";
import ProfileContainer from "./comps/profile/ProfileContainer";
import FeedbackModal from "./modals/FeedbackModal";
import MainPage from "./pages/MainPage";
import { useModal } from "./store/ModalStore";
import { ChatProvider } from './store/ChatStore';
import { useTheme } from "./hooks/useThemeHandler";

export default function App() {
    const { modals, openModal, closeModal } = useModal();
    const { currentTheme } = useTheme();

    return (
        <ChatProvider>
            <div className={`relative flex flex-col h-dvh max-h-dvh w-full dark:bg-black bg-white-200 font-medium scrollbar-hide ${currentTheme}`}>
                
                <BgImage />
                <MainPage />
                <ProfileContainer />
                
                {modals.feedbackModal && <FeedbackModal onClose={() => closeModal('feedbackModal')} />}
            </div>
        </ChatProvider>
    );
}
