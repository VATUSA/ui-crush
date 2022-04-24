import styles from './Footer.module.css';

const Footer = () => {
	const flags = [
		styles.pride_flag,
		styles.bi_flag,
		styles.trans_flag,
	];

	return (
		<footer>
			<div className="bg-slate-200 dark:bg-slate-800">
				<div className="max-w-screen-fullhd mx-auto p-4 text-sm">
					<p>
						Copyright &copy;
						{' '}
						{new Date().getFullYear()}
						{' '}
						VATSIM United States Division (VATUSA).
					</p>
					<p className="mt-1">
						This site is not affiliated with the FAA, or any governing aviation body. All content contained herein is approved only for use on the VATSIM network.
					</p>
					<div className="mt-4">
						<div className="flex space-x-1">
							{flags.map((flag) => (
								<div data-testid={flag} key={flag} className={`h-4 w-6 ${flag}`} />
							))}
						</div>
						<p className="mt-1">
							VATUSA stands with the LGBTQIA+ community on VATSIM.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
