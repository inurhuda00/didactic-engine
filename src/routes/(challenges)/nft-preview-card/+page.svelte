<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet" />
</svelte:head>

<div class="bg-#0D131E flex flex-col items-center justify-center w-screen py-24 lg:p-0 min-h-screen">
	<div class="flex-col flex max-w-[17.6rem] w-full bg-#1B2430 rounded-xl p-6 lg:p-5">
		<img
			src="/nft-preview-card/images/image-equilibrium.jpg"
			alt={'qr-code image'}
			class="overflow-hidden rounded-lg" />
		<div class="w-full pt-4 max-w-xs text-#9ED1D9 font-outfit font-light">
			<h1 class="font-bold text-xl text-white mb-3">Equilibrium #3429</h1>
			<p class="mb-4 font-outfit text-sm mix-blend-luminosity">
				Our Equilibrium collection promotes balance and calm.
			</p>
			<ul class="flex justify-between mb-4 text-xs">
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
			<div class="border-t border-#2B374A pt-3 flex items-center gap-x-4">
				<img
					src="/nft-preview-card/images/image-avatar.png"
					alt={'qr-code image'}
					class="overflow-hidden rounded-full w-8 h-8 border border-white" />
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
