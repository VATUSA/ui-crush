interface IProps {
	children: React.ReactChild
}

const CardHeading = ({ children }: IProps) => (
	<h2 className="text-xl mb-2 font-semibold">{children}</h2>
);

export default CardHeading;
