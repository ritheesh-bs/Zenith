import BgImage from "./comps/misc/BgImage";
import ProfileContainer from "./comps/profile/ProfileContainer";
import FeedbackModal from "./modals/FeedbackModal";
import MainPage from "./pages/MainPage";
import { useModal } from "./store/ModalStore";
import { ChatProvider } from './store/ChatStore';

export default function App() {
    const { modals, openModal, closeModal } = useModal();
    return (
        <ChatProvider>
            <div className="relative min-h-screen bg-black font-medium">
                <ProfileContainer />
                <BgImage />
                <MainPage />

                {modals.feedbackModal && <FeedbackModal onClose={() => closeModal('feedbackModal')} />}
            </div>
        </ChatProvider>
    );
}