export default function Button({ className, children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${className} hover:bg-opacity-5 hover:bg-white`}
    >
      {children}
    </button>
  );
}

interface Props {
  className?: string;
  onClick?: any;
  children: any;
}
