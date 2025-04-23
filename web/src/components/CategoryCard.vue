<script setup lang="ts">
import { type Rule } from '@gnocchicss/core';
import Section from './Section.vue';

interface Subsection {
    key: string;
    rules: Rule[];
}

interface Section {
    key: string;
    subsections: Record<string, Subsection>;
}

interface Props {
    name: string;
    categoryKey: string;
    sections: Record<string, Section>;
}

const props = defineProps<Props>();
</script>

<template>
    <div class="category-card">
        <div class="category-header">
            <span>{{ name }}</span>
        </div>
        <div class="category-content">
            <div class="sections-list">
                <template v-for="(section, sectionName) in sections" :key="section.key">
                    <Section
                        :name="sectionName"
                        :section-key="section.key"
                        :subsections="section.subsections"
                    />
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.category-card {
    @include bg-cream;
    @include rounded-none;
    @include border-4;
    @include border-solid;
    @include border-forest-green;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;

    .category-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        @include bg-sage-green;
        @include text-cream;
        font-weight: 800;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: -1px;
        @include border-b-4;
        @include border-solid;
        @include border-forest-green;
    }

    .category-content {
        padding: 1.5rem;

        .sections-list {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
    }
}
</style> 