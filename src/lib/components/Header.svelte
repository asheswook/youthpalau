<script lang="ts">
	export let count = 1000;
	let start = 0;

	const countUp = () => {
		const duration = 2000;
		const range = count - start;
		const increment = Math.ceil(range / (duration / 60));
		const timer = setInterval(() => {
			start += increment;
			if (start >= count) {
				clearInterval(timer);
				start = count;
			}
		}, 30);
	};

	countUp();
</script>

<div class="text-4xl font-bold">
	현재까지 총 <span class="text-primary-700">{start.toLocaleString('ko-KR')}</span> 그릇의 밥공기로
	<br />
	<span class="text-primary-9y00">청년들의</span> 배를 든든히 채웠습니다.
</div>
<br />
