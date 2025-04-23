<script setup lang="ts">
import { type Rule } from '@gnocchicss/core';
import Subsection from './Subsection.vue';
import { ref } from 'vue';

interface Subsection {
    key: string;
    rules: Rule[];
}

interface Props {
    name: string;
    sectionKey: string;
    subsections: Record<string, Subsection>;
}

const props = defineProps<Props>();
const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="section" v-if="name" :class="{ 'is-open': isOpen }">
        <button class="section-header" @click="toggle">
            <span>{{ name }}</span>
            <span class="toggle-icon">
                {{ isOpen ? '▼' : '▶' }}
            </span>
        </button>
        <div class="section-content" :class="{ 'is-open': isOpen }">
            <template v-for="(subsection, subsectionName) in subsections" :key="subsection.key">
                <Subsection
                    :name="subsectionName"
                    :subsection-key="subsection.key"
                    :rules="subsection.rules"
                />
            </template>
        </div>
    </div>
    <template v-else>
        <template v-for="(subsection, subsectionName) in subsections" :key="subsection.key">
            <Subsection
                :name="subsectionName"
                :subsection-key="subsection.key"
                :rules="subsection.rules"
            />
        </template>
    </template>
</template>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.section {
    overflow: hidden;
    @include rounded-none;
    @include border-4;
    @include border-solid;
    @include border-forest-green;
    @include bg-cream;

    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px;
    }

    &.is-open {
        transform: none;
        box-shadow: none;
    }

    &-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1rem;
        @include bg-sage-green;
        @include text-cream;
        cursor: pointer;
        transition: background-color 0.2s;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: -0.5px;

        .toggle-icon {
            font-size: 1rem;
            @include text-cream;
            font-weight: 800;
        }
    }

    &-content {
        display: none;
        transition: all 0.3s ease-out;
        contain: content;

        &.is-open {
            display: block;
        }
    }
}
</style> 