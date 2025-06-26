import { JSX, useEffect, useState } from "react";
import { useTypedMessage } from "../hooks/useTypedMessage";

export default function Hero(): JSX.Element {
    const messages = [
        "Welcome, stranger!",
        "I break things. I build things. Sometimes they work.",
        "This site? It's more personal than professional — like my dotfiles.",
        "If you found this page, congratulations! You’ve officially wasted more time than most people do online.",
        "I use Arch, btw",
        "This site looks like a mess? Perfect, you’re in the right place.",
        "If you’re reading this, you probably should be working.",
        "Thanks for stopping by. Your boredom is my entertainment.",
        "Error 404: Your motivation not found.",
        "Just because you’re unique doesn’t mean you’re useful.",
        "Keep scrolling, maybe you’ll find something interesting... or not.",
        "Not all who wander are lost, but you definitely are.",
    ];

    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setStartTyping(true), 3500);
        return () => clearTimeout(timeout);
    }, []);

    const typed = useTypedMessage(messages, 35, 1500, 1000, startTyping);

    return (
        <section className="mb-12">
            <div className="max-w-2xl mx-auto">
                <div className="min-h-56 sm:min-h-36 bg-neutral-800 p-6 rounded-lg border border-neutral-600 shadow">
                    <div className="flex items-center space-x-4 mb-4">
                        <img
                            src="https://unavatar.io/github/sierrapablo"
                            alt="pfp"
                            className="w-14 h-14 rounded-full border-2 border-amber-500 shadow-lg hover:scale-105 transition-transform duration-200"
                        />
                        <div>
                            <h1 className="text-xl font-bold text-amber-500">
                                Pablo Sierra - Software Engineer
                            </h1>
                            <p className="text-sm text-gray-400">
                                ~/about — probably overthinking something right now
                            </p>
                        </div>
                    </div>
                    <p className="text-sm text-cyan-300 font-mono whitespace-pre-wrap">
                        {typed}
                    </p>
                </div>
            </div>
        </section>
    );
}
