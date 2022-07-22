import Navbar from "./Navbar";

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="h-screen w-screen pt-16">{children}</main>
    </>
  );
}

interface Props {
  children: any;
}
