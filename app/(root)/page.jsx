import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "../../lib/actions/user.actions";
async function Home({ searchParams }) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  // if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <>
      <h1> You are logged in !</h1>
    </>
  );
}

export default Home;
