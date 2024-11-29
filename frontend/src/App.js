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
            <div className="relative flex flex-col h-dvh min-h-dvh w-full bg-black font-medium">
                {/* Your components look good */}
                
                <BgImage />
                <MainPage />
                <ProfileContainer />
                
                {modals.feedbackModal && <FeedbackModal onClose={() => closeModal('feedbackModal')} />}
            </div>
        </ChatProvider>
    );
}