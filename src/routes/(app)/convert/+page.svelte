<script lang="ts">
	import color from 'color-convert';

	let text = 'Click to Copy';
	let input: string = `
### Primary

-   Light red: hsl(0, 100%, 67%)
-   Orangey yellow: hsl(39, 100%, 56%)
-   Green teal: hsl(166, 100%, 37%)
-   Cobalt blue: hsl(234, 85%, 45%)

## Gradients

-   Light slate blue (background): hsl(252, 100%, 67%)
-   Light royal blue (background): hsl(241, 81%, 54%)

-   Violet blue (circle): hsla(256, 72%, 46%, 1)
-   Persian blue (circle): hsla(241, 72%, 46%, 0)

### Neutral

-   White: hsl(0, 0%, 100%)
-   Pale blue: hsl(221, 100%, 96%)
-   Light lavender: hsl(241, 100%, 89%)
-   Dark gray blue: hsl(224, 30%, 27%)`;

	function replaceHSLWithHex(str: string): string {
		return str.replace(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/g, (_, h, s, l) => {
			return '#' + color.hsl.hex([parseInt(h), parseInt(s), parseInt(l)]);
		});
	}

	$: convert = replaceHSLWithHex(input);

	function clickToCopy(node: HTMLElement, target?: any) {
		async function copyText() {
			let text = target ? document.querySelector(target)?.innerText : node.innerText;

			if (!text) return;

			try {
				await navigator.clipboard.writeText(text);

				node.dispatchEvent(
					new CustomEvent('copied', {
						bubbles: true,
					})
				);
			} catch (error) {
				node.dispatchEvent(
					new CustomEvent('copyerror', {
						bubbles: true,
						detail: error,
					})
				);
			}
		}

		node.addEventListener('click', copyText);

		return {
			destroy() {
				node.removeEventListener('click', copyText);
			},
		};
	}

	function handleCopied() {
		text = 'Copied';
		window.setTimeout(() => {
			text = 'Click to Copy';
		}, 2000);
	}
</script>

<!-- <svelte:window on:copysuccess={handleCopied} /> -->

<main class="mx-auto mt-12 w-full max-w-6xl px-4">
	<header class="mb-3">
		<h1 class="py-12 text-center text-2xl font-bold uppercase">Convert color format HSL into HEX</h1>

		<span> example: </span>

		<pre class="mb-4 text-xs">{`
	### Primary

	-   Pale blue: hsl(225, 100%, 94%)
	-   Bright blue: hsl(245, 75%, 52%)

	### Neutral

	-   Very pale blue: hsl(225, 100%, 98%)
	-   Desaturated blue: hsl(224, 23%, 55%)
	-   Dark blue: hsl(223, 47%, 23%)
`}</pre>
		<span>*Note: Copy <code>style-guide.md</code> from frontendmentor and magic happend 🪄 </span>
	</header>
	<section class="mt-6 grid items-center gap-2 border-2 border-black p-4 text-sm md:grid-cols-2">
		<textarea
			bind:value={input}
			class="scrollbar-hide max-w-auto h-full min-h-[8rem] resize-none overflow-x-auto border-2 border-black p-2 focus:outline-none sm:max-w-none"
			placeholder="Masukan string dengan hsl" />
		<div
			class="max-w-auto relative h-full min-h-[8rem] cursor-pointer overflow-hidden sm:max-w-none"
			use:clickToCopy={'#text'}
			on:copied={handleCopied}>
			<button class="absolute right-0 top-0 border-2 border-black px-2 py-1">
				{text}
			</button>
			<pre class="h-full overflow-x-auto border-2 border-black p-2" id="text">{convert}</pre>
		</div>
	</section>
</main>
