"use client";
import { useAppSelector } from "@/redux/hooks";
import NavBar from "@/components/NavBar";
import Initial from "./form-pages/Initial";
import Personal from "./form-pages/Personal";

export default function CreateAccount() {
	const currentPage = useAppSelector((state) => state.currentPage.value);

	const formPages = [<Initial />, <Personal />];

	return (
		<>
			<div className="flex flex-col bg-gray-100 min-h-screen">
				<NavBar />
				<div className="flex flex-col relative bg-white grow p-5 place-self-center w-10/12 md:w-3/6 my-5 rounded-md">
					<div className="absolute bg-red-500 top-0 right-0 p-2 rounded-tr-md rounded-bl-md">
						<span className="text-white text-sm">
							{currentPage + 1}/{formPages.length}
						</span>
					</div>
					<div className="flex flex-col grow gap-5">{formPages[currentPage]}</div>
				</div>
			</div>
		</>
	);
}
