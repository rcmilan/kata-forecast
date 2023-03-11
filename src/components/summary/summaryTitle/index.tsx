interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => (
  <div>
    <h2 className="text-white text-3xl font-semibold">{text}</h2>
  </div>
);

export default Title;
