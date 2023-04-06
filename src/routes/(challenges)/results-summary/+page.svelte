<script lang="ts">
	let html = `
        <div class="flex-col flex max-w-xs w-full bg-white rounded-3xl p-4 min-w-[20rem]">
            <img
                src="/qr-code-card/images/image-qr-code.png"
                alt="qr-code image"
                class="overflow-hidden rounded-2x max-w-xs"
            />
            <div class="text-center w-full py-8 max-w-xs px-4">
                <h1 class="font-bold text-xl">
                    Improve your front-end skills by building projects
                </h1>
                <p class="pt-4 text-#7B879D font-sans">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the
                    next level
                </p>
            </div>
        </div>`;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="bg-#D6E2F0 flex flex-col items-center justify-center w-screen h-screen">
	{@html html}
</div>
