<script lang="ts">
	export let to = '';
</script>

<a
	href={to}
	class="bg-gray-100 px-3 py-2 first:rounded-l-xl last:rounded-r-xl text-center border-r border-gray-300"
>
	<slot />
</a>
