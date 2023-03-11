import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  text: string
}

function Index({ text, ...rest }: Props) {
  return (
    <div {...rest}>
      <h2 className="text-white text-3xl font-semibold">{text}</h2>
    </div>
  );
}

export default Index;
