"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CopyCommandBarProps = {
    className?: string;
    copyIconSrc?: string;
    iconTheme?: "light" | "dark";
    text: string;
};

async function copyText(text: string) {
    if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return;
    }

    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}

export default function CopyCommandBar({
    className = "",
    copyIconSrc = "/copy.svg",
    iconTheme = "light",
    text,
}: CopyCommandBarProps) {
    const [copied, setCopied] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleCopy = async () => {
        if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current);
        }

        setCopied(true);

        try {
            await copyText(text);

            timeoutRef.current = window.setTimeout(() => {
                setCopied(false);
            }, 1200);
        } catch {
            setCopied(false);
        }
    };

    const iconClassName = iconTheme === "light" ? "invert" : "";

    return (
        <button
            type="button"
            onClick={handleCopy}
            className={`flex w-full items-center justify-center gap-2 rounded-xl border bg-black p-2 px-4 text-sm text-white transition hover:opacity-90 sm:w-auto sm:px-7 sm:text-md ${className}`}
            aria-label={`Copy command: ${text}`}
        >
            <span className="break-all">{text}</span>
            <span className="flex items-center gap-2">
                {
                    copied ? 
                    <Image src="/tick.png" alt="Copied" width={16} height={17} className={iconClassName} aria-hidden="true" />
                    :
                    <Image src={copyIconSrc} alt="Copy" width={15} height={15} className={iconClassName} aria-hidden="true" />
                }
                
            </span>
        </button>
    );
}
