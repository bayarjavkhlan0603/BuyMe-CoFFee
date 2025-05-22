import { LayoutProfile } from "../components";

export default function profileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[91px]">
      <div>
        <LayoutProfile />
      </div>
      <div className="flex justify-center">{children}</div>
    </div>
  );
}
