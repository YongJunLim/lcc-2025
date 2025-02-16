<script>
	import Link from '$lib/components/Link.svelte';
</script>

<footer class="bg-dark-blue flex w-full items-center justify-center p-8">
	<div class="flex flex-col items-center gap-4">
		<img src="/sutd-logo-white.svg" alt="SUTD Logo" class="xs:w-36 w-32 sm:w-48 md:w-64 lg:w-72" />
		<p class="text-center text-xs font-extralight text-white sm:text-sm lg:text-base">
			Copyright © 2024-2025 Learning Celebration Carnival<br />
			All Rights Reserved
		</p>
		<p class="text-center text-xs font-extralight text-white sm:text-sm lg:text-base">
			This is a version originally mirrored from <Link
				colorClass="text-blue-400"
				href="https://lcc.sutd.edu.sg"
			/><br />
			Source code can be found on <Link colorClass="text-blue-400" href="https://github.com" />
		</p>
	</div>
</footer>
