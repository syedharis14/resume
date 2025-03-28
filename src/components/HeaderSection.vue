<template>
    <header class="header">
        <h1>Syed Haris Bin Aamir</h1>
        <p>Senior Software Engineer</p>
        <ul class="contact-info">
            <li>
                <MailIcon class="icon" />
                <a href="mailto:syedharis14@gmail.com">syedharis14@gmail.com</a>
            </li>
            <li>
                <PhoneIcon class="icon" />
                03135183127
            </li>
            <li>
                <LinkedinIcon class="icon" />
                <a href="https://linkedin.com/in/syed-haris-024295184" target="_blank"> syed-haris-024295184 </a>
            </li>
            <li>
                <GithubIcon class="icon" />
                <a href="https://github.com/syedharis14" target="_blank">syedharis14</a>
            </li>
            <li>
                <MapPinIcon class="icon" />
                Askari 11, Pakistan
            </li>
        </ul>
        <div class="npm-badge">
            <a href="https://www.npmjs.com/package/@syedharis14/git-ai-commit" target="_blank">
                <img src="https://img.shields.io/npm/v/@syedharis14/git-ai-commit.svg?style=flat" alt="NPM Version" />
            </a>
        </div>
    </header>
</template>

<script setup>
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon, MapPinIcon } from "lucide-vue-next";
</script>

<style scoped>
.header {
    text-align: center;
    margin-bottom: 1rem;
}

.contact-info {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.contact-info li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.contact-info a {
    color: inherit;
    text-decoration: none;
}

.icon {
    width: 18px;
    height: 18px;
    color: #2563eb;
}

.npm-badge {
    margin-top: 0.8rem;
    display: flex;
    justify-content: center;
}

.npm-badge img {
    width: 100px;
    height: auto;
}
</style>
