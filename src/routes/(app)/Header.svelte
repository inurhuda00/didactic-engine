<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner" />

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/challenges' ? 'page' : undefined}>
				<a href="/challenges">Challenges</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/convert') ? 'page' : undefined}>
				<a href="/convert">Convert</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/inurhuda00/">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	:root {
		--color-text: 220, 15%, 55%;
		--color-theme-1: 218, 44%, 22%;
	}

	header {
		--at-apply: flex justify-between;
	}

	.corner {
		--at-apply: w-3em h-3em;
	}

	.corner a {
		--at-apply: flex items-center justify-center w-full h-full;
	}

	.corner img {
		--at-apply: object-contain w-2em h-2em;
	}

	ul {
		--at-apply: relative p-0 h-3em flex items-center justify-center bg-contain;
	}

	li {
		--at-apply: relative h-full flex items-center px-2 font-bold uppercase text-sm transition;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid #7b879d;
	}

	a:hover {
		color: #7b879d;
	}
</style>
