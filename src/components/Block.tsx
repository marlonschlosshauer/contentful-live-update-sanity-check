"use client";
import React from "react";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { inspectorProps } from "@/lib/inspector";

export const Block: React.FC<any> = (raw) => {
  const data = useContentfulLiveUpdates(raw, { locale: "de" });

  if (!data) {
    return null;
  }

  const fields = data.fields;

  if (!fields) {
    return null;
  }

  const { headline, content } = fields;

  return (
    <div>
      <h1
        {...inspectorProps({
          entryId: data.sys.id,
          fieldId: "headline",
          locale: "de",
          draftMode: true,
        })}
      >
        {headline}
      </h1>
      <p
        {...inspectorProps({
          entryId: data.sys.id,
          fieldId: "content",
          locale: "de",
          draftMode: true,
        })}
      >
        {JSON.stringify(content)}
      </p>
    </div>
  );
};
