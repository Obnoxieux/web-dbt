<script lang="ts">
    import ProjectDetailIntro from "../../../components/projects/ProjectDetailIntro.svelte";
    import ProjectDetailMainContainer from "../../../components/projects/ProjectDetailMainContainer.svelte";
    import ProjectDetailLinkSection from "../../../components/projects/ProjectDetailLinkSection.svelte";

    export let data
</script>

<div class="flex flex-col gap-3">
    <ProjectDetailIntro repo="{data.repo}"/>
    <div class="divider"></div>
    <ProjectDetailMainContainer repo="{data.repo}"/>
    <div class="divider col-span-4"></div>
    <ProjectDetailLinkSection repo="{data.repo}"/>
</div>