<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import { goto } from '$app/navigation';

	const gotoHello = () => {
		goto('/about/hello');
	};
</script>

<Card title="소개" navi="/about/hello" naviName="이사장 인사말">
	<div class="flex flex-col items-center mb-5">
		<div class="text-xl font-semibold mb-4">【‘청년밥상빨라우’ 설립 취지문】</div>
		<div class="flex flex-col lg:max-w-[700px]">
			<span class="break-keep">
				이곳은 천주교 재속전교가르멜회가 전교가르멜수녀회와 함께 운영하는 ‘청년밥상빨라우’입니다.
				청년들에게 든든한 한 끼 식사로 힘이 되어주고자 2024년 5월 문을 열었습니다.<br /><br />
				오늘의 청년들은 자신의 길을 찾고자 노력하지만 많은 어려움을 겪고 있기에 청년들이 희망을 갖고
				자신의 꿈을 찾아가는 사랑의 터가 되기를 바라는 마음입니다.<br /><br /> 어머니의 정성 어린
				따뜻한 밥상으로 청년들이 편안하게 쉬어가는 곳이 되기를 바라며, 이 공간을 운영하기 위해 함께
				해주시는 봉사자와 후원자님, 이용자분들께 감사드립니다. <br /><br />
			</span>
			<span class="ml-auto font-semibold">청년빨라우사회적협동조합 일동</span>
			<span class="ml-auto font-semibold">(명칭 ‘빨라우’: 전교가르멜수녀회의 창립자)</span>
		</div>
	</div>
	<hr />
	<div class="flex flex-col items-center mt-5 mb-5">
		<div class="text-xl font-semibold mb-4">함께하는 사람들</div>
		<div class="flex flex-col lg:max-w-[700px]">
			<span class="break-keep">
				청년밥상빨라우사회적협동조합 이사회<br /><br />

				- 이사장 <br />
				김혜숙 (재속전교가르멜회 회원)<br /><br />

				- 이사<br />
				이희숙 (재속전교가르멜회 회원)<br />
				최명옥 (재속전교가르멜회 회원)<br />
				안인옥 (재속전교가르멜회 회원)<br />
				김성분 (재속전교가르멜회 회원)<br />
				여서란 (재속전교가르멜회 회원)<br /><br />

				- 감사<br />
				김지연 (재속전교가르멜회 회원)<br />
			</span>
		</div>
	</div>
	<hr />
	<div class="flex flex-col items-center mt-5 mb-5">
		<div class="text-xl font-semibold mb-4">연혁</div>
		<div class="flex flex-col lg:max-w-[700px]">
			<span class="break-keep">
				<span class="font-semibold">2024년 05월 04일:</span> 청년밥상빨라우 인하대점 오픈<br /><br
				/>

				<span class="font-semibold">2024년 04월 18일:</span> 청년밥상빨라우 사업자등록<br /><br />

				<span class="font-semibold">2024년 04월 09일:</span> 청년빨라우사회적협동조합 설립<br /><br
				/>

				<span class="font-semibold">2024년 03월 27일:</span>영업신고증 발급<br /><br />

				<span class="font-semibold">2024년 02월 22일:</span>사회적협동조합 설립인가<br /><br />
			</span>
		</div>
	</div>
	<hr />
	<div class="flex flex-col items-center mt-5">
		<span class="text-xl font-semibold mb-4">· 로고 소개</span>
		<img src="/images/logointro.jpeg" width="500px" alt="로고 소개" />
	</div>
</Card>
