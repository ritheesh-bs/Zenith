import { useFeedback } from "../hooks/useFeedbackHandler";
import { useModal } from "../store/ModalStore";
import NewFeedback from "../comps/feedback/NewFeedback";
import FeedbackSuccess from "../comps/feedback/FeedbackSuccess";
import FeedbackFailure from "../comps/feedback/FeedbackFailure";

export default function FeedbackModal() {
    const { closeModal } = useModal();
    const { message, setMessage, status, submitFeedback, resetFeedback, isLoading } = useFeedback();

    return (
        <div className="flex text-sm flex-col w-full items-center h-dvh justify-center fixed inset-0 bg-black bg-opacity-10 backdrop-blur-[200px] z-10">
            {status === "default" && (
                <NewFeedback message={message} setMessage={setMessage} submitFeedback={submitFeedback} isLoading={isLoading} />
            )}

            {status === "success" && (
                <FeedbackSuccess/>
            )}
            {status === "error" && (
                <FeedbackFailure resetFeedback={resetFeedback} />
            )}
        </div>
    );
}
