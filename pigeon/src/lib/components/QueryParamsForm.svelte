<script lang="ts">
	import type { Request } from '$lib/Models'

	export let request: Request

	function add_query_param() {
		request.query_params.push({name: "", value: "", enabled: true})
		request.query_params = request.query_params
	}

	function delete_query_params() {
		request.query_params = []
		request.query_params = request.query_params
	}

	function delete_query_param(index: number) {
		request.query_params.splice(index, 1);
		request.query_params = request.query_params.filter(Boolean);
	}
</script>
<div class="btn-group variant-filled mb-5">
	<button type="button" class=" btn-sm" on:click={add_query_param}>Add</button>
	<button type="button" class=" btn-sm" on:click={delete_query_params}>Delete All</button>
</div>
{#each request.query_params as query_param, index}
	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] mb-4">
		<input class="p-0 text-xs m-0 pl-3"  bind:value={query_param.name} type="text" placeholder="name" disabled={!query_param.enabled} />
		<input class="p-0 text-xs m-0 pl-3" bind:value={query_param.value} type="text" placeholder="value" disabled={!query_param.enabled} />
		<div class="input-group-shim">
			<input bind:checked={query_param.enabled} class="checkbox" type="checkbox"/>
			<button on:click={() => delete_query_param(index)} type="button" class="btn-icon variant-filled m-2 ml-5">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
				</svg>
			</button>
		</div>
	</div>
{/each}