"use client";
import React from "react";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { inspectorProps } from "@/lib/inspector";
import { PREVIEW_LOCALE } from "@/lib/locale";

export interface BlockProps {
  isDraftMode: boolean;
  data: any;
}

export const Block: React.FC<BlockProps> = ({ isDraftMode, data }) => {
  console.log({ data });
  const updateData = useContentfulLiveUpdates(data, { locale: PREVIEW_LOCALE });
  console.log({ updateData });

  if (!updateData) {
    return null;
  }

  const fields = updateData.fields;

  if (!fields) {
    return null;
  }

  const { headline } = fields;

  return (
    <div>
      <h1
        {...inspectorProps({
          entryId: updateData.sys.id,
          fieldId: "headline",
          locale: PREVIEW_LOCALE,
          draftMode: isDraftMode,
        })}
      >
        {headline}
      </h1>
    </div>
  );
};
