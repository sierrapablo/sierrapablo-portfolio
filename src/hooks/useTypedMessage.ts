import { useEffect, useState } from "react";

export function useTypedMessage(
    messages: string[],
    speedMs: number,
    waitAfterTypedMs: number,
    waitAfterDeletedMs: number,
    startTyping: boolean
): string {
    const [text, setText] = useState("");
    const [messageIndex, setMessageIndex] = useState(0);
    const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");
    const [charIndex, setCharIndex] = useState(0);

    // Reset state cuando startTyping cambia a true
    useEffect(() => {
        if (startTyping) {
            setText("");
            setMessageIndex(0);
            setPhase("typing");
            setCharIndex(0);
        } else {
            setText("");
        }
    }, [startTyping]);

    useEffect(() => {
        if (!startTyping) return;

        let timeout: NodeJS.Timeout;

        if (phase === "typing") {
            if (charIndex < messages[messageIndex].length) {
                timeout = setTimeout(() => {
                    setText(messages[messageIndex].slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                }, speedMs);
            } else {
                timeout = setTimeout(() => {
                    setPhase("waiting");
                }, waitAfterTypedMs);
            }
        } else if (phase === "waiting") {
            timeout = setTimeout(() => {
                setPhase("deleting");
            }, waitAfterTypedMs);
        } else if (phase === "deleting") {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setText(messages[messageIndex].slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                }, speedMs);
            } else {
                timeout = setTimeout(() => {
                    setMessageIndex((prev) => (prev + 1) % messages.length);
                    setPhase("typing");
                }, waitAfterDeletedMs);
            }
        }

        return () => clearTimeout(timeout);
    }, [
        charIndex,
        phase,
        messageIndex,
        messages,
        speedMs,
        waitAfterTypedMs,
        waitAfterDeletedMs,
        startTyping,
    ]);

    return text;
}
