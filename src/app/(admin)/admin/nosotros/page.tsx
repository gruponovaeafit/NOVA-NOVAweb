import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getNosotros } from "@/lib/data";
import NosotrosManager from "./NosotrosManager";

export default async function AdminNosotrosPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const nosotros = await getNosotros();
  return <NosotrosManager initial={nosotros} />;
}
