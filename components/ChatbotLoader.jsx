"use client";

import Script from "next/script";

export default function ChatbotLoader() {
  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://files.bpcontent.cloud/2025/12/11/05/20251211054422-0F7PSEPV.js"
        strategy="lazyOnload"
      />
    </>
  );
}
