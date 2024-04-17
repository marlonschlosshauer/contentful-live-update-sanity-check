import React from "react";
import { Block } from "@/components/Block";
import { createClient } from "contentful";
import { draftMode } from "next/headers";

export default async function Page() {
  const { isEnabled } = draftMode();
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID ?? "",
    accessToken: process.env.CONTENTFUL_DELIVERY_PREVIEW_TOKEN ?? "",
    host: "preview.contentful.com",
  });

  const id = "7ovNZRxs7wECVXNyroLbRb";

  const data = await client.getEntries({
    locale: "de",
    content_type: "textImage",
  });

  const [block] = data.items.filter((item) => item.sys.id === id);

  return <Block isDraftMode={isEnabled} data={block} />;
}
