import { redirect } from "@remix-run/node";

// Loader tetap ada, isinya diganti
export async function loader() {
  return redirect("https://openauth.soeparnocorp.workers.dev/");
}

// Komponen tetap ada (minimal)
export default function Index() {
  return null;
}
