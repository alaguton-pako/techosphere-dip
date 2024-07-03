<template lang="">
  <main class="p-10">
    <section class="my-12 flex justify-between items-center">
        <select class="p-2.5 border border-secondary rounded-md focus:outline-none capitalize">
            <option value="" selected>inbox</option>
            <option value="">option 2</option>
            <option value="">option 3</option>
        </select>
        <div class="flex flex-row-reverse items-center text-sm">
            <button class="border border-secondary rounded-md py-2 px-4 shadow">End Chat</button>
            <button class="border border-primary bg-primary text-white mx-4 rounded-md py-2 px-4 shadow">New Mail</button>
            <div class="flex items-center mx-4">
                <input type="search" placeholder="Search" class="p-2 rounded-l-md focus:outline-none border border-secondary border-r-0 w-[230px]">
                <button class="bg-primary-gray h-full py-2.5 px-3 border border-secondary rounded-r-md">
                    <img src="../../assets/search-white.svg" alt="">
                </button>
            </div>
            <select class="p-2.5 border border-secondary rounded-md focus:outline-none">
                <option value="" selected>Today</option>
                <option value="">option 2</option>
                <option value="">option 3</option>
            </select>
        </div>
    </section>

    <section class="flex border border-gray-300">
      <div
        class="grid w-96 place-content-center border-r border-gray-300 py-5 px-6"
      >
        <select class="border border-secondary p-2">
          <option value="">Assigned to me</option>
          <option value="">option 2</option>
          <option value="">option 3</option>
        </select>
      </div>
      <div class="flex w-full items-center justify-between px-6">
        <div class="flex items-center">
          <div
            class="grid h-[38px] w-[38px] place-content-center rounded-full bg-primary-black text-2xl font-semibold text-white"
          >
            s
          </div>
          <div class="mx-4 text-sm">
            <h1 class="mb-1 font-semibold">Subscription Renewal</h1>
            <span class="text-xs font-medium inline-block mr-3">FIRS Mabushi</span><span>#2345678963</span>
          </div>
        </div>
        <div>
          <span>● Open 2 days</span>
          <select class="ml-10 border border-secondary p-2">
            <option value="" selected>Requires Diagnostics</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>
        </div>
      </div>
    </section>
    <section class="flex border border-gray-300 text-sm">
      <div
        class="grid w-96 place-content-center border-r border-gray-300 py-5 px-6"
      >
        <div class="flex rounded border border-gray-300 capitalize">
          <span class="py-2 px-4">open</span>
          <span class="bordergray-300 border-l py-2 px-4">closed</span>
        </div>
      </div>
      <div class="flex w-full items-center px-6">
        <div class="mr-20 flex flex-col">
          <div>Assigned Staff:</div>
          <select class="mt-2 font-medium capitalize">
            <option value="">staff 1</option>
            <option value="">staff 2</option>
            <option value="">staff 3</option>
          </select>
        </div>
        <div class="flex flex-col">
          <div>Priority:</div>
          <select class="mt-2 font-medium capitalize">
            <option value="">option 1</option>
            <option value="">option 2</option>
          </select>
        </div>
      </div>
    </section>
    <section class="flex border border-t-0 border-gray-300 text-sm">
      <div class="w-96">
        <div class="flex items-center border-b border-gray-300 p-6">
          <div
            class="mr-4 grid h-[38px] w-[38px] place-content-center rounded-full bg-primary-black text-2xl font-semibold text-white"
          >
            <img src="../../assets/envelop-closed.svg" alt="" />
          </div>
          <div>
            <h2 class="font-semibold">FIRS Mabushi</h2>
            <div class="font-medium">Subscription Renewal</div>
            <div>Good day, I would like to re...</div>
          </div>
        </div>
        <div class="flex items-center p-6">
          <div
            class="mr-4 grid h-[38px] w-[38px] place-content-center rounded-full bg-primary-black bg-opacity-40 text-2xl font-semibold text-white"
          >
            <img src="../../assets/envelope.open.svg" alt="" />
          </div>
          <div>
            <h2 class="font-semibold">FIRS Mabushi</h2>
            <div class="font-medium">Subscription Renewal</div>
            <div>Good day, I would like to re...</div>
          </div>
        </div>
      </div>
      <div class="w-full pl-6">
        <div class="mx-32 my-10">
          <div class="flex items-center bg-primary-black px-8 py-3 text-white">
            <img src="../../assets/envelop-closed.svg" alt="" />
            <div class="ml-5">
              <h2 class="font-medium">FIRS Mabushi</h2>
              <span class="text-xs">09:00 AM</span>
            </div>
          </div>
          <div class="border border-gray-300 px-5 py-10">
            Lorem ipsum dolor sit amet consectetur. Et dui neque et fames
            volutpat. Vulputate feugiat nisl diam nec cursus malesuada. Viverra
            laoreet faucibus integer quis non. Fermentum et ut nec vitae. Montes
            neque posuere enim urna fermentum nulla non gravida. Amet massa cursus
            hendrerit pellentesque nunc ac viverra. Aliquet et dolor imperdiet at.
            Aliquam morbi cursus dolor risus consequat mauris augue quis tortor.
            At cursus vitae risus porttitor lectus ut morbi tincidunt neque. Sit
            tortor at eget amet. Lectus velit pellentesque massa in enim praesent
            in. A sit in in ullamcorper. Blandit ut dui massa vel aliquam at vitae
            consectetur nisl. Faucibus cursus amet felis tempor cursus orci amet
            consectetur blandit.
          </div>
        </div>
        <div>
          <div class="flex items-center border border-r-0 border-gray-300">
            <div class="flex items-center border-b border-primary-gray py-2 px-6">
              <img src="../../assets/mail.svg" alt="" class="mr-2" />
              <span>Email</span>
            </div>
            <div class="py-2 px-6">
              <span>Comment</span>
            </div>
          </div>
          <textarea
            class="h-40 w-full resize-none border-l border-b border-gray-300 bg-transparent p-4 focus:outline-none"
          ></textarea>
          <div class="my-6 flex flex-row-reverse pr-6">
            <button class="rounded-md bg-primary py-3 px-10 text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>
