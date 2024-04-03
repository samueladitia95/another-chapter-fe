<script lang="ts">
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

	const testimonials = [
		{
			statement:
				'I love it so much! ❤️ You can create your own invitation based on your needs and style. Super recommended! 💯',
			image: 'https://picsum.photos/200',
			name: 'Claudia & Irwan'
		},
		{
			statement:
				'Everything is perfect!! 💖 Everyone loves my invitation 🥹 If you are looking for digital invitation, please I recommend Another Chapter!',
			image: 'https://picsum.photos/200',
			name: 'Raymond & Olivia'
		},
		{
			statement:
				'The invite is perfect! ✨ I love it! All of my friends said “the website is so nice!” Definitely will recommend Another Chapter to my friends! Thank you so much! 🤩 💖',
			image: 'https://picsum.photos/200',
			name: 'Carmel & Ausirio'
		}
	];
</script>

<div class="min-h-screen w-screen bg-ac-wedge h-full flex flex-col items-center justify-center">
	<div>
		<div class="container w-screen">
			<div class="text-white">What They Said About Us?</div>
		</div>
		<div>
			<Splide
				aria-label="invite countdown carausel"
				extensions={{ AutoScroll }}
				options={{
					arrows: false,
					pagination: false,
					type: 'loop',
					gap: '24px',
					autoScroll: {
						rewind: true,
						speed: 0.1
					},
					autoWidth: true
				}}
			>
				{#each testimonials as testimonial}
					<SplideSlide class="rounded-3xl bg-white p-6">
						<div class="w-60">{testimonial.statement}</div>
						<div>
							<img src={testimonial.image} alt="profile" class="h-16 w-16 rounded-full" />
						</div>
						<div>{testimonial.name}</div>
					</SplideSlide>
				{/each}
			</Splide>
		</div>
	</div>
</div>
