<script lang="ts">
	export let onClick = () => {};
	export let color = 'primary';
</script>

<button
	on:click={() => onClick()}
	class="flex text-lg font-bold py-2 px-4 m-2 rounded-lg text-center
	{color === 'primary'
		? 'bg-primary-700 hover:bg-primary-600 text-white'
		: 'bg-tertiary-700 hover:bg-tertiary-600 text-white'}
	"
>
	<slot />
</button>
