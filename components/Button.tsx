export default function Button({ className, children, onClick }: Props) {
  return (
    <button
      className={`${className} hover:bg-opacity-5 hover:bg-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface Props {
  className?: string;
  children: any;
  onClick?: any;
}
