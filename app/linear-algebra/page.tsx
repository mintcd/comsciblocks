'use client'

import React, { useState } from "react";
import Nav from "@components/nav";
import { lazy, Suspense } from "react";

const Chapter0 = lazy(() => import("./ch0"));
// const Chapter1 = lazy(() => import("./ch1"));
const Chapter4 = lazy(() => import("./ch4"));

export default function LinearAlgebra() {
	const [chapter, setChapter] = useState(0);

	function handleClick(chapter: number) {
		setChapter(chapter);
	}

	let content;
	switch (chapter) {
		case 0:
			content = <Chapter0 />;
			break;
		case 4:
			content = <Chapter4 />;
			break;
		default:
			content = null;
	}

	return (
		<div>
			<Nav />
			<div className="my-4 grid grid-cols-4 gap-4 text-left">
				<div id="side-bar" className="bg-slate-400 p-4">
					<div
						onClick={() => handleClick(0)}
						className="hover:opacity-75 cursor-pointer mb-2 text-white"
					>
						The Picture
					</div>
					<div
						onClick={() => handleClick(1)}
						className="hover:opacity-75 cursor-pointer mb-2 text-white"
					>
						Chapter 1 - Vector Spaces
					</div>
					<div
						onClick={() => handleClick(4)}
						className="hover:opacity-75 cursor-pointer mb-2 text-white"
					>
						Chapter 4 - Determinant
					</div>
				</div>

				<div className="col-span-3">
					<Suspense fallback={<div>Loading...</div>}>{content}</Suspense>
				</div>
			</div>
		</div>
	);
}

