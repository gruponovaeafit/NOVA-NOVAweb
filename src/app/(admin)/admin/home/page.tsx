import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getHome } from "@/lib/data";
import HomeManager from "./HomeManager";

export default async function AdminHomeContentPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const home = await getHome();
  return <HomeManager initial={home} />;
}
