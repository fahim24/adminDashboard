"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/core";
import Link from "next/link";

export default function EventCalendar() {
	const [currentEvents, setCurrentEvents] = useState([
		{
			title: "Digital Conference",
			start: "2024-04-08",
		},
		{
			title: "Weekend Festival",
			start: "2024-04-14",
		},
		{
			title: "Glastonbury Festival",
			start: "2024-04-18",
			end: "2024-04-21",
		},
		{
			title: "Glastonbury Festival",
			start: "2024-04-23",
		},
	]);

	return (
		<div className="flex flex-col lg:flex-row gap-5">
			<div className="w-full lg:w-1/4 bg-white rounded-xl p-5">
				<Sidebar currentEvents={currentEvents} />
			</div>
			<div className="w-full lg:w-3/4 bg-white rounded-xl p-5">
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					headerToolbar={{
						left: "today prev,next",
						center: "title",
						right: "timeGridDay,timeGridWeek,dayGridMonth",
					}}
					initialView="dayGridMonth"
					events={currentEvents}
				/>
			</div>
		</div>
	);
}

function Sidebar({ currentEvents }: any) {
	return (
		<>
			<Link href="/calendar/new-event">
				<button className="btn w-full mb-5">Add New Event</button>
			</Link>
			<h2 className="font-bold mb-3 text-xl">All Events ({currentEvents.length})</h2>
			<div className="divide-y">
				{currentEvents.map((event: any) => (
					<SidebarEvent key={event.id} event={event} />
				))}
			</div>
		</>
	);
}

function SidebarEvent({ event }: any) {
	return (
		<div key={event.id} className="flex gap-2 py-5 ">
			<div className="size-10 bg-CGray rounded-full"></div>
			<div>
				<b>{event.title}</b>
				<p>{formatDate(event.start, { year: "numeric", month: "short", day: "numeric" })}</p>
				<p>Locaton</p>
				<p>Attending Peoples</p>
			</div>
		</div>
	);
}
