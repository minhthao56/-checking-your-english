import { MainNav } from "@/components/nav";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainNav />
      <div className="flex justify-center w-screen mt-4">
        <div className="max-w-screen-xl w-full">{children}</div>
      </div>
    </>
  );
}
