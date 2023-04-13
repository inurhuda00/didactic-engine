<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';

	let summaries = [
		{
			category: 'Reaction',
			score: 80,
			icon: '/assets/images/icon-reaction.svg',
		},
		{
			category: 'Memory',
			score: 92,
			icon: '/assets/images/icon-memory.svg',
		},
		{
			category: 'Verbal',
			score: 61,
			icon: '/assets/images/icon-verbal.svg',
		},
		{
			category: 'Visual',
			score: 72,
			icon: '/assets/images/icon-visual.svg',
		},
	];
</script>

<svelte:head>
	<title>Order Summary Component | Frontend Mentor</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		name="description"
		content="Order Summary Component  tailwindcss, unocss, svelte solution by inurhuda00 for FrontendMentor.io" />
	<meta name="keywords" content="Frontend Mentor, Order Summary Component, inurhuda00" />
	<meta property="og:title" content="Order Summary Component tailwindcss, unocss, svelte | Frontend Mentor" />
	<meta property="og:description" content="Order Summary Component  solution by inurhuda00 for FrontendMentor.io" />
	<meta name="theme-color" content="#00FFFF" />
	<meta name="msapplication-navbutton-color" content="#00FFFF" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#00FFFF" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&display=swap"
		rel="stylesheet" />
</svelte:head>

<Wrapper>
	<div
		class="font-hanken mx-auto grid min-w-[24rem] max-w-sm border md:flex md:min-w-[46rem] md:max-w-[46rem] md:rounded-[2rem]">
		<header
			class="from-#7857FF to-#2E2BE9 grid place-items-center rounded-b-[2rem] bg-gradient-to-b md:w-1/2 md:rounded-t-[2rem]">
			<h1 class="text-#C8C7FF mt-8 font-semibold md:text-[1.3rem]">Your Result</h1>
			<div
				class="from-#4E21CA to-#2421CA/0 my-8 flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gradient-to-b p-6 text-5xl font-bold text-white md:h-52 md:w-52 md:text-7xl">
				<span>76</span>
				<span class="text-#C8C7FF/50 mt-2 text-base font-medium">of 100</span>
			</div>
			<div class="mx-auto mb-8 grid max-w-[15rem] place-items-center text-center text-white">
				<h2 class="text-2xl font-medium md:text-3xl">Great</h2>
				<p class="text-#C8C7FF mt-3 text-sm md:text-base">
					You scored higher than 65% of the people who have taken these tests.
				</p>
			</div>
		</header>

		<div class="grid gap-y-6 p-6 md:flex-1 md:px-10">
			<h3 class="text-lg font-bold md:text-[1.3rem]">Summary</h3>
			<ul class="grid gap-y-4">
				{#each summaries as { category, score, icon }}
					<li class="flex items-center justify-between rounded-lg px-4 py-4">
						<span class="flex items-center gap-x-4 font-medium">
							<img src="/results-summary{icon}" alt="icon summary" />
							{category}
						</span>
						<div class="text-#303B5A font-semibold">{score} <span class="text-#303B5A/50">/ 100</span></div>
					</li>
				{/each}
			</ul>
			<button class="bg-#303B5A rounded-full py-[0.825rem] text-lg font-medium text-white">Continue</button>
		</div>
	</div>
</Wrapper>

<style>
	ul > :nth-child(1) {
		--at-apply: bg-#FF5757/10 text-#FF5757;
	}
	ul > :nth-child(2) {
		--at-apply: bg-#FFB01F/10 text-#FFB01F;
	}
	ul > :nth-child(3) {
		--at-apply: bg-#00BD91/10 text-#00BD91;
	}
	ul > :nth-child(4) {
		--at-apply: bg-#1125D4/10 text-#1125D4;
	}

	.font-hanken {
		font-family: 'Hanken Grotesk', sans-serif;
	}
</style>
