<script lang="ts">
	let props = $props();
	let { children } = props;
	console.log(children);
</script>

<div class="markdown-content">
	{@render children()}
</div>
