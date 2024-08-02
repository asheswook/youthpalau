<script lang="ts">
	export let count = 2717;

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

<div class="flex flex-col w-full text-3xl font-bold max-sm:text-xl break-keep">
	<div class="w-full">
		현재까지 총 <span class="text-primary-700">{start.toLocaleString('ko-KR')}</span> 그릇의
		밥공기로
		<br />
		<span class="text-primary-900">청년들의</span> 배를 든든히 채웠습니다.
	</div>
	<div class="flex ml-auto text-sm max-sm:text-xs font-medium mt-2 max-sm:mt-1 text-gray-600">
		*5월 7일 ~ 7월 31일 기준
	</div>
</div>

<br />
