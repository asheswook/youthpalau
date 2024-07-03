<script lang="ts">
	import '../app.css';
	import Card from '$lib/components/card/Card.svelte';
	import Navigation from '$lib/components/layout/navigation/Navigation.svelte';
	import NavItem from '$lib/components/layout/navigation/NavItem.svelte';
	import MobileNavigation from '$lib/components/layout/navigation/MobileNavigation.svelte';
	import MobileNavItem from '$lib/components/layout/navigation/MobileNavItem.svelte';
</script>

<div class="bg-gray-200 text-gray-800 text-lg">
	<div class="p-5 max-w-[1200px] mx-auto my-0">
		<!-- #B3B8BF  #f4f4f4 -->
		<Navigation>
			<NavItem to="/">홈</NavItem>
			<NavItem to="/about">소개</NavItem>
			<NavItem to="/board">게시판</NavItem>
			<NavItem to="/volunteer">후원 및 봉사 문의</NavItem>
		</Navigation>

		<MobileNavigation>
			<MobileNavItem to="/">홈</MobileNavItem>
			<MobileNavItem to="/about">소개</MobileNavItem>
			<MobileNavItem to="/board">게시판</MobileNavItem>
			<MobileNavItem to="/volunteer">후원 및 봉사 문의</MobileNavItem>
		</MobileNavigation>

		<div class="flex flex-row flex-wrap gap-4 mt-5">
			<slot />
		</div>
	</div>
</div>
<div class="flex flex-col items-center p-4 mb-2 text-gray-500 text-base">
	<span>이사장: 김혜숙 | 사업자등록번호: 406-82-02968 | 후원문의: 010-3181-1811</span>
	<span>후원 전용 계좌: 농협 355-0089-5777-03 (예금주: 청년빨라우사회적협동조합)</span>
	<span class="mt-2 text-sm text-gray-400"
		>Copyright © 2024 청년빨라우사회적협동조합. 모든 권리 보유.</span
	>
</div>
