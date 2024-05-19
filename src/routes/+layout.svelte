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
			<NavItem>게시판</NavItem>
			<NavItem>후원 및 봉사 문의</NavItem>
		</Navigation>

		<MobileNavigation>
			<MobileNavItem to="/">홈</MobileNavItem>
			<MobileNavItem to="/about">소개</MobileNavItem>
			<MobileNavItem>게시판</MobileNavItem>
			<MobileNavItem>후원 및 봉사 문의</MobileNavItem>
		</MobileNavigation>

		<div class="flex flex-row flex-wrap gap-4 mt-5">
			<slot />
		</div>
	</div>
</div>
