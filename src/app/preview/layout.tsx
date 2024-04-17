import { PropsWithChildren } from "react";
import { draftMode } from "next/headers";
import { AppProvider } from "@/lib/provider";
import { PREVIEW_LOCALE } from "@/lib/locale";

export default function Layout({ children }: PropsWithChildren) {
  const { isEnabled } = draftMode();
  return (
    <html>
      <head></head>
      <body>
        <AppProvider isDraftMode={isEnabled} locale={PREVIEW_LOCALE}>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
