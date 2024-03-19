import { Card, Select } from "antd";
import Image from "next/image";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
// import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

export default function Home() {
	// const data = [
	// 	{
	// 		name: "Page A",
	// 		uv: 4000,
	// 		amt: 2400,
	// 	},
	// 	{
	// 		name: "Page B",
	// 		uv: 3000,
	// 		amt: 2210,
	// 	},
	// 	{
	// 		name: "Page C",
	// 		uv: 2000,
	// 		amt: 2290,
	// 	},
	// 	{
	// 		name: "Page D",
	// 		uv: 2780,
	// 		amt: 2000,
	// 	},
	// 	{
	// 		name: "Page E",
	// 		uv: 1890,
	// 		amt: 2181,
	// 	},
	// 	{
	// 		name: "Page F",
	// 		uv: 2390,
	// 		amt: 2500,
	// 	},
	// 	{
	// 		name: "Page G",
	// 		uv: 3490,
	// 		amt: 2100,
	// 	},
	// ];
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
				<div>
					<Image src="/image/graph.png" width={1070} height={270} alt="sales graph" />
					{/* <AreaChart
						width={1070}
						height={270}
						data={data}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
						<defs>
							<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="30%" stopColor="#4880FF" stopOpacity={0.16} />
								<stop offset="70%" stopColor="#4880FF" stopOpacity={0} />
							</linearGradient>
						</defs>
						<XAxis dataKey="amt" />
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />

						<Area dataKey="uv" stroke="#4880FF" fillOpacity={1} fill="url(#colorUv)" />
					</AreaChart> */}
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
					<table className="table-auto">
						<thead>
							<tr className="bg-CBG">
								<th>Song</th>
								<th>Artist</th>
								<th>Year</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
								<td>Malcolm Lockyer</td>
								<td>1961</td>
							</tr>
							<tr>
								<td>Witchy Woman</td>
								<td>The Eagles</td>
								<td>1972</td>
							</tr>
							<tr>
								<td>Shining Star</td>
								<td>Earth, Wind, and Fire</td>
								<td>1975</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>
		</div>
	);
}
