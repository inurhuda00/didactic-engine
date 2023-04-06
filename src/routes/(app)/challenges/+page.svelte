<script lang="ts">
	import type { PageData } from './$types';

	type TimeDiff = { hours: number; minutes: number; seconds: number };

	export let data: PageData;

	let challenges = data.challenges
		.sort((a, b) => new Date(b.done_at).getTime() - new Date(a.done_at).getTime())
		.filter((content) => content.status)
		.reduce((acc: Array<{ type: string; contents: PageData['challenges'] }>, curr: PageData['challenges'][0]) => {
			// mencari index objek dengan tipe yang sesuai
			const index = acc.findIndex((obj) => obj.type === curr.type);

			// jika objek dengan tipe tersebut belum ada, tambahkan objek baru
			if (index === -1) {
				acc.push({ type: curr.type, contents: [curr] });
			}
			// jika objek dengan tipe tersebut sudah ada, tambahkan data ke dalam array yang sudah ada
			else {
				acc[index]['contents'].push(curr);
			}

			return acc;
		}, []);

	function getTimeDiff(start: string, done: string): TimeDiff {
		const diff = new Date(done).getTime() - new Date(start).getTime();
		const hours = Math.floor(diff / (1000 * 60 * 60));
		const minutes = Math.floor((diff / (1000 * 60)) % 60);
		const seconds = Math.floor((diff / 1000) % 60);

		return {
			hours,
			minutes,
			seconds,
		};
	}
</script>

<svelte:head>
	<title>Components</title>
	<meta
		name="description"
		content="the results of slicing design from frontendmentor with tailwindcss by inurhuda00" />
</svelte:head>

<div class="relative mx-auto w-full max-w-container space-y-20 px-4 pt-20 sm:px-6 lg:px-8">
	<section id="product-marketing" class="scroll-mt-28">
		<div class="mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12">
			{#each challenges as { type, contents }}
				{#if contents.filter((content) => content.status).length}
					<section
						id="product-marketing-elements"
						class="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4">
						<h3 class="text-base font-semibold text-slate-900">{type}</h3>
						<ul
							class="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
							{#each contents as { title, done_at, thumb, url, start_at }}
								{@const diff = getTimeDiff(start_at, done_at)}
								<li>
									<div
										class="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
										<div
											class="relative aspect-[4.3/3] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
											<img
												src={thumb}
												alt={title}
												class="absolute inset-0 h-full w-full object-cover" />
										</div>
										<h4 class="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
											<a href={url}>
												<span class="absolute -inset-2.5 z-10" /><span class="relative"
													>{title}</span>
											</a>
										</h4>
										<div
											class="flex items-center justify-between relative mt-1.5 text-xs font-medium text-slate-500 line-clamp-2">
											<span>
												<!-- {new Date(done_at).toLocaleTimeString('id-ID', {
													hour: '2-digit',
													minute: '2-digit',
												})} -->
												{new Date(done_at).toLocaleDateString('id-ID', {
													year: 'numeric',
													month: 'long',
													day: 'numeric',
												})}</span>

											{diff.hours ? `${diff.hours} h ${diff.minutes} m` : `${diff.minutes} m`}
										</div>
									</div>
								</li>
							{/each}
						</ul>
					</section>
				{/if}
			{/each}
		</div>
	</section>
</div>
