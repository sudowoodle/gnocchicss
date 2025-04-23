<template>
    <div class="home">
        <!-- Navigation Header -->
        <nav class="nav-header">
            <div class="nav-content">
                <router-link to="/" class="nav-logo">
                    <img src="@/assets/logo-shadow.png" alt="GnocchiCSS Logo" class="nav-logo-img">
                </router-link>
                <div class="nav-links">
                    <router-link to="/docs" class="nav-link">Docs</router-link>
                    <router-link to="/cheatsheet" class="nav-link">Cheatsheet</router-link>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <img src="@/assets/logo-shadow.png" alt="GnocchiCSS Logo" class="logo">
                <h1 class="title">
                    Gnocchi<span class="highlight">CSS</span>
                </h1>
                <p class="description">
                    The intuitive styling solution for modern web apps.
                    Type Safe, Extensible, and Modular by design.
                </p>
                <div class="cta-buttons">
                    <button class="btn primary">Get Started</button>
                    <button class="btn secondary">View Demo</button>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features">
            <h2>Features</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="icon">🎨</div>
                    <h3>Intuitive</h3>
                    <p>Write styles as naturally as you write components. API designed for developer happiness.</p>
                </div>
                <div class="feature-card">
                    <div class="icon">🔒</div>
                    <h3>Compile-time Checking</h3>
                    <p>Sass compiler will check for errors.</p>
                </div>
                <div class="feature-card">
                    <div class="icon">🚀</div>
                    <h3>Lightning Fast</h3>
                    <p>Optimized for performance with minimal runtime overhead and efficient compilation.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import Logo from '@/assets/logo-shadow.png'

useHead({
    title: 'GnocchiCSS - The intuitive styling solution',
    meta: [
        { name: 'description', content: 'Type Safe, Extensible, and Modular CSS solution for modern web apps' },
    ],
})
</script>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.home {
    @include my-0;
    @include mx-auto;
    @include p-8;
    @include text-forest-green;
    @include bg-lime-green;
}

.logo {
    width: 140px;
    height: 140px;
    padding: 1rem;
    transition: transform 0.2s;

    &:hover {
        transform: translate(-2px, -2px);
    }
}

.hero {
    margin-bottom: 4rem;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &-content {
        flex: 1;
    }
}

.title {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: -2px;
    @include text-forest-green;

    .highlight {
        @include text-forest-green;
    }
}

.description {
    @include text-forest-green;
    font-size: 1.2rem;
    font-weight: 600;
    max-width: 600px;
    margin: 0 auto 2rem;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.btn {
    @include p-4;
    @include border-4;
    @include border-solid;
    @include border-forest-green;
    @include rounded-none;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: 4px 4px 0 var(--forest-green);
    }

    &.primary {
        @include text-cream;
        @include bg-forest-green;
    }

    &.secondary {
        @include text-forest-green;
        @include bg-cream;
    }
}

.features {
    margin-top: 4rem;

    h2 {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 2rem;
        @include text-forest-green;
        text-transform: uppercase;
        letter-spacing: -1px;
        text-align: center;
    }
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.feature-card {
    @include p-6;
    @include bg-cream;
    @include border-4;
    @include border-solid;
    @include border-forest-green;
    @include rounded-none;
    transition: transform 0.2s;

    &:hover {
        transform: translate(-4px, -4px);
        box-shadow: 8px 8px 0 var(--forest-green);
    }

    .icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        @include text-forest-green;
        font-weight: 700;
    }

    p {
        @include text-forest-green;
        line-height: 1.6;
    }
}

.nav-header {
    padding: 1rem 2rem;
    margin-bottom: 2rem;
}

.nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    display: flex;
    align-items: center;
    text-decoration: none;

    .nav-logo-img {
        width: 40px;
        height: 40px;
        transition: transform 0.2s;

        &:hover {
            transform: translate(-2px, -2px);
        }
    }
}

.nav-links {
    display: flex;
    gap: 1rem;
}

.nav-link {
    @include text-forest-green;
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-weight: 600;
    position: relative;
    transition: all 0.2s;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--forest-green);
        transform: scaleX(0);
        transition: transform 0.2s;
    }

    &:hover::after {
        transform: scaleX(1);
    }

    &.router-link-active {
        @include border-b-4;
        @include border-solid;
        @include border-forest-green;
    }
}

@media (max-width: 768px) {
    .home {
        @include p-4;
    }

    .title {
        font-size: 3rem;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

    .cta-buttons {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-header {
        padding: 1rem;
    }

    .nav-content {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-links {
        width: 100%;
        justify-content: center;
    }
}
</style>
