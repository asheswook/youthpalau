<script lang="ts">
	export let href: string;
	export let text: string;
</script>

<a
	class="max-lg:hidden mx-8 my-1 p-1 text-xl font-semibold hover:border-b-4 border-primary-700"
	{href}
>
	{text}
</a>
<a class="lg:hidden block p-4 border-b text-xl font-semibold ml-4" {href}>{text}</a>
