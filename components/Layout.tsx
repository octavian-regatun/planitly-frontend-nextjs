import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: Props) {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="h-screen max-h-screen w-screen pl-16 pt-16">{children}</main>
    </>
  );
}

interface Props {
  children: any;
}
