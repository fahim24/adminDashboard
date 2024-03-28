import React from "react";
// Import from next
import { Metadata } from "next";
import Image from "next/image";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight, FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export const metadata: Metadata = {
	title: "Product Stocks",
};

export default function ProductStock() {
	return (
		// product Stock Page Start
		<div className="space-y-5">
			{/* Page Heading Start*/}
			<div className="flex justify-between items-center gap-5">
				<h1 className="text-3xl text-CDark font-bold">Product Stocks</h1>
				<Input
					placeholder="Search product name"
					className="bg-white rounded-full w-60"
					prefix={<CiSearch />}
				/>
			</div>
			{/* Product Stock Start */}
			<div className="bg-white border rounded-2xl">
				<table className="table-auto w-full  ">
					<thead>
						<tr className="text-left border-b">
							<th className="px-5 py-2.5">Image</th>
							<th>Product Name</th>
							<th>Category</th>
							<th>Price</th>
							<th>Piece</th>
							<th>Available Color</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody className="divide-y text-sm">
						{/* Product Stock Item 1 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 px-5 py-2.5 cursor-pointer">
								<Image src="/image/stock1.png" alt="Product icon" width={60} height={60} />
							</td>
							<td>Apple Watch Series 4</td>
							<td>Digital Product</td>
							<td>$690.00</td>
							<td>63</td>
							<td>
								<div className="flex gap-2.5 items-center">
									<span className="size-5 rounded-full shrink-0 bg-black"></span>
									<span className="size-5 rounded-full shrink-0 bg-CGray"></span>
									<span className="size-5 rounded-full shrink-0 bg-CPink"></span>
								</div>
							</td>
							<td>
								<div className="bg-white rounded-lg divide-x border w-fit">
									<button className="py-2 px-3 text-CGray hover:bg-CLight hover:bg-opacity-5">
										<FaRegEdit />
									</button>
									<button className="py-2 px-3 hover:bg-CLight hover:bg-opacity-5 text-CRed">
										<RiDeleteBinLine />
									</button>
								</div>
							</td>
						</tr>
						{/* Product Stock Item 2 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 px-5 py-2.5 cursor-pointer">
								<Image src="/image/stock2.png" alt="Product icon" width={60} height={60} />
							</td>
							<td>Microsoft Headsquare</td>
							<td>Digital Product</td>
							<td>$190.00</td>
							<td>13</td>
							<td>
								<div className="flex gap-2.5 items-center">
									<span className="size-5 rounded-full shrink-0 bg-black"></span>
									<span className="size-5 rounded-full shrink-0 bg-CPink"></span>
									<span className="size-5 rounded-full shrink-0 bg-CBlue"></span>
									<span className="size-5 rounded-full shrink-0 bg-COrange"></span>
								</div>
							</td>
							<td>
								<div className="bg-white rounded-lg divide-x border w-fit">
									<button className="py-2 px-3 text-CGray hover:bg-CLight hover:bg-opacity-5">
										<FaRegEdit />
									</button>
									<button className="py-2 px-3 hover:bg-CLight hover:bg-opacity-5 text-CRed">
										<RiDeleteBinLine />
									</button>
								</div>
							</td>
						</tr>
						{/* Product Stock Item 3 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 px-5 py-2.5 cursor-pointer">
								<Image src="/image/stock3.png" alt="Product icon" width={60} height={60} />
							</td>
							<td>Women’s Dress</td>
							<td>Fashion</td>
							<td>$640.00</td>
							<td>635</td>
							<td>
								<div className="flex gap-2.5 items-center">
									<span className="size-5 rounded-full shrink-0 bg-fuchsia-800"></span>
									<span className="size-5 rounded-full shrink-0 bg-sky-300"></span>
									<span className="size-5 rounded-full shrink-0 bg-indigo-900"></span>
									<span className="size-5 rounded-full shrink-0 bg-blue-700"></span>
								</div>
							</td>
							<td>
								<div className="bg-white rounded-lg divide-x border w-fit">
									<button className="py-2 px-3 text-CGray hover:bg-CLight hover:bg-opacity-5">
										<FaRegEdit />
									</button>
									<button className="py-2 px-3 hover:bg-CLight hover:bg-opacity-5 text-CRed">
										<RiDeleteBinLine />
									</button>
								</div>
							</td>
						</tr>
						{/* Product Stock Item 4 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 px-5 py-2.5 cursor-pointer">
								<Image src="/image/stock4.png" alt="Product icon" width={60} height={60} />
							</td>
							<td>Samsung A50</td>
							<td>Mobile</td>
							<td>$400.00</td>
							<td>67</td>
							<td>
								<div className="flex gap-2.5 items-center">
									<span className="size-5 rounded-full shrink-0 bg-blue-700"></span>
									<span className="size-5 rounded-full shrink-0 bg-black"></span>
									<span className="size-5 rounded-full shrink-0 bg-fuchsia-800"></span>
								</div>
							</td>
							<td>
								<div className="bg-white rounded-lg divide-x border w-fit">
									<button className="py-2 px-3 text-CGray hover:bg-CLight hover:bg-opacity-5">
										<FaRegEdit />
									</button>
									<button className="py-2 px-3 hover:bg-CLight hover:bg-opacity-5 text-CRed">
										<RiDeleteBinLine />
									</button>
								</div>
							</td>
						</tr>
						{/* Product Stock Item 5 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 px-5 py-2.5 cursor-pointer">
								<Image src="/image/stock5.png" alt="Product icon" width={60} height={60} />
							</td>
							<td>Camera</td>
							<td>Electronic</td>
							<td>$420.00</td>
							<td>52</td>
							<td>
								<div className="flex gap-2.5 items-center">
									<span className="size-5 rounded-full shrink-0 bg-blue-700"></span>
									<span className="size-5 rounded-full shrink-0 bg-black"></span>
									<span className="size-5 rounded-full shrink-0 bg-fuchsia-800"></span>
								</div>
							</td>
							<td>
								<div className="bg-white rounded-lg divide-x border w-fit">
									<button className="py-2 px-3 text-CGray hover:bg-CLight hover:bg-opacity-5">
										<FaRegEdit />
									</button>
									<button className="py-2 px-3 hover:bg-CLight hover:bg-opacity-5 text-CRed">
										<RiDeleteBinLine />
									</button>
								</div>
							</td>
						</tr>
						{/* Product Stock Item 6 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 px-5 py-2.5 cursor-pointer">
								<Image src="/image/stock2.png" alt="Product icon" width={60} height={60} />
							</td>
							<td>Microsoft Headsquare</td>
							<td>Digital Product</td>
							<td>$190.00</td>
							<td>13</td>
							<td>
								<div className="flex gap-2.5 items-center">
									<span className="size-5 rounded-full shrink-0 bg-black"></span>
									<span className="size-5 rounded-full shrink-0 bg-CPink"></span>
									<span className="size-5 rounded-full shrink-0 bg-CBlue"></span>
									<span className="size-5 rounded-full shrink-0 bg-COrange"></span>
								</div>
							</td>
							<td>
								<div className="bg-white rounded-lg divide-x border w-fit">
									<button className="py-2 px-3 text-CGray hover:bg-CLight hover:bg-opacity-5">
										<FaRegEdit />
									</button>
									<button className="py-2 px-3 hover:bg-CLight hover:bg-opacity-5 text-CRed">
										<RiDeleteBinLine />
									</button>
								</div>
							</td>
						</tr>
						{/* Product Stock Item 7 */}
						<tr className="font-semibold hover:bg-gray-100 ">
							<td className="flex items-center gap-1 px-5 py-2.5 cursor-pointer">
								<Image src="/image/stock3.png" alt="Product icon" width={60} height={60} />
							</td>
							<td>Women’s Dress</td>
							<td>Fashion</td>
							<td>$640.00</td>
							<td>635</td>
							<td>
								<div className="flex gap-2.5 items-center">
									<span className="size-5 rounded-full shrink-0 bg-fuchsia-800"></span>
									<span className="size-5 rounded-full shrink-0 bg-sky-300"></span>
									<span className="size-5 rounded-full shrink-0 bg-indigo-900"></span>
									<span className="size-5 rounded-full shrink-0 bg-blue-700"></span>
								</div>
							</td>
							<td>
								<div className="bg-white rounded-lg divide-x border w-fit">
									<button className="py-2 px-3 text-CGray hover:bg-CLight hover:bg-opacity-5">
										<FaRegEdit />
									</button>
									<button className="py-2 px-3 hover:bg-CLight hover:bg-opacity-5 text-CRed">
										<RiDeleteBinLine />
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			{/* Pagination Start */}
			<div className="flex items-center justify-between">
				<p className="font-semibold text-CLight">Showing 1-7 of 78</p>
				<div className="bg-white rounded-lg divide-x border">
					<button className="py-3 px-5 hover:bg-CLight hover:bg-opacity-20">
						<FaAngleLeft />
					</button>
					<button className="py-3 px-5 hover:bg-CLight hover:bg-opacity-20">
						<FaAngleRight />
					</button>
				</div>
			</div>
		</div>
	);
}
