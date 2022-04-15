interface IProps {
	children: React.ReactNode
}

const Card = ({ children }: IProps) => (
	<div className="bg-white dark:bg-slate-800 shadow-lg p-4">
		{children}
	</div>
);

export default Card;
