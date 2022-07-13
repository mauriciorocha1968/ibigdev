import { Button } from "@mui/material";
import Image from "next/image";

export function Header() {
  return (
    <header>
      <Image src="/ibigdev.svg" width={42} height={42} alt="IBigDev" />
      <Button variant="text">Text</Button>
    </header>
  );
}
