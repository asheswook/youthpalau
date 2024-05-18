<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/layout/navigation/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import NavItem from '$lib/components/layout/navigation/NavItem.svelte';
</script>

<Navbar>
	<NavItem href="/" text="홈" />
	<NavItem href="/about" text="소개" />
	<NavItem href="/admin" text="게시판" />
	<NavItem href="/admin" text="후원 및 봉사 안내" />
</Navbar>

<hr class="mb-14" />

<div class="container w-full mx-auto text-gray-900 text-xl p-4">
	<slot />
</div>

<hr class="mt-10" />
<Footer />
