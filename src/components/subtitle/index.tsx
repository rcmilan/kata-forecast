import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function Index({ ...rest }: Props) {
  return (
    <div {...rest}>
      <h2 className="text-white text-3xl font-semibold">Capitais</h2>
    </div>
  );
}

export default Index;
