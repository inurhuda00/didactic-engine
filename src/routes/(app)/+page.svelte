<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const challenges = data.challenges
		.sort((a, b) => new Date(b.done_at).getTime() - new Date(a.done_at).getTime())
		.filter((content) => content.status);
	const count = challenges.length % 2 ? 6 : 5;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="mx-auto max-w-7xl px-6 lg:px-8 py-24">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-base font-semibold leading-7">Everything you need</h2>
		<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Frontend Mentor Challenges</p>
		<p class="mt-6 text-lg leading-8 text-black">
			slicing design from
			<a
				href="https://www.frontendmentor.io/"
				target="_blank"
				rel="noopener noreferrer"
				class="font-bold text-black">
				Frontend Mentor Challenges
			</a>
			build with
			<a href="https://ruang.work/" target="_blank" rel="noopener noreferrer" class="font-bold text-black">
				tailwindcss,
			</a>
			<a href="https://unocss.dev/" target="_blank" rel="noopener noreferrer" class="font-bold text-black"
				>Unocss,
			</a>
			<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer" class="font-bold text-black"
				>& Svelte.
			</a>
		</p>
	</div>
</section>
<section class="relative overflow-hidden p-8">
	<ul
		class="grid grid-cols-1 lg:grid-cols-3 grid-flow-row-dense gap-4 font-mono text-sm text-center font-bold leading-6">
		{#each challenges as { title, url }, i}
			<li
				class="{(i + count) % 5
					? (i + count) % 3 === 0 || ((i + 1 + count) / 2) % 2 === 1
						? 'col-2'
						: 'col-1'
					: 'col-3'} rounded-xl border-2 border-black">
				<div class="rounded-xl">
					<iframe
						{title}
						class="w-full aspect-video rounded-xl transform min-h-640px"
						src={url}
						frameborder="0"
						allowfullscreen />
				</div>
			</li>
		{/each}
	</ul>
</section>

<style>
	.col-3 {
		--uno: col-span-3;
	}

	.col-2 {
		--uno: col-span-3;
	}

	.col-1 {
		--uno: col-span-3;
	}

	@media (min-width: 1024px) {
		.col-2 {
			--uno: col-span-2;
		}
		.col-1 {
			--uno: col-span-1;
		}
	}
</style>
