<script lang="ts">
	let text = 'Click to Copy';
	let input: string = ``;

	function replaceHSLWithHex(str: string): string {
		return str.replace(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/g, (_, h, s, l) => {
			const rgb = hslToRgb(parseInt(h), parseInt(s) / 100, parseInt(l) / 100);
			const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
			return hex;
		});
	}

	function hslToRgb(h: number, s: number, l: number): [number, number, number] {
		h /= 360;
		s /= 100;
		l /= 100;
		let r, g, b;
		if (s === 0) {
			r = g = b = l; // achromatic
		} else {
			const hue2rgb = (p: number, q: number, t: number) => {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			};
			const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			const p = 2 * l - q;
			r = hue2rgb(p, q, h + 1 / 3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1 / 3);
		}
		return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	}

	function rgbToHex(r: number, g: number, b: number): string {
		return (
			'#' +
			[r, g, b]
				.map((x) => {
					const hex = x.toString(16);
					return hex.length === 1 ? '0' + hex : hex;
				})
				.join('')
		);
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
	<section class="grid items-center gap-2 border-2 border-black p-4 md:grid-cols-2">
		<textarea
			bind:value={input}
			class="scrollbar-hide h-full min-h-[8rem] resize-none border-2 border-black p-2 focus:outline-none"
			placeholder="Masukan string dengan hsl" />
		<div class="relative h-full min-h-[8rem] cursor-pointer" use:clickToCopy={'#text'} on:copied={handleCopied}>
			<button class="absolute right-0 top-0 border-2 border-black px-2 py-1">
				{text}
			</button>
			<pre class="h-full border-2 border-black p-2" id="text">{convert}</pre>
		</div>
	</section>
</main>
