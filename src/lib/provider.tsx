"use client";

import React, { PropsWithChildren } from "react";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

export interface AppProviderProps {
  locale: string;
  isDraftMode: boolean;
}

export const AppProvider: React.FC<PropsWithChildren<AppProviderProps>> = ({
  locale,
  isDraftMode,
  children,
}) => {
  return (
    <ContentfulLivePreviewProvider
      locale={locale}
      debugMode={true}
      enableLiveUpdates={isDraftMode}
      enableInspectorMode={isDraftMode}
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
};
