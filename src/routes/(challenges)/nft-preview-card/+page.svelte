<svelte:head>
	<title>Nft Preview Card Component | Frontend Mentor</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		name="description"
		content="Nft Preview Card Component  tailwindcss, unocss, svelte solution by inurhuda00 for FrontendMentor.io" />
	<meta name="keywords" content="Frontend Mentor, Homepage Component Challenge, inurhuda00" />
	<meta property="og:title" content="Nft Preview Card Component tailwindcss, unocss, svelte | Frontend Mentor" />
	<meta
		property="og:description"
		content="Nft Preview Card Component  solution by inurhuda00 for FrontendMentor.io" />
	<meta name="theme-color" content="#00FFFF" />
	<meta name="msapplication-navbutton-color" content="#00FFFF" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#00FFFF" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet" />
</svelte:head>

<div class="bg-#0D131E flex min-h-screen w-screen flex-col items-center justify-center py-12 lg:p-0">
	<div class="bg-#1B2430 flex w-full max-w-[17.6rem] flex-col rounded-xl p-6 lg:p-5">
		<img
			src="/nft-preview-card/images/image-equilibrium.jpg"
			alt={'qr-code image'}
			class="overflow-hidden rounded-lg" />
		<div class="text-#9ED1D9 font-outfit w-full max-w-xs pt-4 font-light">
			<h1 class="mb-3 text-xl font-bold text-white">Equilibrium #3429</h1>
			<p class="font-outfit mb-4 text-sm mix-blend-luminosity">
				Our Equilibrium collection promotes balance and calm.
			</p>
			<ul class="mb-4 flex justify-between text-xs">
				<li class="text-#00FFFF flex items-center gap-x-1 font-normal">
					<svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
							fill="#00FFF8" />
					</svg>
					0.041 ETH
				</li>
				<li class="flex items-center gap-x-2 mix-blend-luminosity">
					<svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
							fill="#8BACD9" />
					</svg>
					3 days left
				</li>
			</ul>
			<div class="border-#2B374A flex items-center gap-x-4 border-t pt-3">
				<img
					src="/nft-preview-card/images/image-avatar.png"
					alt={'qr-code image'}
					class="h-8 w-8 overflow-hidden rounded-full border border-white" />
				<p class="mix-blend-luminosity">
					Creation of <span class="text-white mix-blend-screen">Jules Wyvern</span>
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.font-outfit {
		font-family: 'Outfit', sans-serif;
	}
</style>
