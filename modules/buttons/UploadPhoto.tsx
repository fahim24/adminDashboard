"use client";
import React, { useRef } from "react";
import { FaCamera } from "react-icons/fa";

export default function UploadPhoto() {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const avatarRef = useRef<HTMLDivElement>(null);
	const iconRef = useRef<HTMLSpanElement>(null);

	const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0];
			const reader = new FileReader();

			reader.readAsDataURL(file);

			reader.onloadend = () => {
				if (avatarRef.current && iconRef.current) {
					iconRef.current.style.display = "none";
					avatarRef.current.setAttribute("aria-label", file.name);
					avatarRef.current.style.background = `url(${reader.result}) center center/cover`;
				}
			};
		}
	};
	return (
		<div>
			<input
				ref={fileInputRef}
				type="file"
				name="image"
				id="image"
				accept="image/*"
				onChange={handleFileInputChange}
				className="hidden"
			/>
			<div id="preview" className="flex flex-col gap-5 items-center justify-center">
				<div
					ref={avatarRef}
					id="avatar"
					className="bg-CGray bg-opacity-20 size-24 rounded-full flex items-center justify-center border hover:border-CBlue">
					<span ref={iconRef}>
						<FaCamera className="text-3xl" />
					</span>
				</div>
				<button
					onClick={handleButtonClick}
					id="upload-button"
					aria-labelledby="image"
					aria-describedby="image"
					className="border-none text-CBlue font-semibold hover:underline">
					Upload Photo
				</button>
			</div>
		</div>
	);
}
