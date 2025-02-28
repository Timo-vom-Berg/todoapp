interface ButtonProbs {
  title: string;
}

const Button: React.FC<ButtonProbs> = ({ title }) => {
  return <button className="actionbutton">{title}</button>;
};

export default Button;