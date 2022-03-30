<template>
  <home-banner />

  <project-intro />

  <project-story class="mb-12" />

  <project-roadmap class="mb-12" />

  <project-partners class="mb-12" />
</template>

<script>
import { HomeBanner, ProjectStory, ProjectRoadmap, ProjectPartners } from '@/components';
import ProjectIntro from '@/components/ProjectIntro';

export default {
  name: 'HomeView',
  components: {
    ProjectIntro,
    HomeBanner,
    ProjectStory,
    ProjectRoadmap,
    ProjectPartners,
  },
};
</script>
