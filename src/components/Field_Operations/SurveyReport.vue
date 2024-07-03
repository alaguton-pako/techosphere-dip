<template>
  <div class="mx-3 w-full border border-gray-300 bg-[#F5F5F5] p-10">
    <div v-if="loading">
      <LoadingSpinner/>
    </div>
    <div v-else class="mx-1 my-1 w-full border-gray-400">
      <div class="grid h-auto w-full grid-cols-2 rounded-sm ">
        <div
          class="text-black-300 font-[Source Sans Pro] justify-start text-start text-[25px] font-bold"
        >
          Site Information
        </div>
        <div
          class="font-['Source Sans Pro'] my-2 flex flex-row-reverse font-normal text-black"
        >
          Oct 30, 2023 11:35 AM
        </div>
      </div>

      <h2 class="my-7 mb-4 text-lg font-bold">GPS Coordinates:</h2>

      <div class="grid grid-cols-5 gap-4">
        <div>
          <input
            v-model="payload.latitutude"
            type="text"
            id="input1"
            name="input1"
            class="border border-gray-500 p-2"
            placeholder="Enter Latitude"
          />
        </div>

        <div>
          <input
            v-model="payload.longitude"
            type="text"
            id="input2"
            name="input2"
            class="border border-gray-500 p-2"
            placeholder="Enter Longitude"
          />
        </div>
      </div>

      <h2
        class="text-black-300 bg-white-600 font-[Source Sans Pro] my-16 flex w-full flex-row rounded-md p-2 text-[25px] font-bold"
      >
        Market Information
      </h2>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="mb-4">
          <label
            for="dropdown2"
            class="text-md text-black-800 mb-2 block font-semibold"
            >Location Type</label
          >
          <select
            v-model="payload.location_type"
            id="dropdown2"
            name="dropdown2"
            class="bg-white-500 h-auto w-[460px] rounded-md border border-gray-800 p-2"
          >
            <option value="option1">Residence</option>
            <option value="option2">Commercial</option>
            <option value="option3">Sub-Commercial</option>
          </select>
        </div>
        <div class="mb-4">
          <div>
            <label for="name" class="font-semibold">Is it an MDU?</label>

            <label
              class="relative mx-5 inline-flex cursor-pointer items-center"
            >
              <input
                @change="setRadioValue('is_mdu')"
                type="checkbox"
                id="is_mdu"
                value="yes"
                class="peer sr-only"
              />
              <div
                class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-orange-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-orange-800"
              ></div>
              <span
                class="text-black-900 dark:text-black-300 ms-3 text-sm font-semibold"
                >Yes</span
              >
            </label>
          </div>
          <div v-if="payload.is_mdu == 'yes'">
            <label for="name" class="font-semi-bold"
              >If Yes, Number of MDU</label
            >
          </div>
          <input
            v-if="payload.is_mdu == 'yes'"
            type="text"
            class="border border-gray-500 p-2"
            placeholder="insert value"
            :required="payload.is_mdu ? true : false"
          />
        </div>
        <div class="mb-4">
          <label
            for="dropdown2"
            class="text-md text-black-800 mb-2 block font-semibold"
            >Type of Buildings</label
          >
          <select
            v-model="payload.type_of_buildings"
            id="dropdown2"
            name="dropdown2"
            class="bg-white-500 h-auto w-[460px] rounded-md border border-gray-800 p-2"
          >
            <option value="option1">Duplex</option>
            <option value="option2">Bungalow</option>
            <option value="option3">Plaza</option>
          </select>
        </div>
      </div>
      <h2
        class="text-black-300 bg-white-600 font-[Source Sans Pro] my-16 flex w-full flex-row rounded-md p-2 text-[25px] font-bold"
      >
        Node Verification
      </h2>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="mb-4">
          <label
            for="dropdown2"
            class="text-md text-black-800 mb-2 block font-semibold"
            >Node Type</label
          >
          <select
            v-model="payload.node_type"
            id="dropdown2"
            name="dropdown2"
            class="bg-white-500 h-auto w-[460px] rounded-md border border-gray-800 p-2"
          >
            <option>OLT</option>
            <option>Splitter</option>
            <option>FAT</option>
            <option>FST</option>
            <option>MST</option>
            <option>Closure</option>
            <option>Patch Cord</option>
          </select>
        </div>
        <div class="mb-4">
          <div>
            <label for="name" class="font-semibold"
              >Number of Cable and Type</label
            >
          </div>
          <input
            type="text"
            class="border border-gray-500 p-2"
            placeholder="insert value"
          />
        </div>
        <div class="mb-4">
          <label
            for="dropdown2"
            class="text-md text-black-800 mb-2 block font-semibold"
            >Verification Status</label
          >
          <select
            v-model="payload.variance_status"
            id="dropdown2"
            name="dropdown2"
            class="bg-white-500 h-auto w-[460px] rounded-md border border-gray-800 p-2"
          >
            <option>Verified</option>
            <option>Variance</option>
          </select>
        </div>
        <div class="mb-4">
          <label
            for="dropdown2"
            class="text-md text-black-800 mb-2 block font-semibold"
            >Labelled</label
          >
          <select
            v-model="payload.labelled"
            id="dropdown2"
            name="dropdown2"
            class="bg-white-500 h-auto w-[460px] rounded-md border border-gray-800 p-2"
          >
            <option>Yes</option>
            <option>No</option>
            <option>Partially</option>
          </select>
        </div>
      </div>
      <div class="">
        <div class="w-full">
          <h2 class="my-2 mb-4 text-lg font-bold">GPS Coordinates:</h2>
        </div>
        <div class="flex flex-row gap-20">
          <div class="w-1/6">
            <div>
              <label for="name" class="font-semibold">Latitude</label>
            </div>
            <input
              v-model="payload.latitutude"
              type="text"
              id="input1"
              name="input1"
              class="border border-gray-500 p-2"
              placeholder="Enter Latitude"
            />
          </div>

          <div class="w-1/6">
            <div>
              <label for="name" class="font-semibold">Longitude</label>
            </div>
            <input
              v-model="payload.longitude"
              type="text"
              id="input2"
              name="input2"
              class="border border-gray-500 p-2"
              placeholder="Enter Longitude"
            />
          </div>
          <div class="mb-4 w-4/6">
            <div>
              <label for="name" class="font-semibold">Address</label>
            </div>
            <input
              v-model="payload.address"
              type="text"
              class="border border-gray-500 p-2"
              placeholder="enter address"
            />
          </div>
        </div>
      </div>
      <div class="my-6 grid grid-cols-1 gap-4"></div>
      <div class="my-7 grid-cols-1 gap-4 lg:grid-cols-1">
        <div class="mb-4">
          <label
            for="picture"
            class="mb-2 block text-sm font-semibold text-gray-600"
            >Upload Picture</label
          >
          <input
            @change="
              filesChange($event.target.files),
                (fileCount = $event.target.files.length)
            "
            type="file"
            id="picture"
            name="picture"
            class="border border-gray-500 p-2"
          />
        </div>
      </div>

      <h2
        class="text-black-300 bg-white-600 font-[Source Sans Pro] my-16 flex w-full flex-row rounded-md p-2 text-[25px] font-bold"
      >
        Home Network Status
      </h2>
      <div class="grid-cols-1 gap-4 lg:grid-cols-1">
        <div class="mb-4">
          <div>
            <label
              for="name"
              class="font-['Source Sans Pro'] text-[20px] font-medium"
              >LAN</label
            >

            <label
              class="relative mx-10 inline-flex cursor-pointer items-center"
            >
              <input
                type="checkbox"
                value="yes"
                class="peer sr-only"
                @change="setRadioValue('lan')"
                id="lan"
                v-model="isLanChecked"
              />
              <div
                class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-orange-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-orange-800"
              ></div>
              <span
                class="text-black-900 dark:text-black-300 ms-3 text-sm font-light"
                >{{ isLanChecked ? 'Available' : 'Not Available' }}</span
              >
            </label>
          </div>
          <div></div>
        </div>
        <div class="mb-4">
          <div>
            <label
              for="name"
              class="font-['Source Sans Pro'] text-[20px] font-medium"
              >Access Points</label
            >

            <label
              class="relative mx-10 inline-flex cursor-pointer items-center"
            >
              <input
                type="checkbox"
                value="yes"
                class="peer sr-only"
                @change="setRadioValue('access_points')"
                id="access_points"
                v-model="isAccessChecked"
              />
              <div
                class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-orange-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-orange-800"
              ></div>
              <span
                class="text-black-900 dark:text-black-300 ms-3 text-sm font-light"
                >{{ isAccessChecked ? 'Available' : 'Not Available' }}</span
              >
            </label>
          </div>
          <div></div>
        </div>
        <div class="mb-4">
          <div>
            <label
              for="name"
              class="font-['Source Sans Pro'] text-[20px] font-medium"
              >Routers</label
            >

            <label
              class="relative mx-10 inline-flex cursor-pointer items-center"
            >
              <input type="checkbox" v-model="isRouterChecked" value="yes" class="peer sr-only" id="router"
              @change="setRadioValue('router')"/>
              <div
                class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-orange-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-orange-800"
              ></div>
              <span
                class="text-black-900 dark:text-black-300 ms-3 text-sm font-light"
                >{{ isRouterChecked ? 'Available' : 'Not Available' }}</span
              >
            </label>
          </div>
        </div>
      </div>

      <div class="my-16 grid-cols-1 gap-4 lg:grid-cols-1">
        <div class="mb-4">
          <label
            for="dropdown2"
            class="text-black-800 mb-2 block text-sm font-semibold"
            >Wifi Solution Required</label
          >
          <select
            v-model="payload.wifi_solution"
            id="dropdown2"
            name="dropdown2"
            class="bg-white-500 h-auto w-[460px] rounded-md border p-2"
          >
            <option>None</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Big</option>
          </select>
        </div>
        <h2
          class="text-black-300 bg-white-600 font-[Source Sans Pro] my-8 flex w-full flex-row rounded-md p-2 text-[25px] font-bold"
        >
          BOM
        </h2>
        <div class="p-6">
    <div class="flex gap-4 mb-4">
      <button @click="toggleTable('LastMile')" 
      class="lg:w-[130px] lg:h-[51px] lg:text-center flex justify-center py-2 px-4 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-black">
        LastMile
      </button>
      <button @click="toggleTable('access')" class="lg:w-[130px] lg:h-[51px] lg:text-center flex justify-center py-2 px-4 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-black">
        Access
      </button>
      <button @click="toggleTable('backbone')" class="lg:w-[200px] lg:h-[51px] lg:text-center flex justify-center py-2 px-4 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-black">
        Distribution Backbone
      </button>
    </div>

    <div v-if="visibleTables.includes('LastMile')" class="mb-4">
      <div
       class="my-16  w-full ">
       <nav class="font-[Source Sans Pro] flex w-full flex-row rounded-md border bg-gray-700 text-[25px] font-semibold">
       <div class="mx-2 my-2 text-[white]">
        <h2>Service Lastmile</h2>
       </div>
       <div class="absolute right-4 my-1 mb-2 mr-20">
        <button      @click="handleShowModal('serviceLastMile')"
        class=" bg-white text-base font-normal text-[#D50036] h-[51px] w-[165px] pb-3.5 pl-7 pr-7 pt-3.5 rounded-md border border-solid border-[transparent]">Add Items</button>
       </div>
       </nav>
     <div class="h-auto">
      <table class="w-full table-auto border border-secondary text-sm"> 
        <thead class="bg-gray-400">
          <tr class="border border-secondary capitalize">
            <th class="border border-secondary p-3">S/N:</th>
            <th class="border border-secondary p-3">Description</th>
            <th class="border border-secondary p-3">Unit</th>
            <th class="border border-secondary p-3">Quantity</th>
            <th class="border border-secondary p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in bomItems['serviceLastMile']" :key="index" class="items-center justify-center text-center">
            <td class="border border-secondary p-3">{{ index + 1 }}</td>
            <td class="border border-secondary p-3">{{ item.description }}</td>
            <td class="border border-secondary p-3">{{ item.unit }}</td>
            <td class="border border-secondary p-3">{{ item.quantity }}</td>
            <td class="border border-secondary p-3">
              <div class="mr-10 flex flex-row-reverse gap-4">
                <button @click="deleteItem(index, 'serviceLastMile')" class="h-[51px] w-[125px] rounded-md border border-solid border-gray-300 pb-3.5 pl-7 pr-7 pt-3.5">Delete</button>
                <button
                @click="handleShowModal('serviceLastMile')"
                    class="h-[51px] w-[125px] rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5"
                  >
                  
                    Add Item
                  </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
     </div>
  </div>
      <div
       class="my-16 w-full ">
       <nav class="font-[Source Sans Pro] flex w-full flex-row rounded-md border bg-gray-700 text-[25px] font-semibold">
       <div class="mx-2 my-2 text-[white]">
        <h2>Supply Lastmile</h2>
       </div>
       <div class="absolute right-4 my-1 mb-2 mr-20">
        <button @click="handleShowModal('supplyLastMile')"
        class=" bg-white text-base font-normal text-[#D50036] h-[51px] w-[165px] pb-3.5 pl-7 pr-7 pt-3.5 rounded-md border border-solid border-[transparent]">Add Items</button>
       </div>
       </nav>
     <div class="h-auto">
      <table class="w-full table-auto border border-secondary text-sm"> 
        <thead class="bg-gray-400">
          <tr class="border border-secondary capitalize">
            <th class="border border-secondary p-3">S/N:</th>
            <th class="border border-secondary p-3">Description</th>
            <th class="border border-secondary p-3">Unit</th>
            <th class="border border-secondary p-3">Quantity</th>
            <th class="border border-secondary p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in bomItems['supplyLastMile']" :key="index" class="items-center justify-center text-center">
            <td class="border border-secondary p-3">{{ index + 1 }}</td>
            <td class="border border-secondary p-3">{{ item.description }}</td>
            <td class="border border-secondary p-3">{{ item.unit }}</td>
            <td class="border border-secondary p-3">{{ item.quantity }}</td>
            <td class="border border-secondary p-3">
              <div class="mr-10 flex flex-row-reverse gap-4">
                <button @click="deleteItem(index, 'supplyLastMile')" class="h-[51px] w-[125px] rounded-md border border-solid border-gray-300 pb-3.5 pl-7 pr-7 pt-3.5">Delete</button>
                <button
                @click="handleShowModal('supplyLastMile')"
                    class="h-[51px] w-[125px] rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5"
                  >
                  
                    Add Item
                  </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
     </div>
  </div>
    </div>

    <div v-if="visibleTables.includes('access')" class="mb-4">
      <div
       class="my-16 w-full ">
       <nav class="font-[Source Sans Pro] flex w-full flex-row rounded-md border bg-gray-700 text-[25px] font-semibold">
       <div class="mx-2 my-2 text-[white]">
        <h2>Service Access</h2>
       </div>
       <div class="absolute right-4 my-1 mb-2 mr-20">
        <button   @click="handleShowModal('serviceAccess')"
         class=" bg-white text-base font-normal text-[#D50036] h-[51px] w-[165px] pb-3.5 pl-7 pr-7 pt-3.5 rounded-md border border-solid border-[transparent]">Add Items</button>
       </div>
       </nav>
     <div class="h-auto">
      <table class="w-full table-auto border border-secondary text-sm"> 
        <thead class="bg-gray-400">
          <tr class="border border-secondary capitalize">
            <th class="border border-secondary p-3">S/N:</th>
            <th class="border border-secondary p-3">Description</th>
            <th class="border border-secondary p-3">Unit</th>
            <th class="border border-secondary p-3">Quantity</th>
            <th class="border border-secondary p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in bomItems['serviceAccess']" :key="index" class="items-center justify-center text-center">
            <td class="border border-secondary p-3">{{ index + 1 }}</td>
            <td class="border border-secondary p-3">{{ item.description }}</td>
            <td class="border border-secondary p-3">{{ item.unit }}</td>
            <td class="border border-secondary p-3">{{ item.quantity }}</td>
            <td class="border border-secondary p-3">
              <div class="mr-10 flex flex-row-reverse gap-4">
                <button @click="deleteItem(index, 'serviceAccess')" class="h-[51px] w-[125px] rounded-md border border-solid border-gray-300 pb-3.5 pl-7 pr-7 pt-3.5">Delete</button>
                <button
                @click="handleShowModal('serviceAccess')"
                    class="h-[51px] w-[125px] rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5"
                  >
                  
                    Add Item
                  </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
     </div>
  </div>
   <div
       class="my-16 w-full ">
       <nav class="font-[Source Sans Pro] flex w-full flex-row rounded-md border bg-gray-700 text-[25px] font-semibold">
       <div class="mx-2 my-2 text-[white]">
        <h2>Supply Access</h2>
       </div>
       <div class="absolute right-4 my-1 mb-2 mr-20">
        <button @click="handleShowModal('supplyAccess')"
        class=" bg-white text-base font-normal text-[#D50036] h-[51px] w-[165px] pb-3.5 pl-7 pr-7 pt-3.5 rounded-md border border-solid border-[transparent]">Add Items</button>
       </div>
       </nav>
     <div class="h-auto">
      <table class="w-full table-auto border border-secondary text-sm"> 
        <thead class="bg-gray-400">
          <tr class="border border-secondary capitalize">
            <th class="border border-secondary p-3">S/N:</th>
            <th class="border border-secondary p-3">Description</th>
            <th class="border border-secondary p-3">Unit</th>
            <th class="border border-secondary p-3">Quantity</th>
            <th class="border border-secondary p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in bomItems['supplyAccess']" :key="index" class="items-center justify-center text-center">
            <td class="border border-secondary p-3">{{ index + 1 }}</td>
            <td class="border border-secondary p-3">{{ item.description }}</td>
            <td class="border border-secondary p-3">{{ item.unit }}</td>
            <td class="border border-secondary p-3">{{ item.quantity }}</td>
            <td class="border border-secondary p-3">
              <div class="mr-10 flex flex-row-reverse gap-4">
                <button @click="deleteItem(index, 'supplyAccess')" class="h-[51px] w-[125px] rounded-md border border-solid border-gray-300 pb-3.5 pl-7 pr-7 pt-3.5">Delete</button>
                <button
                @click="handleShowModal('supplyAccess')"
                    class="h-[51px] w-[125px] rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5"
                  >
                  
                    Add Item
                  </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
     </div>
  </div>
    </div>

    <div v-if="visibleTables.includes('backbone')" class="mb-4">
      <div
       class="my-16 w-full ">
       <nav class="font-[Source Sans Pro] flex w-full flex-row rounded-md border bg-gray-700 text-[25px] font-semibold">
       <div class="mx-2 my-2 text-[white]">
        <h2>Service Distribution Backbone</h2>
       </div>
       <div class="absolute right-4 my-1 mb-2 mr-20">
        <button  @click="handleShowModal('serviceBackbone')"
        class=" bg-white text-base font-normal text-[#D50036] h-[51px] w-[165px] pb-3.5 pl-7 pr-7 pt-3.5 rounded-md border border-solid border-[transparent]">Add Items</button>
       </div>
       </nav>
     <div>
      <table class="w-full table-auto h-auto border border-secondary text-sm"> 
        <thead class="bg-gray-400">
          <tr class="border border-secondary capitalize">
            <th class="border border-secondary p-3">S/N:</th>
            <th class="border border-secondary p-3">Description</th>
            <th class="border border-secondary p-3">Unit</th>
            <th class="border border-secondary p-3">Quantity</th>
            <th class="border border-secondary p-3">Action</th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="(item, index) in bomItems['serviceBackbone']" :key="index" class="items-center justify-center text-center">
            <td class="border border-secondary p-3">{{ index + 1 }}</td>
            <td class="border border-secondary p-3">{{ item.description }}</td>
            <td class="border border-secondary p-3">{{ item.unit }}</td>
            <td class="border border-secondary p-3">{{ item.quantity }}</td>
            <td class="border border-secondary p-3">
            <div class="mr-10 flex flex-row-reverse gap-4">
            <button @click="deleteItem(index, 'serviceBackbone')" class="h-[51px] w-[125px] rounded-md border border-solid border-gray-300 pb-3.5 pl-7 pr-7 pt-3.5">Delete</button>
            <button @click="handleShowModal('serviceBackbone')" class="h-[51px] w-[125px] rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5">Add Item</button>
            </div>
            </td>
          </tr>

        </tbody>
      </table>
     </div>
  </div>
   <div
       class="my-16 w-full ">
       <nav class="font-[Source Sans Pro] flex w-full flex-row rounded-md border bg-gray-700 text-[25px] font-semibold">
       <div class="mx-2 my-2 text-[white]">
        <h2>Supply Distribution Backbone</h2>
       </div>
       <div class="absolute right-4 my-1 mb-2 mr-20">
        <button @click="handleShowModal('supplyBackbone')" 
        class="bg-white text-base font-normal text-[#D50036] h-[51px] w-[165px] pb-3.5 pl-7 pr-7 pt-3.5 rounded-md border border-solid border-[transparent]">Add Items</button>
       </div>
       </nav>
     <div>
      <table class="w-full table-auto h-auto border border-secondary text-sm"> 
        <thead class="bg-gray-400">
          <tr class="border border-secondary capitalize">
            <th class="border border-secondary p-3">S/N:</th>
            <th class="border border-secondary p-3">Description</th>
            <th class="border border-secondary p-3">Unit</th>
            <th class="border border-secondary p-3">Quantity</th>
            <th class="border border-secondary p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in bomItems['supplyBackbone']" :key="index" class="items-center justify-center text-center">
            <td class="border border-secondary p-3">{{ index + 1 }}</td>
            <td class="border border-secondary p-3">{{ item.description }}</td>
            <td class="border border-secondary p-3">{{ item.unit }}</td>
            <td class="border border-secondary p-3">{{ item.quantity }}</td>
            <td class="border border-secondary p-3">
              <div class="mr-10 flex flex-row-reverse gap-4">
                <button @click="deleteItem(index, 'supplyBackbone')" class="h-[51px] w-[125px] rounded-md border border-solid border-gray-300 pb-3.5 pl-7 pr-7 pt-3.5">Delete</button>
                <button
                @click="handleShowModal('supplyBackbone')"
                    class="h-[51px] w-[125px] rounded-md border border-solid border-[transparent] bg-[#D50036] pb-3.5 pl-7 pr-7 pt-3.5"
                  > Add Item
                  </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
     </div>
  </div>
    </div>
  </div>
</div>   
<AddBomItemModal :showModal="showModal" :bom="bom" @item-added="handleItemAdded" @close-modal="handleCloseModal"/>
    </div>
  </div>
</template>
<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import workplaceRequestsv2 from '../../services/workplaceRequestsv2.js'
import AddBomItemModal from './AddBomItemModal.vue';
import Swal from 'sweetalert2'
import LoadingSpinner from '../LoadingSpinner.vue';


const route = useRoute()
const isAccessChecked = ref(false);
const isRouterChecked = ref(false);
const isLanChecked = ref(false);
const loading = ref(false);

const bom = ref('');

const bomItems = ref({
 supplyLastMile : [], 
 serviceLastMile : [],
 supplyBackbone: [], 
 serviceBackbone : [],
 supplyAccess: [],
 serviceAccess: []
});

const payload = ref({
  assignment_id: '',
  latitutude: '',
  longitude: '',
  variance_status: '',
  labelled: '',
  node_type: '',
  address: '',
  node_image: '',
  wifi_solution: '',
  is_mdu: '',
  no_of_mdu: '',
  location_type: '',
  type_of_buildings: '',
  lan: '',
  wlan: '',
  access_points: '',
  router : '',
  bom : bomItems.value
})



const showModal = ref(false);

const handleItemAdded = (item, bom) => {
  bomItems.value[bom].push(item);
  showModal.value = false; 
  console.log(bomItems.value);
}

const handleShowModal = (ObjKey) => {
  showModal.value = true
  bom.value = ObjKey;
}

const handleCloseModal = () => {
  showModal.value = false
}


const props = defineProps(['submitForm'])
const emit = defineEmits(['formSubmitted'])
const router = useRouter()
watch(
  () => props.submitForm,
  (newValue) => {
    if (newValue == true) {
      submitReport()
    }
  }
)

const filesChange = async (value) => {
  try {
    payload.value.node_image = value[0]
    console.log(payload)
  } catch (e) {
    alert(e.message)
  }
}

const setRadioValue = (label) => {
  let input = document.getElementById(label)
  if (input.checked) {
    payload.value[label] = 'yes'
  } else {
    payload.value[label] = 'no'
  }
}

const submitReport = async () => {
  loading.value = true
  try {
    let formData = new FormData()
    formData.append('assignment_id', route.params.id)
    formData.append('latitude', payload.value.latitutude)
    formData.append('longitude', payload.value.longitude)
    formData.append('variance_status', payload.value.variance_status)
    formData.append('labelled', payload.value.labelled)
    formData.append('node_type', payload.value.node_type)
    formData.append('address', payload.value.address)
    formData.append('node_image', payload.value.node_image)
    formData.append('wifi_solution', payload.value.wifi_solution)
    formData.append('is_mdu', payload.value.is_mdu)
    formData.append('no_of_mdu', payload.value.no_of_mdu)
    formData.append('location_type', payload.value.location_type)
    formData.append('type_of_buildings', payload.value.type_of_buildings)
    formData.append('lan', payload.value.lan)
    formData.append('wlan', payload.value.wlan)
    formData.append('access_points', payload.value.access_points)
    formData.append('router', payload.value.router);
    formData.append('bom', JSON.stringify(payload.value.bom))

    const response = await workplaceRequestsv2(
      'post',
      'operations/sd/survey-report/create',
      formData
    )
    const {status, data} = response;
    if(status == 422){
      loading.value = false;
      const valuesArray = Object.values(data.errors);

      Swal.fire({
        icon: 'error',
        title: 'Bad Request',
        text: valuesArray[0] || 'Some fields are missing',
      })
    }
    if (status == 200) {
      loading.value = false
      // alert("successful");
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'processed successfully',
      })
      router.push({ name: 'schedule' })
    } else if (status == 400 || status == 500) {
      loading.value = false
      Swal.fire({
        icon: 'error',
        title : 'Bad Request',
        text : data?.message
      });
    }
    emit('formSubmitted')
  } catch (e) {
    loading.value = false
    console.log(e)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message,
    })
  }
}

const visibleTables = ref([]);

const toggleTable = (tableName) => {
  const index = visibleTables.value.indexOf(tableName);
  if (index > -1) {
    visibleTables.value.splice(index, 1);
  } else {
    visibleTables.value.push(tableName); 
  }
};
function deleteItem(index, bom) {
  bomItems.value[bom].splice(index, 1);
}
</script>
