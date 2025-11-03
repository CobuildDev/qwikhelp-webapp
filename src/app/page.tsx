import OnlyMobile from "@/components/OnlyMobile";
import Welcome from "@/components/Welcome";
import Onbording from "@/components/Welcome";

export default function Home() {
  return (
    <OnlyMobile>
      <Welcome />
    </OnlyMobile>
  );
}
