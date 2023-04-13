<script>
	import Wrapper from '$lib/components/Wrapper.svelte';
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
		href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap"
		rel="stylesheet" />
</svelte:head>

<Wrapper class="bg-#E0E8FF px-6">
	<div class="font-redhat max-w-[23.2rem] rounded-3xl bg-white">
		<img src="/order-summary/images/illustration-hero.svg" alt="illustration hero" class="w-full rounded-t-3xl" />

		<div class="mb-6 grid gap-y-6 px-6 pt-8 md:px-10">
			<div class="mx-auto max-w-xs text-center">
				<h1 class="mb-4 text-2xl font-extrabold">Order Summary</h1>
				<p class="text-#7280A7 text-sm">
					You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
				</p>
			</div>
			<div class="bg-#F5F7FF flex gap-x-5 rounded-2xl p-4">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
					<g fill="none" fill-rule="evenodd"
						><circle cx="24" cy="24" r="24" fill="#DFE6FB" /><path
							fill="#717FA6"
							fill-rule="nonzero"
							d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z" /></g>
				</svg>
				<div class="grid flex-1 items-center text-sm">
					<span class="font-bold">Annual Plan</span>
					<span class="text-#7280A7 text-sm">$59.99/year</span>
				</div>
				<button class="text-#3829E0 text-sm font-bold underline">Change </button>
			</div>
			<button class="bg-#3829E0 rounded-xl py-3 text-sm font-bold text-white">Proceed to Payment</button>
			<button class="text-#7280A7 -mt-4 rounded-xl bg-transparent py-3 text-sm font-bold">Cancel Order</button>
		</div>
	</div>
</Wrapper>

<style>
	.font-redhat {
		font-family: 'Red Hat Display', sans-serif;
	}
</style>
