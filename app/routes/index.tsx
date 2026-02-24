import type { MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

// IMPOR YANG TIDAK DIPAKAI BISA DIHAPUS:
// import Guide from "~/components/Guide";
// import Logo from "~/components/Logo";
// import { getSupabaseClient } from "~/utils/getSupabaseClient";

export async function loader() {
  // LANGSUNG REDIRECT KE OPENATH
  return redirect("https://openauth.soeparnocorp.workers.dev/");
}

export const meta: MetaFunction = () => {
  return [
    { title: "Redirecting to Login..." },
    { name: "description", content: "Redirecting to authentication..." },
  ];
};

// KOMPONEN INI TIDAK AKAN PERNAH DIRENDER KARENA LOADER SELALU REDIRECT
export default function Index() {
  return null; // Bisa juga hapus seluruh JSX-nya
}
