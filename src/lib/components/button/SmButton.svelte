<script lang="ts">
	export let onClick = () => {};
	export let color = 'primary';
</script>

<button
	on:click={() => onClick()}
	class="flex text-base max-sm:text-base font-bold py-2 px-5 rounded-xl text-center max-sm:py-2 max-sm:px-4 max-sm:text-md
		{color === 'primary' && 'bg-primary-600 hover:bg-primary-700 text-white'}
		{color === 'secondary' && 'bg-tertiary-500 hover:bg-tertiary-600 text-white'}
		{color === 'gray' && 'bg-gray-600 hover:bg-gray-700 text-white'}
	"
>
	<slot />
</button>
