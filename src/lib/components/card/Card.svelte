<script lang="ts">
	import SmButton from '$lib/components/button/SmButton.svelte';
	import { goto } from '$app/navigation';

	export let navi = '';
	export let naviName = '';
	export let title = '';
</script>

<div class="bg-gray-100 rounded-xl max-md:p-4 md:p-6 border border-gray-300 grow basis-[400px]">
	{#if title}
		<div class="flex items-center flex-row mb-4">
			<div class="text-2xl font-semibold"><span>{title}</span></div>

			{#if navi}
				<div class="flex ml-auto">
					<SmButton
						color="gray"
						onClick={() => {
							goto(navi);
						}}>{naviName}&nbsp&nbsp></SmButton
					>
				</div>
			{/if}
		</div>
	{/if}
	<div class="flex justify-between flex-col">
		<slot />
	</div>
</div>
