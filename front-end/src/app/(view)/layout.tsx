import { LayoutView } from "../(main)/components/LayoutView";

export default function profileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <LayoutView />
      </div>
      <div>{children}</div>
    </div>
  );
}
