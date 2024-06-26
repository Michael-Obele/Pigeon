<script lang="ts">
	import { onMount, type SvelteComponent } from 'svelte';
	import { getModalStore, type PaginationSettings, Paginator } from '@skeletonlabs/skeleton';
	import { invoke } from '@tauri-apps/api/tauri';
	import { duration_to_string, type History } from '$lib/Models';
	import { limit_chars } from '$lib/MethodUtils';
	import { X } from 'lucide-svelte';

	export let parent: SvelteComponent;
	const modalStore = getModalStore();

	let paginationSettings: PaginationSettings = {
		page: 0,
		limit: 5,
		size: 0,
		amounts: [1, 2, 5, 10]
	};

	let history: History = { requests: [] };
	$: paginatedSource = history.requests.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
	);

	onMount(async () => {
		try {
			history = await invoke('get_history');
			paginationSettings.size = history.requests.length;
		} catch (error) {
			console.error('Error fetching history:', error);
		}
	});
</script>

{#if $modalStore[0]}
	<div
		class="modal-example-fullscreen bg-surface-100-800-token flex h-screen w-screen items-center justify-center p-4"
	>
		<div class="flex flex-col items-center space-y-4">
			<h2 class="h2">Request History</h2>

			<div class="table-container">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>Time</th>
							<th>Request Url</th>
							<th>Method</th>
							<th>Status</th>
							<th>Size</th>
							<th>Speed</th>
						</tr>
					</thead>
					<tbody>
						{#each paginatedSource as request}
							<tr>
								<td>{new Date(request.time.secs_since_epoch * 1000).toUTCString()}</td>
								<td>{limit_chars(request.url, 75)}</td>
								<td>{request.method}</td>
								<td>{request.response_status}</td>
								<td>{request.size} B</td>
								<td>{duration_to_string(request.speed)}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<Paginator bind:settings={paginationSettings} ... showNumerals maxNumerals={1}></Paginator>
			<button class="variant-filled btn" on:click={parent.onClose}>
				<X class="mx-1" /> Close</button
			>
		</div>
	</div>
{/if}
