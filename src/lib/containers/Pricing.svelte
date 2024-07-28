<script lang="ts">
	import iconChecked from '$lib/images/icon-check-circle.svg'

	const features = [
		{
			icon: iconChecked,
			content:
				'Ready Responsive Design Template'
		},
		{
			icon: iconChecked,
			content:
				'Countdown Feature'
		},
		{
			icon: iconChecked,
			content:
				'Editable Backsound'
		},
		{
			icon: iconChecked,
			content:
				'Couple Story Section'
		},
		{
			icon: iconChecked,
			content:
				'Wedding Itinerary Guide Section'
		},
		{
			icon: iconChecked,
			content:
				'Save The Date Feature'
		},
		{
			icon: iconChecked,
			content:
				'RSVP Forms & Share Data'
		},
		{
			icon: iconChecked,
			content:
				'Images up to 20 & 1 GIF / Video on Website'
		},
		{
			icon: iconChecked,
			content:
				'Wishes Forms'
		},
		{
			icon: iconChecked,
			content:
				'Link Live Streaming Section'
		},
		{
			icon: iconChecked,
			content:
				'Google Map'
		},
		{
			icon: iconChecked,
			content:
				'FAQ Section'
		},
		{
			icon: iconChecked,
			content:
				'Website Activation for 12 Months'
		},
		{
			icon: iconChecked,
			content:
				'Revision 3x'
		},
	];
</script>

<div class="flex flex-col w-screen min-h-screen bg-pricing bg-cover bg-no-repeat bg-center">
	<div class="container py-28 lg:grid lg:grid-cols-2 lg:gap-8">
		<div class="justify-center items-center bg-ac-cream-brown rounded-3xl px-6 py-8">
			<div class="font-roman text-ac-light-cream text-3xl md:text-4xl">
				Premium Template
			</div>
			<div class="mt-6 font-helvetica text-ac-light-cream text-base">
				{#each features as feature}
					<div class="flex flex-row">
						<img src={feature.icon} alt="icon" class="h-6 mb-4" />
						<div class="ml-2">
							{feature.content}
						</div>
					</div>
				{/each}
				<div class="text-ac-light-cream text-3xl md:text-4xl">
					Rp 450.000
				</div>
				<div class="flex w-2/3 mt-6">
					<button
							class="rounded bg-white border border-solid border-white text-ac-black w-full py-4 md:w-56"
							>Browse Templates</button
						>
				</div>
			</div>
		</div>

		<div class="h-svh lg:h-auto flex flex-col mt-8 lg:mt-0 justify-center items-center bg-ac-dark-cream-brown rounded-3xl">
			<div class="text-center font-roman text-ac-light-cream text-3xl md:text-4xl ">
				<span>Design Your</span> <br /> 
				<span>Personalized</span> <br />
				<span>Website Invitation</span>
			</div>
			<div class="mt-2 p-2 text-center font-helvetica text-ac-light-cream text-xl">
				That reflects your unique style and story
			</div>
			<div class="flex justify-center w-8/12 mt-6">
				<button
						class="rounded bg-white border border-solid border-white text-ac-black w-full py-4 md:w-48"
						>Contact Us</button
					>
			</div>
		</div>
	</div>
</div>
