<!-- Button component in svelte with tailwindcss-->
<script>
	export let text = 'Button';
	export let onClick = () => {};
</script>

<button
	on:click={onClick}
	class="bg-primary-700 hover:bg-primary-600 text-white text-xl font-bold py-3 px-5 rounded"
>
	{text}
</button>
