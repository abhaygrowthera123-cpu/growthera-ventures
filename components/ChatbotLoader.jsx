// components/ChatbotLoader.jsx
"use client";

import Script from "next/script";

export default function ChatbotLoader() {
  // helper to log with a prefix
  const log = (msg, ...rest) => console.log("[ChatbotLoader]", msg, ...rest);

  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"
        strategy="afterInteractive"
        onLoad={() => {
          log("inject.js loaded");
          log("window.botpressWebChat (after inject):", window.botpressWebChat);
        }}
        onError={(e) => {
          log("inject.js failed to load", e);
        }}
      />
      <Script
        src="https://files.bpcontent.cloud/2025/12/11/05/20251211054422-0F7PSEPV.js"
        strategy="lazyOnload"
        onLoad={() => {
          log("bot config script loaded");
          // show common windows people use
          log("window.botpressWebChat (after config):", window.botpressWebChat);
          log("window.__bp || window.bp || window.botpress", {
            __bp: window.__bp,
            bp: window.bp,
            botpress: window.botpress,
          });
          // small delayed check in case script does async init
          setTimeout(() => {
            log("delayed check - window.botpressWebChat:", window.botpressWebChat);
            // try to find any iframes that might belong to Botpress
            const frames = Array.from(document.querySelectorAll("iframe")).map((f) => ({
              src: f.src,
              style: f.style.cssText,
              rect: f.getBoundingClientRect && f.getBoundingClientRect(),
            }));
            log("iframes on page:", frames);
          }, 1200);
        }}
        onError={(e) => {
          log("bot config script failed to load", e);
        }}
      />
    </>
  );
}
