import FormRandom from "@/components/reflex/form-random";
import { H3 } from "@/components/ui/h3";

export default function Reflex() {
  return (
    <main className="flex flex-col items-center">
      <H3 className="mb-6">Practicing Reflexivity</H3>
      <FormRandom />
    </main>
  );
}
