"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: {
      setAttributes?: (attrs: Record<string, string>, callback?: (error: unknown) => void) => void;
      onLoad?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

export function TawkWidget() {
  const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
  const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !window.Tawk_API) return;
    window.Tawk_API.setAttributes?.({ page: pathname ?? "/" }, () => {});
  }, [pathname]);

  if (!propertyId || !widgetId) {
    return null;
  }

  return (
    <Script
      id="tawk-to"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function(){
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = "https://embed.tawk.to/${propertyId}/${widgetId}";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
          })();
        `,
      }}
    />
  );
}
