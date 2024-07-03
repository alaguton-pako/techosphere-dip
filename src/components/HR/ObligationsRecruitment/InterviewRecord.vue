<script setup></script>

<template>
  <app-layout>
    <template v-slot:main-content>
      <main class="w-full bg-[#F5F5F5]">
        <section class="">
          <section
            class="my-5 w-full gap-4 flex flex-row"
          >
            <div
              class="flex flex-col pl-3 pr-20 pb-3 place-content-center rounded bg-primary-black text-white"
            >
              <div class="text-start text-[35px] font-bold">15</div>
              <h2 class="text-xl capitalize">Total Interview Schedule</h2>
              <h6 class="text-sm font-light">Overall Interview Invites Sent</h6>
            </div>
            <div
              class="flex flex-col  pl-3 pr-20 pb-3 place-content-center rounded border border-gray-400 bg-white text-black"
            >
              <div class="text-start text-[35px] font-bold">10</div>
              <h2 class="text-xl capitalize">Total Accepted</h2>
              <h6 class="text-sm font-light">
                Total Number of Invites Accepted
              </h6>
            </div>
            <div
              class="flex flex-col  pl-3 pr-20 pb-3 place-content-center rounded border border-gray-400 bg-white text-black"
            >
              <div class="text-start text-[35px] font-bold">2</div>
              <h2 class="text-xl capitalize">Total ReScheduled</h2>
              <h6 class="text-sm font-light">
                Total Number of Invites ReScheduled
              </h6>
            </div>
            <div
              class="flex flex-col pl-3 pr-20 pb-3 place-content-center rounded border border-gray-400 bg-white text-black"
            >
              <div class="text-start text-[35px] font-bold">3</div>
              <h2 class="text-xl capitalize">Total No Show</h2>
              <h6 class="text-sm font-light">Total Number of Failed Invites</h6>
            </div>
          </section>
          <section
            class="my-12 flex flex-row-reverse items-end justify-between"
          >
            <div class="flex flex-row-reverse items-center">
              <div class="mx-4 flex items-center">
                <input
                  placeholder="Search"
                  class="w-[230px] rounded-l-md border border-r-0 border-secondary p-2 focus:outline-none"
                />
                <button
                  class="h-full rounded-r-md border border-secondary bg-primary-gray px-3 py-2.5"
                >
                  <img src="../../../assets/search-white.svg" alt="" />
                </button>
              </div>
              <div>
                <select
                  class="w-[230px] rounded-md border border-secondary p-2.5 focus:outline-none"
                >
                  <option value="" selected>Search Custom Fields</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </section>
          <table class="w-full table-auto border border-secondary text-sm">
            <thead class="bg-gray-200">
              <tr class="border border-secondary capitalize">
                <th class="border border-secondary p-3">Job ID</th>
                <th class="border border-secondary p-2">Full Name</th>
                <th class="border border-secondary p-3">Role Applied For</th>
                <th class="border border-secondary p-3">Interview Date</th>
                <th class="border border-secondary p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-secondary p-3">HRD1105</td>
                <td class="border border-secondary p-3 text-center">
                  Abubakar Tijjani
                </td>
                <td class="border border-secondary p-3 text-center">Manager</td>
                <td class="border border-secondary p-3 text-center">
                  Dec 22, 2023
                </td>
                <td class="border border-secondary p-3 text-center underline cursor-pointer" @click="$router.push({ name: 'obligation-recruitment/interview' })">
                  
                  View
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </template>
  </app-layout>
</template>
