<script lang="ts">
	import clsx from 'clsx';

	const faqs = [
		{
			question: 'What’s the different between Premium Template and Customized Design?',
			answer:
				'Premium Template is Another Chapter ready responsive designs, you can look and select in our template collections for `your website invitation. Customized Design is your own personalized website invitation design that reflects your unique style and story.',
			isOpen: true
		},
		{
			question: 'How long does a set up for Premium Template ?',
			answer:
				'Premium Template is Another Chapter ready responsive designs, you can look and select in our template collections for `your website invitation. Customized Design is your own personalized website invitation design that reflects your unique style and story.',
			isOpen: false
		},
		{
			question: 'How long does a Customized Website Design take?',
			answer:
				'Premium Template is Another Chapter ready responsive designs, you can look and select in our template collections for `your website invitation. Customized Design is your own personalized website invitation design that reflects your unique style and story.',
			isOpen: false
		},
		{
			question: 'What can I change from the premium template?',
			answer:
				'Premium Template is Another Chapter ready responsive designs, you can look and select in our template collections for `your website invitation. Customized Design is your own personalized website invitation design that reflects your unique style and story.',
			isOpen: false
		}
	];

	const handleOpen = (index: number) => {
		faqs[index].isOpen = !faqs[index].isOpen;
	};
</script>

<div class="min-h-screen w-screen bg-ac-light-cream">
	<div class="container py-20">
		<div class="font-roman text-4xl font-light">Frequently Asked Questions</div>
		<div class="mt-12 flex flex-col gap-6">
			{#each faqs as faq, index}
				<div class="w-full flex flex-col gap-4">
					<div class="w-full border-t border-solid border-ac-black" />
					<div class="flex justify-between items-center w-full">
						<div class="font-helvetica text-xl/normal">{faq.question}</div>
						<button class="text-2xl font-light" on:click={() => handleOpen(index)}
							>{faq.isOpen ? '-' : '+'}</button
						>
					</div>
					<div
						class={clsx(
							'font-helvetica transform transition-all overflow-hidden max-h',
							faq.isOpen ? 'max-h-80' : 'max-h-0'
						)}
					>
						{faq.answer}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
