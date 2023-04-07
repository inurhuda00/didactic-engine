<svelte:head>
	<title>Product Preview Card Component | Frontend Mentor</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		name="description"
		content="Product Preview Card Component  tailwindcss, unocss, svelte solution by inurhuda00 for FrontendMentor.io" />
	<meta name="keywords" content="Frontend Mentor, Homepage Component Challenge, inurhuda00" />
	<meta property="og:title" content="Product Preview Card Component tailwindcss, unocss, svelte | Frontend Mentor" />
	<meta
		property="og:description"
		content="Product Preview Card Component  solution by inurhuda00 for FrontendMentor.io" />
	<meta name="theme-color" content="#3c8067" />
	<meta name="msapplication-navbutton-color" content="#3c8067" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#3c8067" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=Montserrat:wght@500;700&display=swap"
		rel="stylesheet" />
</svelte:head>

<div class="bg-#f2ebe3 flex min-h-screen w-screen flex-col items-center justify-center py-24 lg:p-0">
	<div class="flex w-full min-w-[20rem] max-w-[21.5rem] flex-col rounded-xl bg-white md:max-w-[38.8rem] md:flex-row">
		<picture
			class="max-w-[21.5rem] overflow-hidden rounded-t-xl md:w-1/2 md:max-w-[38.8rem] md:rounded-none md:rounded-l-xl">
			<source media="(min-width: 768px)" srcset="/product-preview/images/image-product-desktop.jpg" />
			<img src="/product-preview/images/image-product-mobile.jpg" alt={'Image product'} />
		</picture>

		<div class="text-#6c7289 font-mon grid gap-y-4 p-6 text-[14px] md:w-1/2 md:p-8">
			<span class="text-xs uppercase tracking-[0.4em]">Perfume</span>

			<h2 class="text-#1c232b font-fra mb-1 text-[2.15rem] font-bold leading-8 md:max-w-[14rem]">
				Gabrielle Essence Eau De Parfum
			</h2>
			<p class="text-sm leading-6 md:max-w-[14rem]">
				A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House
				of CHANEL.
			</p>

			<div class="flex items-center gap-x-6">
				<span class="text-#3c8067 font-fra text-[2.15rem] font-bold">$149.99</span>
				<span class="text-sm line-through"> $169.99 </span>
			</div>
			<button class="bg-#3c8067 flex items-center justify-center gap-x-3 rounded-lg py-3 text-white">
				<svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"
					><path
						d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
						fill="#FFF" /></svg>
				Add to Cart
			</button>
		</div>
	</div>
</div>

<style>
	.font-mon {
		font-family: 'Montserrat', sans-serif;
	}

	.font-fra {
		font-family: 'Fraunces', serif;
	}
</style>
