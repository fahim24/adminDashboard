import { Card, Select } from "antd";
import Image from "next/image";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import MySlider from "@/modules/Sliders/MySlider";
import { SalesDetailsChart } from "@/modules/Charts/SalesDetailsChart";

export default function Dashboard() {
	return (
		<div className="space-y-5">
			<p className="text-3xl text-CDark font-bold">Dashboard</p>
			<div className="grid grid-cols-4 gap-5 ">
				<Card>
					<div className="flex justify-between">
						<div>
							<p className="text-CLight font-semibold">Total User</p>
							<p className="text-3xl text-CDark font-bold mt-3 mb-5">40,689</p>
						</div>
						<div>
							<Image src="/image/userIcon.png" width={60} height={60} alt="User icon" />
						</div>
					</div>
					<p className="flex gap-1 font-semibold text-CLight">
						<span className="text-CGreen flex items-center gap-1">
							<AiOutlineRise /> 8.5%
						</span>
						Up from yesterday
					</p>
				</Card>
				<Card>
					<div className="flex justify-between">
						<div>
							<p className="text-CLight font-semibold">Total Order</p>
							<p className="text-3xl text-CDark font-bold mt-3 mb-5">10293</p>
						</div>
						<div>
							<Image src="/image/orderIcon.png" width={60} height={60} alt="Order icon" />
						</div>
					</div>
					<p className="flex gap-1 font-semibold text-CLight">
						<span className="text-CGreen flex items-center gap-1">
							<AiOutlineRise /> 1.3%
						</span>
						Up from past week
					</p>
				</Card>
				<Card>
					<div className="flex justify-between">
						<div>
							<p className="text-CLight font-semibold">Total Sales</p>
							<p className="text-3xl text-CDark font-bold mt-3 mb-5">$89,000</p>
						</div>
						<div>
							<Image src="/image/salesIcon.png" width={60} height={60} alt="Sales icon" />
						</div>
					</div>
					<p className="flex gap-1 font-semibold text-CLight">
						<span className="text-CRed flex items-center gap-1">
							<AiOutlineFall /> 4.3%
						</span>
						Down from yesterday
					</p>
				</Card>
				<Card>
					<div className="flex justify-between">
						<div>
							<p className="text-CLight font-semibold">Total Pending</p>
							<p className="text-3xl text-CDark font-bold mt-3 mb-5">2040</p>
						</div>
						<div>
							<Image src="/image/pendingIcon.png" width={60} height={60} alt="Pending icon" />
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
				<div>
					<Image src="/image/revenueGraph.png" width={1070} height={270} alt="revenue graph" />
				</div>
			</Card>
			<div className="grid grid-cols-3 gap-5 ">
				<Card>
					<p className="text-2xl font-bold mb-5">Customers</p>
					<div className="flex justify-center items-center">
						<Image src="/image/customersGraph.png" width={148} height={148} alt="Customer Graph" />
					</div>
					<div className="flex gap-16 mt-5">
						<div className="space-y-2 text-center">
							<p className="text-3xl font-bold">34,249</p>
							<p className="flex gap-1 items-center font-semibold">
								<FaCircle className="text-CBlue" /> New Customers
							</p>
						</div>
						<div className="space-y-2 text-center">
							<p className="text-3xl font-bold">1420</p>
							<p className="flex gap-1 items-center font-semibold">
								<FaCircle className="text-CBlue opacity-20" /> Repeated
							</p>
						</div>
					</div>
				</Card>
				<Card>
					<p className="text-2xl font-bold mb-5">Featured Product</p>
					<MySlider />
				</Card>
				<Card>
					<p className="text-2xl font-bold mb-5">Sales Analytics</p>
					<div>
						<Image src="/image/salesGraph2.png" width={328} height={270} alt="sales analytics" />
					</div>
				</Card>
			</div>
		</div>
	);
}
