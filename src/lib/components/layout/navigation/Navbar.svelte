<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const sidebar = document.querySelector('.sidebar');
		const background = document.querySelector('.sidebar-bg');
		const closeBtn = document.querySelector('.sidebar img');
		const hamburger = document.querySelector('.hamburger');
		const sidebarBtns = document.querySelector('.sidebar-buttons');
		if (!sidebar) return;
		if (!background) return;
		if (!closeBtn) return;
		if (!hamburger) return;
		if (!sidebarBtns) return;

		const onHiddenRequested = () => {
			background.classList.add('hidden');
		};

		const onShownRequested = () => {
			background.classList.remove('hidden');
		};

		closeBtn.addEventListener('click', onHiddenRequested);
		hamburger.addEventListener('click', onHiddenRequested);
		sidebarBtns.addEventListener('click', onHiddenRequested);
		background.addEventListener('click', (event) => {
			if (event.target === background) {
				onHiddenRequested();
			}
		});

		hamburger.addEventListener('click', onShownRequested);
	});
</script>

<div class="container w-full mx-auto">
	<div
		class="w-full pt-3 mb-3
		lg:h-[90px] lg:px-8
		max-lg:h-[80px] max-lg:flex max-lg:justify-center max-lg:items-center max-lg:px-4
"
	>
		<!-- Mobile Hamburger -->
		<div class="hamburger lg:hidden mr-auto w-[40px] py-4">
			<img src="/images/menu.svg" alt="menu" width="40px" />
		</div>
		<!-- Mobile Hamberger End -->

		<!-- Logo -->
		<div
			class="
			lg:float-left lg:ml-8 lg:w-[100px]
			max-lg:w-[100px]"
		>
			<a class="" href="/">
				<img src="/images/logo-cut.png" alt="logo" />
			</a>
		</div>
		<!-- Logo End -->

		<!-- Mobile Hamberger Dummy -->
		<div class="lg:hidden ml-auto w-[50px]"></div>
		<!-- Mobile Hamberger Dummy End -->

		<!-- Desktop -->
		<div
			class="max-lg:hidden float-right flex items-center h-[90px] overflow-x-scroll whitespace-nowrap text-center"
		>
			<slot />
		</div>
		<!-- Desktop End -->

		<!-- Mobile Sidebar -->
		<div
			class="sidebar-bg hidden lg:hidden fixed top-0 left-0 w-full h-full z-10 bg-gray-300 bg-opacity-50 transition-opacity duration-300 ease-in-out"
		>
			<div class="sidebar bg-gray-50 max-w-[240px] h-full z-20 border-r border-gray-300">
				<div class="px-2 mr-1 font-semibold border-b">
					<img src="/images/close.svg" class="py-5 px-3 ml-auto" width="50px" />
				</div>
				<div class="sidebar-buttons">
					<slot />
				</div>
			</div>
		</div>
	</div>
</div>
