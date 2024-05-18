<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="flex flex-col items-center">
	<div class="w-full xl:w-2/3">
		<div class="text-4xl font-bold mb-10">인사말</div>
		<div class="flex max-lg:flex-row">
			<div class="lg:w-3/5 max-lg:w-full text-xl break-keep mb-10 lg:mr-5">
				우리 청년들을 응원하는 청년빨라우사회적협동조합이 '청년 희망 펼치기' 라는 새로운 비전으로
				청년밥상사업을 시작하였습니다.
				<br /><br />
				청년들이 실패와 좌절에도 포기하지 않고 자신의 삶에 희망을 갖고 꿈을 향해 나아가는 데에 작은 협력자가
				되고자 합니다.
				<br /><br />
				오늘날 어려운 상황으로 인해 움추렸던 청년들이 삶을 향한 진정성 있는 꿈과 계획을 마음껏 펼치면서
				활짝 웃는 청년이 되기를 바랍니다.
				<br /><br />
				여러분의 지속적인 관심과 참여는 청년들에게 '함께 살아가는 삶의 가치'를 증진하는 뜻 깊은 자원이
				될 것입니다.
				<br /><br />
				앞으로도 저희 청년빨라우와 함께 청년들이 희망을 펼치는 일에 적극적인 응원을 보내주시길 부탁드립니다.
				감사합니다.
			</div>
			<div class="lg:w-2/5 max-lg:hidden xl:ml-auto">
				<img src="/images/char.jpeg" class="w-full" />
			</div>
		</div>
		<div class="pt-10 pb-20">
			<div class="text-xl text-right float-right">
				<span class="text-primary-700 font-semibold">청년빨라우 이사장</span>
				<br />
				<span>CMS 김혜숙 젤뚜르다</span>
			</div>
		</div>
	</div>
</div>
