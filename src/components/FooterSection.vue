<template>
    <footer class="footer">
        <div class="social-icons">
            <a href="mailto:syedharis14@gmail.com" target="_blank">
                <MailIcon class="icon" />
            </a>
            <a href="https://github.com/syedharis14" target="_blank">
                <GithubIcon class="icon" />
            </a>
            <a href="https://linkedin.com/in/syed-haris-024295184" target="_blank">
                <LinkedinIcon class="icon" />
            </a>
        </div>
        <p>© {{ currentYear }} Syed Haris Bin Aamir. All rights reserved.</p>
    </footer>
</template>

<script setup>
import { ref } from "vue";
import { MailIcon, GithubIcon, LinkedinIcon } from "lucide-vue-next";

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
    text-align: center;
    padding: 1rem 0;
    background: #f8f9fa;
    margin-top: 2rem;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin-bottom: 0.5rem;
}

.icon {
    width: 24px;
    height: 24px;
    color: #2563eb;
    transition: color 0.3s ease-in-out;
}

.icon:hover {
    color: #1e40af;
}
</style>
