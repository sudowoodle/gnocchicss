<script setup lang="ts">
import { type Rule } from '@gnocchicss/core';
import { ref } from 'vue';

interface Props {
    name: string;
    subsectionKey: string;
    rules: Rule[];
}

const props = defineProps<Props>();
const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="subsection" v-if="name">
        <button class="subsection-header" @click="toggle">
            <span>{{ name }}</span>
            <span class="toggle-icon">
                {{ isOpen ? '▼' : '▶' }}
            </span>
        </button>
        <div class="subsection-content" :class="{ 'is-open': isOpen }" v-if="isOpen">
            <div v-for="rule in rules" :key="rule.name" class="rule-item">
                <span class="rule-name">{{ rule.name }}</span>
                <span class="rule-value">{{ rule.rule }}</span>
            </div>
        </div>
    </div>
    <template v-else>
        <div v-for="rule in rules" :key="rule.name" class="rule-item">
            <span class="rule-name">{{ rule.name }}</span>
            <span class="rule-value">{{ rule.rule }}</span>
        </div>
    </template>
</template>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.subsection {
    margin: 0.5rem 1rem;
    overflow: hidden;
    @include rounded-none;
    @include border-4;
    @include border-solid;
    @include border-forest-green;
    @include bg-cream;

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
        font-weight: 600;

        &:hover {
            @include bg-sage-green;
            @include text-cream;
        }

        .toggle-icon {
            font-size: 0.875rem;
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

.rule-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    @include bg-cream;
    margin-top: -4px;

    .rule-name {
        font-family: monospace;
        font-weight: 700;
        @include text-terracotta;
        font-size: 1.1rem;
    }

    .rule-value {
        font-family: monospace;
        font-size: 1rem;
        @include text-sage-green;
        font-weight: 500;
    }
}
</style> 