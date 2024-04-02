<script lang="ts">
	import heartsLogo from '$lib/images/hearts.svg';
	import calenderLogo from '$lib/images/calender.svg';
	import moneyLogo from '$lib/images/money.svg';
	import clockLogo from '$lib/images/clock.svg';

	const benefits = [
		{
			logo: heartsLogo,
			title: 'Immersive Storytelling',
			content:
				'Elevate your love story digitally with Another Chapter: Engaging, immersive invitations that make your wedding unforgettable.'
		},
		{
			logo: calenderLogo,
			title: 'Timeless Designs',
			content:
				'Timeless elegance redefined by Another Chapter: Invitations capturing your love, enduring beyond trends.'
		},
		{
			logo: moneyLogo,
			title: 'Cost-Effective Solutions',
			content:
				"Budget-friendly and eco-conscious: Another Chapter's digital invitations offer sustainable elegance while optimizing your costs."
		},
		{
			logo: clockLogo,
			title: 'Save More Time',
			content:
				'By utilizing Another Chapter, your dedicated wedding invitation assistance, you will save more time and allows you to focus on other important things.'
		}
	];
</script>

<div class="min-h-screen w-screen bg-ac-cream">
	<div class="container py-28">
		<div>
			<div class="font-roman text-ac-brown text-4xl md:text-6xl/tight font-extralight">
				We believe that the <span class="italic">experience</span> matters, offering a
				<span class="italic">unique storytelling journey</span> for you and your loved ones
			</div>
			<div
				class="mt-28 flex flex-col gap-10 md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1"
			>
				{#each benefits as benefit}
					<div class="text-ac-brown">
						<img src={benefit.logo} alt="logo" class="h-14 mb-6" />
						<div class="text-2xl font-helvetica">
							{benefit.title}
						</div>
						<div class="mt-2 font-helvetica">
							{benefit.content}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
