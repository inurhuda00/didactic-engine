<script lang="ts">
	function clickOutside(node) {
		const handleClick = (event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', node));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			},
		};
	}

	let open = false;
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="News homepages solution by inurhuda00 for FrontendMentor.io" />
	<meta name="keywords" content="Frontend Mentor, Homepage Component Challenge, inurhuda00" />
	<meta property="og:title" content="News homepage component tailwindcss | Frontend Mentor" />
	<meta property="og:description" content="News homepages solution by inurhuda00 for FrontendMentor.io" />
	<meta name="theme-color" content="#0000" />
	<meta name="msapplication-navbutton-color" content="#0000" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#0000" />

	<title>Frontend Mentor | News homepage tailwindcss</title>
</svelte:head>

<main class="bg-#FCFCFC relative flex w-screen flex-col items-center justify-center md:py-12">
	{#if open}
		<div class="relative z-10 transition-all" role="dialog">
			<div class="bg-#050505 fixed inset-0 cursor-pointer opacity-50" />
			<div
				class="fixed inset-y-0 right-0 flex w-full max-w-[20rem]"
				use:clickOutside
				on:click_outside={() => (open = !open)}>
				<div class="bg-#FCFCFC flex h-full w-full flex-col overflow-y-scroll py-6">
					<div class="px-4">
						<div class="flex items-start justify-end">
							<button type="button" on:click={() => (open = !open)}>
								<svg width="32" height="31" xmlns="http://www.w3.org/2000/svg" class="w-10">
									<g fill="#00001A" fill-rule="evenodd">
										<path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
										<path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
									</g>
								</svg>
							</button>
						</div>
					</div>
					<nav class="relative mt-6 flex-1 px-6">
						<ul class="grid space-y-5 pt-16">
							<li class="text-#525F7F font-semibold">Home</li>
							<li class="text-#525F7F font-semibold">New</li>
							<li class="text-#525F7F font-semibold">Popular</li>
							<li class="text-#525F7F font-semibold">Trending</li>
							<li class="text-#525F7F font-semibold">Categories</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	{/if}

	<header
		class="mx-auto mb-3 flex h-20 w-full max-w-2xl items-center justify-between p-6 px-4 md:h-[7.5rem] md:max-w-6xl lg:px-8">
		<a href="/">
			<span class="sr-only">Logo</span>
			<svg width="65" height="40" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M23.016 39.2c.317 0 .574-.093.77-.28.196-.187.294-.457.294-.812v-1.82c0-.448.033-.84.098-1.176.065-.336.145-.663.238-.98l5.09-18.122 4.822 18.57c.112.384.193.682.243.895l.023.099c.047.215.07.453.07.714v1.82c0 .355.098.625.294.812.196.187.453.28.77.28h10.696c.299 0 .55-.093.756-.28.205-.187.308-.457.308-.812v-1.82c0-.373.023-.705.07-.994.047-.29.135-.677.266-1.162L54.04 7.224c.299-1.25.765-2.254 1.4-3.01.635-.756 1.363-1.311 2.184-1.666l.672-.308c.336-.168.574-.331.714-.49.14-.159.21-.369.21-.63 0-.336-.117-.607-.35-.812C58.637.103 58.287 0 57.82 0h-8.904c-.467 0-.817.103-1.05.308-.233.205-.35.476-.35.812 0 .261.06.471.182.63.121.159.313.303.574.434l.616.224c1.12.41 1.871.999 2.254 1.764s.453 1.661.21 2.688l-5.535 23.486-6.477-25.81c-.133-.58-.17-1.018-.11-1.31l.026-.104c.093-.29.317-.49.672-.602l1.232-.336c.299-.112.518-.257.658-.434a.986.986 0 0 0 .21-.63c0-.355-.112-.63-.336-.826C41.468.098 41.122 0 40.656 0H24.78c-.448 0-.789.098-1.022.294-.233.196-.35.471-.35.826 0 .224.06.415.182.574.121.159.322.294.602.406l1.176.42c.261.093.462.243.602.448.14.205.294.607.462 1.204l1.751 6.742-5.553 19.475L16.128 4.48c-.147-.49-.194-.898-.14-1.223l.028-.135c.093-.345.327-.574.7-.686l1.456-.336c.504-.168.756-.504.756-1.008 0-.336-.112-.602-.336-.798C18.368.098 18.022 0 17.556 0H1.344C.896 0 .56.098.336.294.112.49 0 .756 0 1.092c0 .224.056.434.168.63.112.196.29.35.532.462l1.232.392c.355.13.625.308.812.532.187.224.345.579.476 1.064l7.84 30.408c.112.43.191.751.238.966.047.215.07.462.07.742v1.82c0 .355.103.625.308.812.205.187.467.28.784.28h10.556Zm34.804.7c1.195 0 2.263-.29 3.206-.868a6.338 6.338 0 0 0 2.24-2.338c.55-.98.826-2.04.826-3.178 0-1.157-.275-2.212-.826-3.164a6.325 6.325 0 0 0-2.24-2.282c-.943-.57-2.011-.854-3.206-.854-1.157 0-2.207.285-3.15.854a6.325 6.325 0 0 0-2.24 2.282c-.55.952-.826 2.007-.826 3.164 0 1.139.275 2.198.826 3.178.55.98 1.297 1.76 2.24 2.338.943.579 1.993.868 3.15.868Z"
					fill="#00001A" />
			</svg>
		</a>
		<div class="flex-initial md:hidden">
			<span class="sr-only">open menu</span>
			<button type="button" on:click={() => (open = !open)}>
				<svg width="40" height="17" xmlns="http://www.w3.org/2000/svg" class="w-10">
					<g fill="#00001A" fill-rule="evenodd">
						<path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
						<path d="M0 0h40v3H0z" />
					</g>
				</svg>
			</button>
		</div>
		<nav class="hidden md:block">
			<ul class="flex items-center justify-end gap-x-10">
				<li class="text-#525F7F">
					<a href="/">Home</a>
				</li>
				<li class="text-#525F7F">
					<a href="/">New</a>
				</li>
				<li class="text-#525F7F">
					<a href="/">Popular</a>
				</li>
				<li class="text-#525F7F">
					<a href="/">Trending</a>
				</li>
				<li class="text-#525F7F">
					<a href="/">Categories</a>
				</li>
			</ul>
		</nav>
	</header>

	<main>
		<div class="w-full max-w-2xl md:flex md:max-w-[71.5rem]">
			<div class="px-4 md:w-4/6">
				<picture class="w-full">
					<source media="(min-width: 1440)" srcset="/news-homepage/assets/images/image-web-3-mobile.jpg" />
					<img src="/news-homepage/assets/images/image-web-3-desktop.jpg" alt="web3 thumbnail" />
				</picture>
				<article class="mt-6 md:mt-8 md:flex">
					<header class="mb-2 md:w-1/2 md:text-6xl">
						<h2 class="font-inter text-5xl font-extrabold">The Bright Future of Web 3.0?</h2>
					</header>
					<footer class="md:w-1/2 md:pl-4">
						<p class="text-#525F7F mb-6 text-[15px] leading-7">
							We dive into the next evolution of the web that claims to put the power of the platforms
							back into the hands of the people. But is it really fulfilling its promise?
						</p>

						<button
							class="bg-#FF5C5C text-#FCFCFC px-10 py-3 text-xs font-semibold uppercase tracking-[0.2em] md:px-10 md:py-4">
							Read more
						</button>
					</footer>
				</article>
			</div>
			<div class="mt-12 px-4 md:mt-0 md:w-2/6">
				<section class="bg-#050505 p-8 md:pb-0">
					<h2 class="text-#FFA24C text-4xl font-bold">New</h2>
					<ul class="divide-#525F7F divide-y md:mt-3">
						<li class="py-12 md:py-6">
							<h3 class="text-#FCFCFC mb-3.5 text-lg font-semibold">Hydrogen VS Electric Cars</h3>
							<p class="text-#B3BFD7 text-[15px]">Will hydrogen-fueled cars ever catch up to EVs?</p>
						</li>
						<li class="py-12 md:py-6">
							<h3 class="text-#FCFCFC mb-3.5 text-lg font-semibold">The Downsides of AI Artistry</h3>
							<p class="text-#B3BFD7 text-[15px]">
								What are the possible adverse effects of on-demand AI image generation?
							</p>
						</li>
						<li class="py-12 md:py-6">
							<h3 class="text-#FCFCFC mb-3.5 text-lg font-semibold">Is VC Funding Drying Up?</h3>
							<p class="text-#B3BFD7 text-[15px]">
								Private funding by VC firms is down 50% YOY. We take a look at what that means.
							</p>
						</li>
					</ul>
				</section>
			</div>
		</div>
		<div class="w-full max-w-2xl px-4 pt-16 md:max-w-[71.5rem]">
			<div class="grid gap-12 md:grid-cols-3 md:gap-4">
				<section class="flex flex-initial">
					<picture>
						<img
							src="/news-homepage/assets/images/image-retro-pcs.jpg"
							alt="thumb reviving retro pcs"
							class="w-28 object-cover p-1.5 md:w-36" />
					</picture>
					<div class="ml-4 flex-initial">
						<span class="text-#B3BFD7 text-3xl font-bold">01</span>
						<h3 class="py-2 text-lg font-extrabold md:pb-1 md:pt-2">Reviving Retro PCs</h3>
						<p class="text-#525F7F text-[15px]">What happens when old PCs are given modern upgrades?</p>
					</div>
				</section>

				<section class="flex flex-initial">
					<picture>
						<img
							src="/news-homepage/assets/images/image-top-laptops.jpg"
							alt="thumb laptops of 2022"
							class="w-28 object-cover p-1.5 md:w-36" />
					</picture>
					<div class="ml-4 flex-initial">
						<span class="text-#B3BFD7 text-3xl font-bold">02</span>
						<h3 class="py-2 text-lg font-extrabold md:pb-1 md:pt-2">Top 10 Laptops of 2022</h3>
						<p class="text-#525F7F text-[15px]">Our best picks for various needs and budgets.</p>
					</div>
				</section>

				<section class="flex flex-initial">
					<picture>
						<img
							src="/news-homepage/assets/images/image-gaming-growth.jpg"
							alt="thumb growth of gaming"
							class="w-28 object-cover p-1.5 md:w-36" />
					</picture>
					<div class="ml-4 flex-initial">
						<span class="text-#B3BFD7 text-3xl font-bold">03</span>
						<h3 class="py-2 text-lg font-extrabold md:pb-1 md:pt-2">The Growth of Gaming</h3>
						<p class="text-#525F7F leading-7 md:text-[15px] md:leading-6">
							How the pandemic has sparked fresh opportunities.
						</p>
					</div>
				</section>
			</div>
		</div>
	</main>
</main>
