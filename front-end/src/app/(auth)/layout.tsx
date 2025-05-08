import { LayoutHalf } from "./components";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen h-screen bg-white gap-5">
      <div className="bg-[#FBBF24] w-[50%]">
        <LayoutHalf />
      </div>
      <div className="w-[50%]">{children}</div>
    </div>
  );
}
