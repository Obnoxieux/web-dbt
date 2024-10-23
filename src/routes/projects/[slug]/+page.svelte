<script lang="ts">
    import ProjectDetailIntro from "../../../components/projects/ProjectDetailIntro.svelte";
    import ProjectDetailMainContainer from "../../../components/projects/ProjectDetailMainContainer.svelte";
    import ProjectDetailLinkSection from "../../../components/projects/ProjectDetailLinkSection.svelte";
    import {ColorUtility} from "$lib/classes/ColorUtility";

    let { data } = $props();
    const color = ColorUtility.determineColor(data.repo.language)
</script>

<div class="flex flex-col min-w-full md:w-screen max-w-[90%] lg:max-w-[70%]">
    <div class="flex flex-col gap-3">
        <ProjectDetailIntro repo="{data.repo}"/>
        <div class="divider"></div>
        <ProjectDetailMainContainer repo="{data.repo}" {color}/>
        <div class="divider col-span-4"></div>
        <ProjectDetailLinkSection repo="{data.repo}" {color}/>
    </div>
</div>