<template>
    <div>
      <app-layout>
        <template v-slot:main-content>
          <main class="min-h-screen w-full bg-[#F5F5F5] pl-[260px]">
            <router-view />
          </main>
        </template>
      </app-layout>
    </div>
  </template>    