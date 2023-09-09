<script lang="ts">
    import {PUBLIC_CONTACT_ADDRESS, PUBLIC_CONTACT_EMAIL_ADDRESS, PUBLIC_CONTACT_PHONE} from "$env/static/public";
    const contactEmailAddress = PUBLIC_CONTACT_EMAIL_ADDRESS
    const contactPhone = PUBLIC_CONTACT_PHONE
    const contactAddress = PUBLIC_CONTACT_ADDRESS
</script>

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