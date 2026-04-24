"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Link2, Mail, Share2, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useId, useRef, useState } from "react";

type ShareButtonProps = {
  title: string;
  text?: string;
  url?: string;
  className?: string;
  align?: "left" | "center" | "right";
};

type ShareTarget = {
  id: string;
  label: string;
  build: (params: { title: string; text: string; url: string }) => string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 011.141.195v3.325a8.623 8.623 0 00-.653-.036 26.805 26.805 0 00-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 00-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z" />
  </svg>
);

const buildShareTargets = (emailLabel: string): ShareTarget[] => [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: WhatsAppIcon,
    color: "text-[#25D366]",
    build: ({ title, url }) => {
      const u = new URL("https://wa.me/");
      u.searchParams.set("text", `${title} ${url}`);
      return u.toString();
    },
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: LinkedInIcon,
    color: "text-[#0A66C2]",
    build: ({ url }) => {
      const u = new URL("https://www.linkedin.com/sharing/share-offsite/");
      u.searchParams.set("url", url);
      return u.toString();
    },
  },
  {
    id: "x",
    label: "X · Twitter",
    icon: XIcon,
    color: "text-neutral-950",
    build: ({ title, url }) => {
      const u = new URL("https://x.com/intent/post");
      u.searchParams.set("url", url);
      u.searchParams.set("text", title);
      return u.toString();
    },
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: FacebookIcon,
    color: "text-[#1877F2]",
    build: ({ url }) => {
      const u = new URL("https://www.facebook.com/sharer/sharer.php");
      u.searchParams.set("u", url);
      return u.toString();
    },
  },
  {
    id: "email",
    label: emailLabel,
    icon: Mail,
    color: "text-neutral-700",
    build: ({ title, text, url }) => {
      const u = new URL("mailto:");
      u.searchParams.set("subject", title);
      u.searchParams.set("body", `${text ? `${text}\n\n` : ""}${url}`);
      return u.toString();
    },
  },
];

export function ShareButton({
  title,
  text,
  url,
  className,
  align = "center",
}: ShareButtonProps) {
  const t = useTranslations("article");
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [resolvedUrl, setResolvedUrl] = useState(url ?? "");
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const targets = buildShareTargets(t("shareEmail"));

  useEffect(() => {
    if (!url && typeof window !== "undefined") {
      setResolvedUrl(window.location.href);
    }
  }, [url]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const shareText = text ?? title;

  const handlePrimary = useCallback(async () => {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title, text: shareText, url: resolvedUrl });
        return;
      } catch (err) {
        if ((err as DOMException)?.name === "AbortError") return;
      }
    }
    setOpen((v) => !v);
  }, [title, shareText, resolvedUrl]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(resolvedUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [resolvedUrl]);

  const alignClass =
    align === "left"
      ? "left-0"
      : align === "right"
        ? "right-0"
        : "left-1/2 -translate-x-1/2";

  return (
    <div className={cn("relative inline-block", className)} ref={containerRef}>
      <button
        type="button"
        onClick={handlePrimary}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        className="group inline-flex items-center gap-2.5 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        <Share2 className="h-4 w-4" strokeWidth={1.8} />
        <span>{t("shareButton")}</span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="menu"
            aria-label={t("shareMenuLabel")}
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
            className={cn(
              "absolute top-full z-50 mt-3 w-72 origin-top rounded-2xl border border-neutral-200 bg-white p-2 shadow-2xl shadow-neutral-900/10",
              alignClass,
            )}
          >
            <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-neutral-100 mb-1">
              <span className="text-xs tracking-[0.18em] uppercase text-neutral-500">
                {t("shareHeading")}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("shareClose")}
                className="text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <ul className="flex flex-col">
              {targets.map((target) => {
                const href = target.build({
                  title,
                  text: shareText,
                  url: resolvedUrl,
                });
                const Icon = target.icon;
                return (
                  <li key={target.id} role="none">
                    <a
                      role="menuitem"
                      href={href}
                      target={target.id === "email" ? undefined : "_blank"}
                      rel={target.id === "email" ? undefined : "noopener noreferrer"}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-neutral-800 transition-colors hover:bg-neutral-50 focus-visible:bg-neutral-50 focus-visible:outline-none"
                    >
                      <Icon className={cn("h-5 w-5", target.color)} />
                      <span>{target.label}</span>
                    </a>
                  </li>
                );
              })}

              <li role="none" className="mt-1 border-t border-neutral-100 pt-1">
                <button
                  type="button"
                  role="menuitem"
                  onClick={handleCopy}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-neutral-800 transition-colors hover:bg-neutral-50 focus-visible:bg-neutral-50 focus-visible:outline-none"
                >
                  {copied ? (
                    <>
                      <Check className="h-5 w-5 text-orange-600" />
                      <span className="text-orange-600">{t("shareCopied")}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-5 w-5 text-neutral-600" />
                      <span>{t("shareCopy")}</span>
                    </>
                  )}
                </button>
              </li>

              <li role="none">
                <div className="mt-2 flex items-center gap-2 rounded-xl bg-neutral-50 px-3 py-2.5 text-xs text-neutral-500">
                  <Link2 className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="truncate font-mono">{resolvedUrl}</span>
                </div>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
