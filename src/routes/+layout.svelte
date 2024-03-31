<script lang="ts">
	import '../app.css';
	import Navbar from '../components/navigation/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Navbar />
<hr class="mb-10" />

<div class="container w-full mx-auto text-gray-900 text-xl">
	<slot />
</div>

<hr class="mt-10" />
<Footer />
