<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { type IconType } from 'svelte-icons-pack';

	export let icon: IconType;
	export let bgColor: string = 'bg-gray-500';
	export let onClick = () => {};
</script>

<div
	class="flex flex-row items-center mb-2 last:mb-0 hover:bg-gray-200 active:bg-gray-200 rounded-xl p-3 transition-all"
	on:click={onClick}
	role="button"
>
	<div class="p-3.5 rounded-full text-3xl {bgColor}">
		<Icon src={icon} color="white" />
	</div>
	<div class="ml-4 mr-auto">
		<div class="flex flex-col">
			<slot />
		</div>
	</div>
	<!--		<Button color="gray">신청</Button>-->
</div>
