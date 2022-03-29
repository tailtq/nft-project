<template>
  <div class="container">
    <home-banner class="mb-12" />

    <project-story class="mb-12" />

    <project-roadmap class="mb-12" />

    <project-partners class="mb-12" />
  </div>
</template>

<script>
import { HomeBanner, ProjectStory, ProjectRoadmap, ProjectPartners } from '@/components';

export default {
  name: 'HomeView',
  components: {
    HomeBanner,
    ProjectStory,
    ProjectRoadmap,
    ProjectPartners,
  },
};
</script>
