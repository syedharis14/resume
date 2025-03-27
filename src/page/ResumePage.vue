<template>
    <div class="cv-container">
        <HeaderSection />
        <ProfileSection />
        <TechnicalSkillsSection />
        <ExperienceSection />
        <ProjectsSection />

        <div class="education-awards-container">
            <EducationSection />
            <AwardsSection />
        </div>

        <FooterSection />
    </div>
</template>

<script setup>
import AwardsSection from "#components/AwardsSection.vue";
import EducationSection from "#components/EducationSection.vue";
import ExperienceSection from "#components/ExperienceSection.vue";
import FooterSection from "#components/FooterSection.vue";
import HeaderSection from "#components/HeaderSection.vue";
import ProfileSection from "#components/ProfileSection.vue";
import ProjectsSection from "#components/ProjectsSection.vue";
import TechnicalSkillsSection from "#components/TechnicalSkillsSection.vue";
</script>

<style scoped>
.cv-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
