<script lang="ts">
	const collections = [
		{
			image: 'https://picsum.photos/375',
			title: 'Carmel',
			description: 'Premium Template',
			link: ''
		},
		{
			image: 'https://picsum.photos/375',
			title: 'Olivia',
			description: 'Premium Template',
			link: ''
		},
		{
			image: 'https://picsum.photos/375',
			title: 'June',
			description: 'Premium Template',
			link: ''
		}
	];
</script>

<div
	class="min-h-screen w-screen bg-ac-light-cream h-full flex flex-col justify-center items-center"
>
	<div class="container py-28">
		<div class="text-roman text-4xl mb-6">Collections Template</div>
		<div
			class="grid grid-rows-1 md:grid-flow-row-2 md:grid-cols-2 xl:grid-rows-1 xl:grid-cols-3 gap-10"
		>
			{#each collections as collection}
				<div>
					<img src={collection.image} alt="collection" class="w-full rounded" />
					<div class="flex flex-col gap-4 mt-4">
						<div class="font-helvetica text-ac-black">
							<div class="text-2xl">{collection.title}</div>
							<div>{collection.description}</div>
						</div>
						<div class="flex justify-between items-center gap-5 font-helvetica">
							<button class="py-4 border border-solid border-ac-dark-brown w-full rounded"
								>Live Preview</button
							>
							<button
								class="py-4 border border-solid border-ac-bronze bg-ac-bronze text-white w-full rounded"
								>View Details</button
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
