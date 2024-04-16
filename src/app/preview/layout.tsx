import { PropsWithChildren } from "react";
import { draftMode } from "next/headers";
import { AppProvider } from "@/lib/provider";

export default function Layout({ children }: PropsWithChildren) {
  const { isEnabled } = draftMode();
  return (
    <html>
      <head></head>
      <body>
        <AppProvider isDraftMode={isEnabled} locale="de">
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
