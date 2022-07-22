export default function Text({ type, children, className }: Props) {
  switch (type) {
    case "h1":
      return <h1 className={`${className} text-9xl`}>{children}</h1>;
    case "h2":
      return <h2 className={`${className} text-7xl`}>{children}</h2>;
    case "h3":
      return <h3 className={`${className} text-5xl`}>{children}</h3>;
    case "h4":
      return <h4 className={`${className} text-3xl`}>{children}</h4>;
    case "h5":
      return <h5 className={`${className} text-xl`}>{children}</h5>;
    case "h6":
      return <h6 className={`${className} text-lg`}>{children}</h6>;
    case "body":
      return <p className={`${className} text-base`}>{children}</p>;
    case "subtitle":
      return <p className={`${className} text-sm`}>{children}</p>;
    default:
      return <span className={`${className}`}>{children}</span>;
  }
}

interface Props {
  children: any;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "subtitle";
  className?: string;
}
