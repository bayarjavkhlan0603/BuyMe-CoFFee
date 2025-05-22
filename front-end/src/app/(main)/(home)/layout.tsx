import { LayoutHome } from "../components/LayoutHome";

export default function profileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-11">
      <div>
        <LayoutHome />
      </div>
      <div className="">{children}</div>
    </div>
  );
}
