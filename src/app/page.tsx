import Image from "next/image";
import Teaser from "./teaser/teaser";
import Dashboard from "./dash2/dash";
import DataAccuracyDashboard from "./dataaccuracy/accuracy";

export default function Home() {
  return (
    <main>
     {/* <Teaser/>  */}
     <Dashboard/>
     <DataAccuracyDashboard/>
    </main>
  );
}
