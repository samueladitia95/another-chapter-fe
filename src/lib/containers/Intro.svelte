<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import ImgMainLogo from '$lib/images/main_logo.svg';

	let introAnimation: boolean = true;
</script>

<div>
	{#if !introAnimation}
		<!-- Logo Screen -->
		<div class="bg-ac-black w-screen h-screen flex justify-center items-center">
			<img src={ImgMainLogo} alt="Main Logo" />
		</div>
	{:else}
		<div class="w-screen h-screen bg-main bg-cover bg-no-repeat bg-center flex flex-col">
			<Navbar />
			<div class="flex-grow h-full px-6">
				<div class="text-white h-full flex flex-col justify-center items-center">
					<div class="text-3xl font-roman w-full md:text-6xl/tight">
						Digital Elegance, <span class="italic">Unforgettable Experiences.</span>
					</div>
					<div class="text-base/relaxed mt-2 font-helvetica md:text-xl/relaxed md:pr-40">
						We are a bespoke service development studio crafting timeless invitations tailored to
						your love. Your chapter, your story - Our Expertise.
					</div>

					<div class="flex gap-4 w-full mt-28">
						<button
							class="rounded bg-transparent border border-solid border-white text-white w-full py-4 md:w-48"
							>View Templates</button
						>
						<button
							class="rounded bg-white border border-solid border-white text-ac-black w-full py-4 4 md:w-48"
							>Contact Us</button
						>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
