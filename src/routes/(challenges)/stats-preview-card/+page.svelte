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
	<meta name="theme-color" content="#A17DF7" />
	<meta name="msapplication-navbutton-color" content="#A17DF7" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#A17DF7" />
</svelte:head>

<main
	class="bg-#02030A md:min-w-5xl min-h-4xl lg:min-h-auto flex h-screen w-screen flex-col items-center justify-center">
	<div class="bg-#1A1D2B rounded-xl px-6 py-12 lg:p-0">
		<div class="flex max-w-xs flex-col lg:max-w-[69rem] lg:flex-row lg:justify-between">
			<div class="relative pl-4 lg:order-1 lg:w-1/2">
				<div class="bg-#A17DF7 absolute h-full w-full max-w-xs rounded-lg mix-blend-multiply lg:max-w-2xl" />
				<img
					src="/stats-preview-card/images/image-header-desktop.jpg"
					alt="stats preview thumb"
					class="mx-auto h-full w-full max-w-xs rounded-lg object-cover lg:max-w-2xl" />
			</div>

			<div class="lg:w-1/2 lg:py-12 lg:pl-16">
				<h1
					class="px-12 pt-6 text-center text-xl font-bold leading-7 text-white lg:max-w-md lg:px-0 lg:text-left lg:text-4xl">
					Get <span class="text-#A17DF7">insights</span> that help your business grow.
				</h1>
				<p
					class="mt-4 max-w-xs px-8 text-center text-sm text-white opacity-50 lg:max-w-sm lg:px-0 lg:pt-4 lg:text-left lg:text-base lg:leading-7">
					Discover the benefits og data analytics and make better decisions regarding revenue, Customer
					experience, and overall efficiency.
				</p>

				<ul
					class="grid place-items-center gap-4 pt-12 text-center lg:grid-cols-3 lg:place-items-start lg:gap-2">
					<li>
						<h4 class="text-xl font-bold text-white lg:text-2xl">10k+</h4>
						<p class="mt-2 text-[10px] uppercase text-white opacity-40">Companies</p>
					</li>
					<li>
						<h4 class="text-xl font-bold text-white lg:text-2xl">314</h4>
						<p class="mt-2 text-[10px] uppercase text-white opacity-40">Templates</p>
					</li>
					<li>
						<h4 class="text-xl font-bold text-white lg:text-2xl">12M+</h4>
						<p class="mt-2 text-[10px] uppercase text-white opacity-40">Queries</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</main>
