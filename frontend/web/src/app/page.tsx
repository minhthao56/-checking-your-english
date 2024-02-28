"use client";
import { Button } from "@/components/ui/button";
import { invokeLLM } from "@/app/actions";
import { useState, useTransition } from "react";

export default function Home() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<string | null>(null);
  const handleClick = () => {
    startTransition(() => {
      const r = invokeLLM();
      r.then((res) => {
        setResult(res);
      }).catch((e) => {
        console.error(e);
      });
    });
  };
  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
      {isPending ? "Loading..." : null}
      {result ? result : null}
    </div>
  );
}
