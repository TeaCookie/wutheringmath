import { getServerSession } from "next-auth";
import Topbar from "@/components/topbar";

export default async function Home() {
  const session = await getServerSession();


  return (
    <div className="w-full masked-gradient">
      Element with background clip
    </div>
  );
}
