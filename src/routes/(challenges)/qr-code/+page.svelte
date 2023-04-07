<svelte:head>
	<title>QR code component | Frontend Mentor</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		name="description"
		content="QR code component  tailwindcss, unocss, svelte solution by inurhuda00 for FrontendMentor.io" />
	<meta name="keywords" content="Frontend Mentor, Homepage Component Challenge, inurhuda00" />
	<meta property="og:title" content="QR code component tailwindcss, unocss, svelte | Frontend Mentor" />
	<meta property="og:description" content="QR code component  solution by inurhuda00 for FrontendMentor.io" />
	<meta name="theme-color" content="#1F3251" />
	<meta name="msapplication-navbutton-color" content="#1F3251" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#1F3251" />
</svelte:head>

<main class="bg-#D6E2F0 flex h-screen w-screen flex-col items-center justify-center">
	<div class="flex w-full min-w-[20rem] max-w-xs flex-col rounded-3xl bg-white p-4">
		<img
			src="/qr-code-card/images/image-qr-code.png"
			alt={`qr-code image`}
			class="max-w-xs overflow-hidden rounded-2xl" />
		<div class="w-full max-w-xs px-4 py-8 text-center">
			<h1 class="text-#1F3251 text-xl font-bold">Improve your front-end skills by building projects</h1>
			<p class="text-#7B879D pt-4 font-sans">
				Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
			</p>
		</div>
	</div>
</main>
