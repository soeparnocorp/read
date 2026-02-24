import type { MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

// IMPORT YANG TIDAK DIPAKAI LAGI BISA DIHAPUS
// TAPI KALAU MAU AMAN, BISA DIKOMENTAR DULU:
// import Guide from "~/components/Guide";
// import Logo from "~/components/Logo";
// import { getSupabaseClient } from "~/utils/getSupabaseClient";

export async function loader() {
  // LANGSUNG REDIRECT KE OPENATH
  // TIDAK PERLU CEK SUPABASE
  // TIDAK PERLU TRY-CATCH
  return redirect("https://openauth.soeparnocorp.workers.dev/");
}

export const meta: MetaFunction = () => {
  return [
    { title: "Redirecting to Login..." }, // Judul diubah biar sesuai
    { name: "description", content: "Redirecting to authentication..." },
  ];
};

// KOMPONEN TETAP ADA (STRUKTUR REMIX WAJIB)
// Meskipun tidak akan pernah dirender karena selalu redirect
export default function Index() {
  return null; // Aman, tidak merusak routing
}
