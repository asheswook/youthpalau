<script lang="ts">
	export let to = '';
</script>

<a
	href={to}
	class="bg-gray-100 hover:bg-gray-300 transition-all px-4 py-2 rounded-xl text-center mr-4 last:mr-0"
>
	<slot />
</a>
