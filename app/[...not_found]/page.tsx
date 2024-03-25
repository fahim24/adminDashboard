import { notFound } from "next/navigation";
import { Metadata } from "next";
// Title and Metadata for the products Page
export const metadata: Metadata = {
	title: "Not Found",
};

export default function NotFoundCatchAll() {
	notFound();
}
