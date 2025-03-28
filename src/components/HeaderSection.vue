<template>
    <header class="header">
        <h1>Syed Haris Bin Aamir</h1>
        <p>Senior Software Engineer</p>
        <ul class="contact-info">
            <li>Email: <a href="mailto:syedharis14@gmail.com">syedharis14@gmail.com</a></li>
            <li>Phone: 03135183127</li>
            <li>
                LinkedIn:
                <a href="https://linkedin.com/in/syed-haris-024295184" target="_blank">syed-haris-024295184</a>
            </li>
            <li>Address: ASKARI 11</li>
        </ul>
    </header>
</template>

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
    gap: 0.8rem;
}

.contact-info li {
    display: inline-flex;
    align-items: center;
}

.contact-info a {
    color: inherit;
    text-decoration: none;
}
</style>
