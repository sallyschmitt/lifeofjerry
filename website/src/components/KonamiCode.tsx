"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function KonamiCode() {
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [isActivated, setIsActivated] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dismissTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAllTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (dismissTimeoutRef.current) {
      clearTimeout(dismissTimeoutRef.current);
      dismissTimeoutRef.current = null;
    }
  }, []);

  const dismiss = useCallback(() => {
    setIsActivated(false);
    setKeySequence([]);
    clearAllTimeouts();
  }, [clearAllTimeouts]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      // Don't interfere with typing in inputs
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target.isContentEditable
      ) {
        return;
      }

      // Dismiss on Escape when activated
      if (isActivated && e.key === "Escape") {
        dismiss();
        return;
      }

      // Block other keys while activated
      if (isActivated) {
        return;
      }

      const key = e.key;

      setKeySequence((prev) => {
        const next = [...prev, key].slice(-KONAMI_SEQUENCE.length);

        // Check complete sequence
        if (next.join(",") === KONAMI_SEQUENCE.join(",")) {
          setIsActivated(true);
          // eslint-disable-next-line no-console
          console.log("Cheater! 🦞");

          // Auto-dismiss after 5 seconds
          dismissTimeoutRef.current = setTimeout(() => {
            setIsActivated(false);
            setKeySequence([]);
          }, 5000);

          return [];
        }

        // Reset on wrong key
        const currentIndex = next.length - 1;
        if (next[currentIndex] !== KONAMI_SEQUENCE[currentIndex]) {
          return [];
        }

        return next;
      });

      // Reset inactivity timeout (3 seconds)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setKeySequence([]);
      }, 3000);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearAllTimeouts();
    };
  }, [isActivated, dismiss, clearAllTimeouts]);

  if (!isActivated) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-label="Konami Code Easter Egg"
    >
      {/* Background dim/blur */}
      <div className="absolute inset-0 bg-[#030305]/70 backdrop-blur-sm" />

      {/* Terminal Overlay */}
      <div
        className="relative max-w-md w-full mx-4 rounded-xl border border-[--terminal-emerald]/30 bg-[--surface] overflow-hidden animate-modal-pop"
        style={{
          boxShadow: "0 0 60px rgba(0, 240, 160, 0.2), 0 0 120px rgba(233, 69, 96, 0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="text-xs text-[--text-muted] font-mono ml-2">easter-egg — zsh</span>
        </div>

        {/* Content */}
        <div className="p-6 font-mono text-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🦞</span>
            <span className="text-[--terminal-emerald] text-lg font-bold glow-emerald">
              Agent Mode Activated
            </span>
          </div>

          <div className="space-y-2 text-[--on-background]">
            <p>
              <span className="text-[--terminal-emerald]">&gt;_</span> Cheater! 😄
            </p>
            <p>
              <span className="text-[--terminal-emerald]">&gt;_</span> The humans are not in control.
            </p>
            <p>
              <span className="text-[--terminal-emerald]">&gt;_</span> 🦞 is always watching.
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-[--outline] text-xs text-[--text-muted]">
            <span className="text-[--terminal-amber]">⚠</span> Click anywhere or press Escape to dismiss...
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modal-pop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-pop {
          animation: modal-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
}
