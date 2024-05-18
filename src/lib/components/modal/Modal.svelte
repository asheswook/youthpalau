<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	export let subject = '';
	export let buttonText = '확인';
	export let onConfirm = () => {};
	export let active = false;

	// For animation
	let isVisible = false;
	$: visableEffect(active);
	const visableEffect = (active: boolean) => {
		if (active) {
			isVisible = true;
		} else {
			setTimeout(() => {
				isVisible = false;
			}, 300);
		}
	};
</script>

<div
	class="w-full h-full
	fixed top-0 left-0
	bg-gray-300 bg-opacity-50
	content-center
	{active ? 'opacity-100' : 'opacity-0'}
 	{!isVisible && '-z-10'}
	transition-opacity ease-in-out duration-300
	"
>
	<div
		class="
		lg:w-1/2
		md:w-3/4
		absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2

		max-md:w-11/12
		bg-white
		rounded-lg
		p-8 z-10
		border
		border-gray-300
		"
	>
		<div class="text-3xl mb-4">{subject}</div>
		<div class="text-xl mb-4"><slot /></div>
		<div class="float-right">
			<Button onClick={onConfirm}>{buttonText}</Button>
		</div>
	</div>
</div>
