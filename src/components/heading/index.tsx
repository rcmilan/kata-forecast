import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
}

function Index({ children, ...rest }: Props) {
  return (
    <h1 className="text-white text-5xl font-semibold m-10" {...rest}>
      {children}
    </h1>
  );
}

export default Index;
