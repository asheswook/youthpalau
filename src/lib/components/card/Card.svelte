<script lang="ts">
	export let title = '';
</script>

<div class="bg-gray-100 rounded-xl max-md:p-4 md:p-6 border border-gray-300 grow basis-[400px]">
	{#if title}
		<div class="text-2xl font-semibold mb-4">{title}</div>
	{/if}
	<div class="flex justify-between flex-col">
		<slot />
	</div>
</div>
