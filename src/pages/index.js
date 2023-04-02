import { useRouter } from "next/router";
import ProfilePage from "./ProfiePage";
import Link from "next/link";


export default function HomePage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/flights");
  };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleRedirect}>Flights</button>
      <Link href="/flights">Fligts</Link>
    </>
  );
}
