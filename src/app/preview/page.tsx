import React from "react";
import { Block } from "@/components/Block";
import { createClient } from "contentful";
import { draftMode } from "next/headers";
import { PREVIEW_LOCALE } from "@/lib/locale";

export default async function Page() {
  const { isEnabled } = draftMode();

  console.log({ isDraftModePage: isEnabled });

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID ?? "",
    accessToken: process.env.CONTENTFUL_DELIVERY_PREVIEW_TOKEN ?? "",
    host: "preview.contentful.com",
  });

  const id = "7ovNZRxs7wECVXNyroLbRb";

  const data = await client.getEntries({
    locale: PREVIEW_LOCALE,
    content_type: "textImage",
    select: ["fields.headline"],
  });

  const [block] = data.items.filter((item) => item.sys.id === id);

  return <Block isDraftMode={isEnabled} data={block} />;
}
