<template>
    <section class="experience">
        <h2>Professional Experience</h2>
        <div v-for="job in jobs" :key="job.company + job.title" class="job">
            <h3>{{ job.title }} at {{ job.company }}</h3>
            <p class="duration">{{ job.duration }}</p>
            <ul>
                <li v-for="point in job.details" :key="point">{{ point }}</li>
            </ul>
        </div>
    </section>
</template>

<script setup>
const jobs = [
    {
        title: "Senior Software Engineer",
        company: "CodingCops",
        duration: "10/2024 – Present",
        details: [
            "Led development & system design for Relay Automotive V2.",
            "Deployed & maintained cloud infrastructure on AWS & Vercel.",
            "Optimized project planning by providing accurate technical estimations.",
            "Conducted technical interviews for SSE, SE, and ASE hiring."
        ]
    },
    {
        title: "Senior Software Engineer",
        company: "The Hexaa",
        duration: "04/2023 – 10/2024",
        details: [
            "Led & delivered three contract-based projects (Nuxt.js, React.js, React Native).",
            "Managed a long-term contract transitioning a project from MVP to investment-ready.",
            "Revamped an existing system into microservices using Next.js, Keycloak, Beanstalk, and Elasticsearch.",
            "Provided strategic technical insights to the BD team and hiring process.",
            "Led development of in-house projects including a healthcare system & granting platform."
        ]
    },
    {
        title: "Software Engineer",
        company: "The Hexaa",
        duration: "03/2022 – 04/2024",
        details: [
            "Developed a multi-tenant SaaS with Sequelize ORM & Stripe integration.",
            "Built an admin panel for trip management with automated data updates & RBAC.",
            "Implemented live driver tracking via Google Maps API.",
            "Led a team of 5 developers & 1 QA to build a food subscription platform with Stripe payments."
        ]
    },
    {
        title: "Associate Software Engineer",
        company: "Previous Company",
        duration: "03/2021 – 03/2022",
        details: [
            "Developed an admin panel for multi-vendor management.",
            "Implemented inventory handling using Redux & optimized frontend performance.",
            "Integrated payment systems, order tracking & automated notifications."
        ]
    }
];
</script>

<style scoped>
.experience {
    margin-bottom: 2rem;
}
.job {
    margin-bottom: 1.5rem;
}
.duration {
    font-style: italic;
    color: #666;
    margin-bottom: 0.5rem;
}
</style>
