import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { format, isToday } from 'date-fns';

export default function BotReply({ message, time }) {
    const getRelativeTime = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();

        if (isToday(date)) {
            const secondsAgo = Math.round((now - date) / 1000);

            if (secondsAgo < 10) return "Just now";
            if (secondsAgo < 60) return `${secondsAgo}s ago`;
            if (secondsAgo < 3600) return `${Math.floor(secondsAgo / 60)} min ago`;

            return format(date, "hh:mm a");
        } else {
            return format(date, "MMM d, yyyy hh:mm a");
        }
    };

    return (
        <div className="flex w-full">
            <div className="inline-block max-w-[300px] lg:max-w-[500px]">
                <div className="bg-[#121212] border-[0.5px] border-[#222222] rounded-3xl rounded-bl-none p-4 space-y-2">
                    <div className="text-xs flex gap-1.5 items-center">
                        <span className="text-[#666666]">Zenith</span>
                        <span className="w-[2px] h-[2px] bg-[#333333] rounded-full" />
                        <span className="text-[#333333]">{getRelativeTime(time)}</span>
                    </div>

                    <div className="w-full overflow-hidden">
                        <ReactMarkdown
                            className="prose prose-invert text-[#AAAAAA] w-fit max-w-full break-words"
                            remarkPlugins={[remarkGfm]}
                        >
                            {message}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}