export default function Button({ className, children }: Props) {
  return <button className={`${className} hover:bg-opacity-5 hover:bg-white`}>{children}</button>;
}

interface Props {
  className?: string;
  children: any;
}
