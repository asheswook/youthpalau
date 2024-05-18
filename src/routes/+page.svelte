<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Header from '$lib/components/Header.svelte';
	import Modal from '$lib/components/modal/Modal.svelte';

	let modalActive = false;
	const toggleModalActive = (): void => {
		modalActive = !modalActive;
	};

	let modal2Active = false;
	const toggleModal2Active = (): void => {
		modal2Active = !modal2Active;
	};

	let imgBoxWidth = 300;
	let imgBoxHeight = 280;
	let imgBoxBarHeight = 50;
</script>

<Modal
	subject="알림"
	buttonText="닫기"
	active={modalActive}
	onConfirm={() => {
		toggleModalActive();
	}}>준비 중입니다.</Modal
>

<Modal
	subject="안내"
	buttonText="확인"
	active={modal2Active}
	onConfirm={() => {
		toggleModal2Active();
	}}
>
	<a href="https://naver.me/Ga284EOw" class="text-blue-600 underline" target="_blank"
		>찾아오시는 길</a
	><br /><br />

	청년빨라우사회적협동조합의 첫 '청년밥상사업'은 청년밥상빨라우 인하대점으로 시작했습니다. 많은
	관심과 응원 부탁드리겠습니다 :)
</Modal>

<div class="lg:grid lg:place-items-center">
	<div class="max-lg:w-full lg:w-2/3">
		<Header />
		<div class="flex justify-center w-full text-center pb-16 mb-8 border-b">
			<Button onClick={toggleModalActive}>후원 신청</Button>
			<Button onClick={toggleModalActive}>봉사 신청</Button>
		</div>

		<div class="flex flex-col justify-center w-full text-center">
			<div class="text-3xl font-bold mb-8">청년밥상사업</div>
			<div class="flex flex-row justify-center w-full text-center">
				<div class="mr-auto ml-auto w-[{imgBoxWidth}px] h-[{imgBoxHeight}px]">
					<div
						class="w-[{imgBoxWidth}px] h-[{imgBoxHeight -
							imgBoxBarHeight}px] border rounded-t-2xl overflow-hidden object-cover"
					>
						<img src="/images/intro-1-cut.jpg" width={imgBoxWidth} />
					</div>
					<div
						class="flex flex-col w-full h-[{imgBoxBarHeight}px] bg-gray-100 border border-t-0 rounded-b-2xl text-lg py-2 px-4"
					>
						청년밥상빨라우 인하대점
						<Button color="s" onClick={toggleModal2Active}
							><span class="ml-auto mr-auto">자세히 보기</span></Button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
