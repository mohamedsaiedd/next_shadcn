import DropdownMenuRadioGroupDemo from "@/app/header";
import { DrawerDemo } from "@/components/client/drawer_cli";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DropdownMenuRadioGroupDemo />
      <DrawerDemo />
      <h1>
        helllo mohamed
      </h1>
    </main>
  );
}

