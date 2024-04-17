import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
  console.log("Activating draft mode");
  draftMode().enable();
  redirect("/preview");
}
