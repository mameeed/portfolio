<template>
    <div class="mdHome">
        <SectionMission
            id="main"
            data-scroll-section />
        <SectionAbout
            id="about"
            data-scroll-section />
        <SectionExperience
            id="experience"
            data-scroll-section />
        <SectionProjects
            id="projects"
            data-scroll-section />
        <SectionReviews
            id="reviews"
            data-scroll-section />
        <SectionContact
            id="contact"
            data-scroll-section />
    </div>
</template>

<script>
import SectionMission from "./sectionMission/sectionMission.vue";
import SectionAbout from "./sectionAbout/sectionAbout.vue";
import SectionExperience from "./sectionExperience/sectionExperience.vue";
import SectionProjects from "./sectionGallery/sectionGallery.vue";
import SectionReviews from "./sectionReviews/sectionReviews.vue";
import SectionContact from "./sectionContact/sectionContact.vue";

export default {
    name: "page-home",
    components: {
        SectionMission,
        SectionAbout,
        SectionExperience,
        SectionProjects,
        SectionReviews,
        SectionContact,
    },
};
</script>
