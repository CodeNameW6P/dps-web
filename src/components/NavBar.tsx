import Link from "next/link";

const Navbar: React.FC = () => {
	return (
		<>
			<nav className="flex flex-col justify-center items-center p-1 shadow-lg bg-gradient-to-r from-green-500 via-orange-800 to-red-500 md:from-green-500 md:via-orange-700 md:to-red-500 md:flex-row md:justify-evenly">
				<div>
					<Link className="text-white text-xl md:text-2xl" href={""}>
						Mutual Trust Bank Ltd.
					</Link>
				</div>
				<div>
					<ul className="flex flex-row gap-4">
						<li className="text-white hover:underline">
							<Link href={""}>Home</Link>
						</li>
						<li className="text-white hover:underline">
							<Link href={""}>Products</Link>
						</li>
						<li className="text-white hover:underline">
							<Link href={""}>Services</Link>
						</li>
						<li className="text-white hover:underline">
							<Link href={""}>About</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
