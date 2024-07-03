<template>
  <table class="w-full table-auto border border-secondary text-sm p-5">
    <thead class="bg-gray-200">
      <tr class="border border-secondary capitalize">
        <th class="border border-secondary p-3">SN</th>
        <th class="border border-secondary p-2">Description</th>
        <th class="border border-secondary p-3">Reference Number</th>
        <th class="border border-secondary p-3">Created</th>
        <th class="border border-secondary p-3">Amount</th>
        <th class="border border-secondary p-3">Status</th>
        <th class="border border-secondary p-3">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-secondary p-3">1.</td>
        <td class="border border-secondary p-3 text-center">December 2023</td>
        <td class="border border-secondary p-3 text-center">PS708</td>
        <td class="border border-secondary p-3 text-center">Dec 22, 2023</td>
        <td class="border border-secondary p-3 text-center">#300,890</td>
        <td class="border border-secondary p-3 text-center">
          <div class="h-10 border border-green-300 text-center text-green-300">
            PAID
          </div>
        </td>
        <td class="border border-secondary p-3 text-center underline">
          <router-link to="/obligation-reward/account-detail/viw-slip"> View </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>
