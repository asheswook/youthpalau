<script>
	import NavItem from './NavItem.svelte';
</script>

<!--<div class="flex flex-col w-full items-center mb-4">-->
<!--	<img src="/images/logo.png" alt="logo" width="200px" />-->
<!--	<div class="w-full h-[50px] overflow-x-scroll whitespace-nowrap text-center">-->
<!--		<NavItem href="/" text="홈" />-->
<!--		<NavItem href="/about" text="소개" />-->
<!--		<NavItem href="/admin" text="게시판" />-->
<!--		<NavItem href="/admin" text="후원 및 봉사 안내" />-->
<!--	</div>-->
<!--</div>-->
<div class="container w-full mx-auto">
	<div class="w-full h-[120px] pt-3 mx-4 mb-3">
		<div class="float-left ml-8">
			<img src="/images/logo-cut.png" alt="logo" width="150px" />
		</div>
		<div
			class="float-right flex items-center h-[120px] overflow-x-scroll whitespace-nowrap text-center"
		>
			<NavItem href="/" text="홈" />
			<NavItem href="/about" text="소개" />
			<NavItem href="/admin" text="게시판" />
			<NavItem href="/admin" text="후원 및 봉사 안내" />
		</div>
	</div>
</div>
