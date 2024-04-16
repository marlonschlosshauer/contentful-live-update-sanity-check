import React from "react";
import { Block } from "@/components/Block";
import { createClient } from "contentful";

export default async function Page() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID ?? "",
    accessToken: process.env.CONTENTFUL_DELIVERY_PREVIEW_TOKEN ?? "",
    host: "preview.contentful.com",
  });

  const id = "7ovNZRxs7wECVXNyroLbRb";

  const data = await client.getEntry(id, { locale: "de" });

  return <Block {...data} sys={{ id }} />;
}
