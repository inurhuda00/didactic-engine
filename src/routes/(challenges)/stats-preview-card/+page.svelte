<svelte:head>
	<title>Stats preview card component | Frontend Mentor</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		name="description"
		content="Stats preview card component  tailwindcss, unocss, svelte solution by inurhuda00 for FrontendMentor.io" />
	<meta name="keywords" content="Frontend Mentor, Homepage Component Challenge, inurhuda00" />
	<meta property="og:title" content="Stats preview card component tailwindcss, unocss, svelte | Frontend Mentor" />
	<meta
		property="og:description"
		content="Stats preview card component  solution by inurhuda00 for FrontendMentor.io" />
	<meta name="theme-color" content="#0000" />
	<meta name="msapplication-navbutton-color" content="#0000" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#0000" />
</svelte:head>

<main
	class="bg-#02030A flex flex-col items-center justify-center w-screen h-screen md:min-w-5xl min-h-4xl lg:min-h-auto">
	<div class="bg-#1A1D2B px-6 py-12 lg:p-0 rounded-xl">
		<div class="max-w-xs lg:max-w-[69rem] flex-col lg:flex-row flex lg:justify-between">
			<div class="relative lg:order-1 lg:w-1/2 pl-4">
				<div class="absolute mix-blend-multiply h-full w-full max-w-xs lg:max-w-2xl bg-#A17DF7 rounded-lg" />
				<img
					src="/stats-preview-card/images/image-header-desktop.jpg"
					alt="stats preview thumb"
					class="object-cover max-w-xs lg:max-w-2xl mx-auto rounded-lg h-full w-full" />
			</div>

			<div class="lg:py-12 lg:w-1/2 lg:pl-16">
				<h1
					class="text-xl leading-7 font-bold text-white text-center lg:text-left lg:text-4xl pt-6 px-12 lg:px-0 lg:max-w-md">
					Get <span class="text-#A17DF7">insights</span> that help your business grow.
				</h1>
				<p
					class="text-sm text-white opacity-50 max-w-xs px-8 lg:px-0 text-center lg:max-w-sm lg:text-left mt-4 lg:pt-4 lg:leading-7 lg:text-base">
					Discover the benefits og data analytics and make better decisions regarding revenue, Customer
					experience, and overall efficiency.
				</p>

				<ul
					class="grid place-items-center text-center gap-4 pt-12 lg:grid-cols-3 lg:gap-2 lg:place-items-start">
					<li>
						<h4 class="text-xl lg:text-2xl font-bold text-white">10k+</h4>
						<p class="uppercase text-white opacity-40 text-[10px] mt-2">Companies</p>
					</li>
					<li>
						<h4 class="text-xl lg:text-2xl font-bold text-white">314</h4>
						<p class="uppercase text-white opacity-40 text-[10px] mt-2">Templates</p>
					</li>
					<li>
						<h4 class="text-xl lg:text-2xl font-bold text-white">12M+</h4>
						<p class="uppercase text-white opacity-40 text-[10px] mt-2">Queries</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</main>
