<template>
    <section class="projects">
        <h2>Projects</h2>
        <div v-for="project in projects" :key="project.name" class="project">
            <h3>
                {{ project.name }} <span class="tech">({{ project.tech }})</span>
            </h3>
            <p class="duration">{{ project.duration }}</p>
            <ul>
                <li v-for="point in project.details" :key="point">{{ point }}</li>
            </ul>
        </div>
    </section>
</template>

<script setup>
const projects = [
    {
        name: "Relay Automotive",
        tech: "React, NestJs, Prisma, PostgreSQL",
        duration: "01/2025 – Present",
        details: [
            "Designed & developed a scalable V2 architecture using React, NestJS, and Prisma ORM.",
            "Migrated legacy MERN-based codebase, reducing technical debt.",
            "Led a team of 4 engineers, conducting code reviews & mentorship."
        ]
    },
    {
        name: "Polar Adventure",
        tech: "NextJs, Makeswift",
        duration: "01/2023 – 10/2024",
        details: [
            "Led development of an expedition platform for Arctic & Antarctic tours.",
            "Integrated third-party cruise data & built an intuitive admin panel.",
            "Developed RBAC & enabled bulk data management for efficient operations."
        ]
    },
    {
        name: "TripMerchant",
        tech: "ReactJs, NodeJs, Sequelize, MySql",
        duration: "12/2022 – 10/2024",
        details: [
            "Developed a SaaS platform for membership-based branded travel websites.",
            "Designed & implemented multi-tenancy with Sequelize ORM.",
            "Built an admin panel for internal teams to manage trips & partnerships."
        ]
    }
];
</script>

<style scoped>
.projects {
    margin-bottom: 2rem;
}
.project {
    margin-bottom: 1.5rem;
}
.tech {
    font-size: 0.9em;
    color: #555;
}
.duration {
    font-style: italic;
    color: #666;
    margin-bottom: 0.5rem;
}
</style>
