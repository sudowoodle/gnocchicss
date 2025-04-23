<script setup lang="ts">
import { ref } from 'vue';
import GitHubLogo from '@/assets/github.svg';
import packageJson from '../../../package.json';
</script>

<template>
    <div class="layout">
        <div class="layout-content">
            <router-view></router-view>
        </div>
        <footer class="footer">
            <div class="footer-content">
                <div class="copyright">© {{ new Date().getFullYear() }} GnocchiCSS</div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @include bg-lime-green;
}

.layout-content {
    flex: 1;
}

.header {
    @include p-4;
    @include bg-lime-green;
    @include text-forest-green;
    border-bottom: 4px solid var(--forest-green);

    .header-content {
        @include mx-auto;
        max-width: 1200px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
    }

    .version {
        font-weight: 600;
    }

    .github-link {
        padding: 0.5rem;
    }

    .github-logo {
        width: 24px;
        height: 24px;
    }
}

.footer {
    margin-top: auto;
    @include p-4;
    @include bg-lime-green;
    @include text-forest-green;
    border-top: 4px solid var(--forest-green);

    .footer-content {
        @include mx-auto;
        max-width: 1200px;
        text-align: center;
    }

    .copyright {
        font-weight: 600;
    }
}
</style>
