import { challenges } from '$lib/getChallenges';
import type { LayoutLoad } from './$types';

export const load = (() => {
	return {
		challenges,
	};
}) satisfies LayoutLoad;
