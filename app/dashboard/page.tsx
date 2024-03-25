// Import from next
import Image from "next/image";
// Import from antd
import { Card, Select } from "antd";
// Import from react-icons
import { BsBoxFill } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { FaChartLine, FaCircle, FaUserFriends } from "react-icons/fa";
// Imported modules
import FPSlider from "@/modules/Sliders/FPSlider";
import { RevenueChart } from "@/modules/Charts/RevenueChart";
import { CustomersChart } from "@/modules/Charts/CustomersChart";
import { SalesDetailsChart } from "@/modules/Charts/SalesDetailsChart";
import { SalesAnalyticsChart } from "@/modules/Charts/SalesAnalyticsChart";

export default function Dashboard() {
	return (
		// Dashboard Page Start
		<div className="space-y-5">
			{/* Page Heading Start*/}
			<h1 className="text-3xl text-CDark font-bold">Dashboard</h1>
			{/* Page Content Start*/}
			{/* Stats Start */}
			<div className="grid grid-cols-4 gap-5 ">
				{/* Total User Start */}
				<Card>
					<div className="flex justify-between">
						<div>
							<p className="text-CLight font-semibold">Total User</p>
							<p className="text-3xl text-CDark font-bold mt-3 mb-5">60,689</p>
						</div>
						<div className="flex justify-center items-center size-14 bg-CBlue bg-opacity-20 rounded-2xl">
							<FaUserFriends className="text-CBlue text-3xl" />
						</div>
					</div>
					<p className="flex gap-1 font-semibold text-CLight">
						<span className="text-CGreen flex items-center gap-1">
							<AiOutlineRise /> 8.5%
						</span>
						Up from yesterday
					</p>
				</Card>
				{/* Total Order Start */}
				<Card>
					<div className="flex justify-between">
						<div>
							<p className="text-CLight font-semibold">Total Order</p>
							<p className="text-3xl text-CDark font-bold mt-3 mb-5">10,293</p>
						</div>
						<div className="flex justify-center items-center size-14 bg-COrange bg-opacity-20 rounded-2xl">
							<BsBoxFill className="text-COrange text-3xl" />
						</div>
					</div>
					<p className="flex gap-1 font-semibold text-CLight">
						<span className="text-CGreen flex items-center gap-1">
							<AiOutlineRise /> 1.3%
						</span>
						Up from past week
					</p>
				</Card>
				{/* Total Sales Start */}
				<Card>
					<div className="flex justify-between">
						<div>
							<p className="text-CLight font-semibold">Total Sales</p>
							<p className="text-3xl text-CDark font-bold mt-3 mb-5">$89,000</p>
						</div>
						<div className="flex justify-center items-center size-14 bg-CGreen bg-opacity-20 rounded-2xl">
							<FaChartLine className="text-CGreen text-3xl" />
						</div>
					</div>
					<p className="flex gap-1 font-semibold text-CLight">
						<span className="text-CRed flex items-center gap-1">
							<AiOutlineFall /> 4.3%
						</span>
						Down from yesterday
					</p>
				</Card>
				{/* Total Pending Start */}
				<Card>
					<div className="flex justify-between">
						<div>
							<p className="text-CLight font-semibold">Total Pending</p>
							<p className="text-3xl text-CDark font-bold mt-3 mb-5">2,040</p>
						</div>
						<div className="flex justify-center items-center size-14 bg-CRed bg-opacity-20 rounded-2xl">
							<GiBackwardTime className="text-CRed text-3xl" />
						</div>
					</div>
					<p className="flex gap-1 font-semibold text-CLight">
						<span className="text-CGreen flex items-center gap-1">
							<AiOutlineRise /> 1.8%
						</span>
						Up from yesterday
					</p>
				</Card>
			</div>
			{/* Sales Charts Start */}
			<div className="grid grid-cols-1">
				<Card>
					<div className="flex justify-between mb-5">
						<p className="text-2xl font-bold">Sales Details</p>
						<Select
							defaultValue="jan"
							className="w-32"
							options={[
								{ value: "jan", label: "January" },
								{ value: "feb", label: "February" },
								{ value: "mar", label: "March" },
								{ value: "apr", label: "April" },
								{ value: "may", label: "May" },
								{ value: "jun", label: "June" },
								{ value: "jul", label: "July" },
								{ value: "aug", label: "August" },
								{ value: "sep", label: "September" },
								{ value: "oct", label: "October" },
								{ value: "nov", label: "November" },
								{ value: "dec", label: "December" },
							]}
						/>
					</div>
					<div className="h-[270px] w-full">
						{/* <Image src="/image/salesGraph.png" width={1070} height={270} alt="sales graph" /> */}
						<SalesDetailsChart />
					</div>
				</Card>
			</div>
			{/* Deals Details Start */}
			<div className="grid grid-cols-1">
				<Card>
					<div className="flex justify-between mb-5">
						<p className="text-2xl font-bold">Deals Details</p>
						<Select
							defaultValue="jan"
							className="w-32"
							options={[
								{ value: "jan", label: "January" },
								{ value: "feb", label: "February" },
								{ value: "mar", label: "March" },
								{ value: "apr", label: "April" },
								{ value: "may", label: "May" },
								{ value: "jun", label: "June" },
								{ value: "jul", label: "July" },
								{ value: "aug", label: "August" },
								{ value: "sep", label: "September" },
								{ value: "oct", label: "October" },
								{ value: "nov", label: "November" },
								{ value: "dec", label: "December" },
							]}
						/>
					</div>
					<div>
						<table className="table-auto w-full">
							<thead className="">
								<tr className="bg-CBG text-left ">
									<th className="px-5 py-3 rounded-l-2xl">Product Name</th>
									<th>Location</th>
									<th>Date - Time</th>
									<th>Piece</th>
									<th>Amount</th>
									<th className="rounded-r-2xl">Status</th>
								</tr>
							</thead>
							<tbody className="divide-y">
								<tr className="font-semibold hover:bg-gray-100 ">
									<td className="flex items-center gap-1 px-5 py-3 cursor-pointer">
										<Image src="/image/productIcon.png" alt="Product icon" width={36} height={36} />
										Apple Watch
									</td>
									<td>6096 Marjolaine Landing</td>
									<td>12.09.2019 - 12.53 PM</td>
									<td>423</td>
									<td>$34,295</td>
									<td>
										<span className="bg-CGreen text-white rounded-full px-3 py-1 ">Delivered</span>
									</td>
								</tr>
								<tr className="font-semibold hover:bg-gray-100">
									<td className="flex items-center gap-1 px-5 py-3 cursor-pointer">
										<Image src="/image/productIcon.png" alt="Product icon" width={36} height={36} />
										Apple Watch
									</td>
									<td>6096 Marjolaine Landing</td>
									<td>12.09.2019 - 12.53 PM</td>
									<td>423</td>
									<td>$34,295</td>
									<td>
										<span className="bg-CRed text-white rounded-full px-3 py-1 ">On Hold</span>
									</td>
								</tr>
								<tr className="font-semibold hover:bg-gray-100">
									<td className="flex items-center gap-1 px-5 py-3 cursor-pointer">
										<Image src="/image/productIcon.png" alt="Product icon" width={36} height={36} />
										Apple Watch
									</td>
									<td>6096 Marjolaine Landing</td>
									<td>12.09.2019 - 12.53 PM</td>
									<td>423</td>
									<td>$34,295</td>
									<td>
										<span className="bg-CBlue text-white rounded-full px-3 py-1 ">Processing</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Card>
			</div>
			{/* Revenue Chart Start */}
			<div className="grid grid-cols-1">
				<Card>
					<div className="flex justify-between mb-10">
						<p className="text-2xl font-bold">Revenue</p>
						<Select
							defaultValue="jan"
							className="w-32"
							options={[
								{ value: "jan", label: "January" },
								{ value: "feb", label: "February" },
								{ value: "mar", label: "March" },
								{ value: "apr", label: "April" },
								{ value: "may", label: "May" },
								{ value: "jun", label: "June" },
								{ value: "jul", label: "July" },
								{ value: "aug", label: "August" },
								{ value: "sep", label: "September" },
								{ value: "oct", label: "October" },
								{ value: "nov", label: "November" },
								{ value: "dec", label: "December" },
							]}
						/>
					</div>
					<div className="h-[270px] w-full">
						{/* <Image src="/image/revenueGraph.png" width={1070} height={270} alt="revenue graph" /> */}
						<RevenueChart />
					</div>
				</Card>
			</div>
			{/* Other Stats Start */}
			<div className="grid grid-cols-3 gap-5 ">
				{/* Customers Stats Start */}
				<Card>
					<p className="text-2xl font-bold mb-5">Customers</p>
					<div className="flex justify-center items-center">
						{/* <Image src="/image/customersGraph.png" width={148} height={148} alt="Customer Graph" /> */}
						<CustomersChart />
					</div>
					<div className="flex justify-between items-center mt-5">
						<div className="space-y-2 text-center">
							<p className="text-3xl font-bold">34,249</p>
							<p className="flex gap-1 items-center font-semibold">
								<FaCircle className="text-CBlue" /> New Customers
							</p>
						</div>
						<div className="space-y-2 text-center">
							<p className="text-3xl font-bold">14,020</p>
							<p className="flex gap-1 items-center font-semibold">
								<FaCircle className="text-CBlue opacity-20" /> Repeated Customers
							</p>
						</div>
					</div>
				</Card>
				{/* Featured Product Start */}
				<Card>
					<p className="text-2xl font-bold mb-5">Featured Product</p>
					<FPSlider />
				</Card>
				{/* Sales Analytics Start */}
				<Card>
					<p className="text-2xl font-bold mb-5">Sales Analytics</p>
					<div className="h-[270px] w-full">
						{/* <Image src="/image/salesGraph2.png" width={328} height={270} alt="sales analytics" /> */}
						<SalesAnalyticsChart />
					</div>
				</Card>
			</div>
			{/* Page Content End */}
		</div>
	);
}
