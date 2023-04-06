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
	<meta name="theme-color" content="#0000" />
	<meta name="msapplication-navbutton-color" content="#0000" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#0000" />
</svelte:head>

<main class="bg-#D6E2F0 flex flex-col items-center justify-center w-screen h-screen">
	<div class="flex-col flex max-w-xs w-full bg-white rounded-3xl p-4 min-w-[20rem]">
		<img
			src="/qr-code-card/images/image-qr-code.png"
			alt={`qr-code image`}
			class="overflow-hidden rounded-2xl max-w-xs" />
		<div class="text-center w-full py-8 max-w-xs px-4">
			<h1 class="font-bold text-xl text-#1F3251">Improve your front-end skills by building projects</h1>
			<p class="pt-4 text-#7B879D font-sans">
				Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
			</p>
		</div>
	</div>
</main>
