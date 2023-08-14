<script>
    let formSubmitted = false
</script>

{#if !formSubmitted}
    <form method="POST">
        <div class="flex flex-col gap-3">
            <p class="prose">Your personal data</p>
            <div class="flex flex-row flex-wrap gap-1 md:gap-2 lg:gap-3">
                <input name="name" type="text" placeholder="Your name" class="input input-bordered w-full lg:max-w-[34.5%] my-1" />
                <input name="email" type="text" placeholder="Your email address" class="input input-bordered w-full lg:max-w-[34.5%] my-1" />
            </div>
            <p class="prose">Content</p>
            <select name="reason" class="select select-bordered w-full lg:max-w-[70%]">
                <option disabled selected>Reason for Contact</option>
                <option>Project Inquiry</option>
                <option>Open Source Collaboration</option>
                <option>Personal</option>
                <option>Other</option>
            </select>
            <textarea name="message" class="textarea textarea-bordered lg:max-w-[70%]" placeholder="Your message"></textarea>
            <button type="submit" class="btn btn-primary lg:max-w-[70%]">Send Message</button>
        </div>
    </form>
{:else}
    <p>Form has been submitted successfully.</p>
{/if}