<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Header from '$lib/components/Header.svelte';
	import Modal from '$lib/components/modal/Modal.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import { FaSolidPersonDigging } from 'svelte-icons-pack/fa';
	import { Icon } from 'svelte-icons-pack';
	import { BiDonateHeart } from 'svelte-icons-pack/bi';
	import CardItem from '$lib/components/card/CardItem.svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	let modalActive = false;
	if (browser) {
		const active = localStorage.getItem('modalActive');
		if (active === 'true') {
			modalActive = true;
		} else if (active === 'false') {
			modalActive = false;
		} else {
			modalActive = true;
		}

		localStorage.setItem('modalActive', modalActive.toString());
	}

	const toggleModalActive = () => {
		modalActive = !modalActive;
		localStorage.setItem('modalActive', modalActive.toString());
	};

	const gotoVolunteer = () => {
		// Move to volunteer page
		goto('/volunteer');
	};
</script>

<Card>
	<div class="flex flex-row items-center w-full">
		<Header />
	</div>
</Card>
<Card>
	<CardItem icon={FaSolidPersonDigging} bgColor="bg-green-500" onClick={gotoVolunteer}>
		<div class="flex flex-col">
			<span class="text-base">청년밥상사업</span>
			<span class="text-lg text-gray-800 font-semibold">봉사 신청하기</span>
		</div>
	</CardItem>
	<a
		href="https://link.donationbox.co.kr/donationBoxList.jsp?campaignuid=IMs3rgPb3v"
		target="_blank"
	>
		<CardItem icon={BiDonateHeart} bgColor="bg-primary-400">
			<div class="flex flex-col">
				<span class="text-base">청년빨라우</span>
				<span class="text-lg text-gray-800 font-semibold">후원 신청하기</span>
			</div>
		</CardItem>
	</a>
</Card>
<Card title="청년밥상사업">
	<div class="mb-1">
		청년빨라우사회적협동조합은 청년들이 저렴한 가격에 한 끼 식사를 해결할 수 있도록 청년밥상사업을
		진행하고 있습니다. 첫 청년밥상사업은 <span class="font-semibold text-primary-800"
			>청년밥상빨라우 인하대점</span
		>으로 시작했습니다. 많은 관심과 응원 부탁드립니다.
	</div>
	<a href="https://naver.me/Ga284EOw" class="mb-3 ml-auto text-blue-600 underline" target="_blank"
		>인하대점 찾아오시는 길</a
	>
	<a class="flex flex-row" target="_blank" href="https://naver.me/Ga284EOw">
		<div class="rounded-l-xl overflow-hidden hover:brightness-75 transition-all w-1/2 h-1/2">
			<img src="/images/jjigae.png" alt="김치찌개" />
		</div>
		<div class="rounded-r-xl overflow-hidden hover:brightness-75 transition-all w-1/2">
			<img src="/images/people.png" alt="사람들" />
		</div>
	</a>
</Card>
<Card title="보도자료">
	<a
		class="ml-1 font-semibold text-blue-600 hover:text-blue-800 transition-all"
		target="_blank"
		href="https://www.catholictimes.org/article/20240506500204"
	>
		&#183; 가톨릭 신문 "청년들 몸과 마음 온기로 가득차길"
	</a>
	<span class="mb-3 font-semibold"
		>> 보글보글 김치찌개 3천원 ‘청년밥상빨라우’ 인하대점 개점 축복미사</span
	>
	<a
		class="rounded-xl overflow-hidden hover:brightness-75 transition-all"
		target="_blank"
		href="https://www.catholictimes.org/article/20240506500204"
	>
		<img src="/images/20240506500203.jpg" />
	</a>
</Card>

<Modal
	subject="여름휴가 안내"
	buttonText="닫기"
	active={modalActive}
	onConfirm={() => {
		toggleModalActive();
	}}
	>청년밥상빨라우를 아껴주시고 응원해주시는 청년들과 지역 주민분들께 감사합니다. 당 청년밥상빨라우는
	<b>8월 5일 (월)~8월 9일 (금)</b>까지 전 인원 <b>하계 휴가로 인해 매장을 운영하지 않습니다.</b>
	감사합니다.<br /><br />
	청년밥상빨라우사회적협동조합 드림
</Modal>
<!--<div-->
<!--	class="w-full card-shadow rounded-2xl h-96 border card-border-color overflow-hidden flex flex-col relative text-color"-->
<!--	style="background-color: rgb(196, 10, 19); border-color: rgb(240, 18, 29); box-shadow: rgba(255, 255, 255, 0.15) 0px 4px 4px -2px inset; max-width: 310px;"-->
<!--&gt;-->
<!--	<div class="p-4 sticky top-0 z-10">-->
<!--		<div class="flex items-center gap-1.5">-->
<!--			<div class="font-medium" style="color: rgb(255, 255, 255);">Customers</div>-->
<!--		</div>-->
<!--	</div>-->
<!--	<div-->
<!--		class="absolute top-1/3 -left-32 -translate-y-1/2 rounded-full w-80 h-80 blur-3xl mix-blend"-->
<!--		style="background-color: rgb(255, 98, 106);"-->
<!--	></div>-->
<!--	<div-->
<!--		class="absolute -top-56 left-1/2 -translate-x-1/2 rounded-full w-96 h-96 blur-3xl mix-blend"-->
<!--		style="background-color: rgb(255, 155, 160);"-->
<!--	></div>-->
<!--	<div class="absolute top-36 left-6">-->
<!--		<div class="flex items-start">-->
<!--			<div class="text-6xl font-normal tracking-tighter" style="color: rgb(255, 255, 255);">-->
<!--				1.553-->
<!--			</div>-->
<!--			<svg-->
<!--				xmlns="http://www.w3.org/2000/svg"-->
<!--				viewBox="0 0 20 20"-->
<!--				fill="currentColor"-->
<!--				class="w-8 h-8 ml-3"-->
<!--				style="color: rgb(255, 196, 199);"-->
<!--				><path-->
<!--					fill-rule="evenodd"-->
<!--					d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"-->
<!--					clip-rule="evenodd"-->
<!--				></path></svg-->
<!--			>-->
<!--		</div>-->
<!--		<div class="mt-4" style="color: rgb(255, 255, 255);">New customers in past 30 days</div>-->
<!--	</div>-->
<!--</div>-->
