const Hero = () => (
	<div className="bg-gradient-to-b from-vatusa-sky-300 to-vatusa-sky-100 dark:from-vatusa-blue-700 dark:to-[#29080C]">
		<div className="p-4 max-w-screen-fullhd mx-auto">
			<div
				className="relative
					h-56 phablet:h-72 tablet:h-96 laptop:h-[600px]
					bg-bottom laptop:bg-center"
				style={{
					backgroundImage: 'url(/images/aal_transparent.png)',
					backgroundSize: '100%',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className="
					tablet:mt-8 tablet:ml-24
					text-vatusa-blue-500 dark:text-vatusa-sky-500"
				>
					<h1 className="text-2xl laptop:text-5xl font-bold ">Welcome to VATUSA</h1>
					<h2 className="text-xl laptop:text-2xl mt-2 laptop:mt-4">VATSIM United States Division</h2>
				</div>
			</div>
		</div>
	</div>
);

export default Hero;
