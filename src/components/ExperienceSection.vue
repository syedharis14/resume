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

<style scoped>
.job {
    margin-bottom: 1rem;
}

.duration {
    font-style: italic;
    color: #666;
    margin: 0.2rem 0;
}
</style>
