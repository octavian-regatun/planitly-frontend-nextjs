interface Props {
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function Button(props: Props) {
  const { className, children, onClick } = props;

  return (
    <button
      className={`${className} hover:bg-opacity-5 hover:bg-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
