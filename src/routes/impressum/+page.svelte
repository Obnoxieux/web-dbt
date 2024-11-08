<script lang="ts">
    import {env} from "$env/dynamic/public";
    const contactEmailAddress = env.PUBLIC_CONTACT_EMAIL_ADDRESS
    const contactPhone = env.PUBLIC_CONTACT_PHONE
    const contactAddress = env.PUBLIC_CONTACT_ADDRESS
</script>

<div class="flex flex-col min-w-full md:w-screen max-w-[90%] lg:max-w-[70%]">
    <div class="prose">
        <h1>Impressum</h1>
        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>David Battefeld<br />
            {contactAddress}</p>
        <h2>Kontakt</h2>
        <p>Telefon: {contactPhone}<br />
            E-Mail: <a href="mailto:{contactEmailAddress}">{contactEmailAddress}</a></p>
        <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
    </div>
</div>