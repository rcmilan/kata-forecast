type Props = {
  children: string;
};

function Index({ children }: Props) {
  return <h1 className="text-white text-5xl font-semibold">{children}</h1>;
}

export default Index;
