<script setup>
import AppHorizontalNavigation from '../../components/AppHorizontalNavigation.vue'
import DashboardTab from '../../components/Field_Operations/DashboardTab.vue'
import MyWorkPlace from '../../components/Field_Operations/MyWorkPlace.vue'
import AppLayout from '../../layouts/AppLayout.vue'
</script>

<template>
  <div>
    <AppLayout>
      <template v-slot:main-content>
        <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
          <AppHorizontalNavigation />
          <div>
            <DashboardTab class="mx-5 my-10" />
            <MyWorkPlace class="mx-5 my-20" />
          </div>
        </main>
      </template>
    </AppLayout>
  </div>
</template>
