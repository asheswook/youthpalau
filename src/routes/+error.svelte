<script>
	import { page } from '$app/stores';
	import Card from '$lib/components/card/Card.svelte';
</script>

<Card title={$page.status + ' ' + $page.error.message}>
	{#if !$page.error}
		알 수 없는 응답입니다. 관리자에게 문의해주세요.
	{/if}

	{#if $page.status === 404}
		<p>요청하신 페이지를 찾을 수 없어요.</p>
		<p>준비 중이거나 없는 페이지인 것 같아요.</p>

		<div class="max-md:ml-auto mt-6 mb-2">
			<a href="/" class="text-gray-50 px-4 py-2 rounded-xl bg-blue-500">홈으로 돌아가기</a>
		</div>
	{/if}

	{#if $page.status === 500}
		<p>서버에 알 수 없는 문제가 발생했습니다.</p>
	{/if}
</Card>
