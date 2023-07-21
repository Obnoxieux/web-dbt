<div class="flex flex-col gap-3">
    <p class="prose">Your personal data</p>
    <div class="flex flex-row flex-wrap gap-1 md:gap-2 lg:gap-3">
        <input type="text" placeholder="Your name" class="input input-bordered w-full lg:max-w-[34.5%] my-1" />
        <input type="text" placeholder="Your email address" class="input input-bordered w-full lg:max-w-[34.5%] my-1" />
    </div>
    <p class="prose">Content</p>
    <select class="select select-bordered w-full lg:max-w-[70%]">
        <option disabled selected>Reason for Contact</option>
        <option>Project Inquiry</option>
        <option>Open Source Collaboration</option>
        <option>Personal</option>
        <option>Other</option>
    </select>
    <textarea class="textarea textarea-bordered lg:max-w-[70%]" placeholder="Your message"></textarea>
    <button class="btn btn-primary lg:max-w-[70%]">Send Message</button>
</div>
