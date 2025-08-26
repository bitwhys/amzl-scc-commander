import React, { useState } from "react";
import { Search, Home, Settings, User, Camera, Mail, Phone, Music } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchBar } from "@/components/search-bar.tsx";
import { ThemeToggle } from "@/components/theme-toggle.tsx";

const directory = {
  A: [
    {
      id: 1,
      name: "Leslie Abbott",
      email: "leslie.abbott@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Hector Adams",
      email: "hector.adams@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Blake Alexander",
      email: "blake.alexander@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 4,
      name: "Fabricio Andrews",
      email: "fabricio.andrews@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  B: [
    {
      id: 5,
      name: "Angela Beaver",
      email: "angela.beaver@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 6,
      name: "Yvette Blanchard",
      email: "yvette.blanchard@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 7,
      name: "Lawrence Brooks",
      email: "lawrence.brooks@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  C: [
    {
      id: 8,
      name: "Jeffrey Clark",
      email: "jeffrey.clark@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 9,
      name: "Kathryn Cooper",
      email: "kathryn.cooper@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  E: [
    {
      id: 10,
      name: "Alicia Edwards",
      email: "alicia.edwards@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 11,
      name: "Benjamin Emerson",
      email: "benjamin.emerson@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 12,
      name: "Jillian Erics",
      email: "jillian.erics@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 13,
      name: "Chelsea Evans",
      email: "chelsea.evans@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  G: [
    {
      id: 14,
      name: "Michael Gillard",
      email: "micheal.gillard@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 15,
      name: "Dries Giuessepe",
      email: "dries.giuessepe@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  M: [
    {
      id: 16,
      name: "Jenny Harrison",
      email: "jenny.harrison@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 17,
      name: "Lindsay Hatley",
      email: "lindsay.hatley@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 18,
      name: "Anna Hill",
      email: "anna.hill@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  S: [
    {
      id: 19,
      name: "Courtney Samuels",
      email: "courtney.samuels@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 20,
      name: "Tom Simpson",
      email: "tom.simpson@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  T: [
    {
      id: 21,
      name: "Floyd Thompson",
      email: "floyd.thompson@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 22,
      name: "Leonard Timmons",
      email: "leonard.timmons@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 23,
      name: "Whitney Trudeau",
      email: "whitney.trudeau@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  W: [
    {
      id: 24,
      name: "Kristin Watson",
      email: "kristin.watson@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 25,
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  Y: [
    {
      id: 26,
      name: "Emma Young",
      email: "emma.young@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};

const App = () => {
  return (
    // Wrapper
    <div className="relative h-svh w-svw flex flex-col overflow-hidden bg-gray-4">
      {/* Main Content */}
      <div className="h-full flex flex-col grow">
        <div className="shrink-0 shadow border-b bg-gray-4 p-3">
          <SearchBar />
        </div>
        <div className="grow flex overflow-y-auto">
          <StackedList />
        </div>
      </div>
      <SiteDrawer />
    </div>
  );
};
export default App;

function SiteDrawer({}) {
  return (
    // Drawer Component
    <div className="z-10 absolute bottom-0 inset-x-0 shadow-md">
      {/* Drawer content */}
      <div className="bg-card border-t rounded-t-4xl p-3">
        {/* Handle */}
        <div className="flex items-center justify-center select-none">
          <div className="h-1.5 w-16 rounded-full bg-gray-6"></div>
        </div>
        {/*  Content */}
        <div className="hidden">
          <div className="py-2">
            <div className="flex items-center justify-between select-none">
              <h2 className="text-lg font-semibold mb-2">Recent Searches</h2>
              {/* TODO: shared search context*/}
              <button className="hidden">
                <svg
                  className="size-6 text-gray-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm52.18,93.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z"></path>
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-11 text-center select-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className="grid grid-cols-4 gap-x-3 mt-5">
              <div>
                <div className="w-full h-auto aspect-square rounded-xl bg-gray-5"></div>
                <h3 className="text-xs font-medium  mt-0.5 text-center">STG.G48</h3>
              </div>
              <div>
                <div className="w-full h-auto aspect-square rounded-xl bg-gray-5"></div>
                <h3 className="text-xs font-medium  mt-0.5 text-center">STG.C21</h3>
              </div>
              <div>
                <div className="w-full h-auto aspect-square rounded-xl bg-gray-5"></div>
                <h3 className="text-xs font-medium  mt-0.5 text-center">E-16.3G</h3>
              </div>
              <div>
                <div className="w-full h-auto aspect-square rounded-xl bg-gray-5"></div>
                <h3 className="text-xs font-medium  mt-0.5 text-center">STG.E17</h3>
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="flex items-center justify-between select-none">
              <h2 className="text-lg font-semibold mb-2">Saved Items</h2>
              <div className="flex items-center gap-x-3">
                <button>
                  <svg
                    className="size-6 text-gray-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-11 text-center select-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className="grid grid-cols-4 gap-x-3 mt-5">
              <div>
                <div className="w-full h-auto aspect-square rounded-xl bg-gray-5"></div>
                <h3 className="text-xs font-medium  mt-0.5 text-center">bockarig</h3>
              </div>
              <div>
                <div className="w-full h-auto aspect-square rounded-xl bg-gray-5"></div>
                <h3 className="text-xs font-medium  mt-0.5 text-center">STG.G48</h3>
              </div>
              <div>
                <div className="w-full h-auto aspect-square rounded-xl bg-gray-5"></div>
                <h3 className="text-xs font-medium  mt-0.5 text-center">C-7.W</h3>
              </div>
              {/* TODO:  DrawerItem - formats item name */}
              <div>
                <div className="w-full h-auto aspect-square rounded-xl bg-gray-5"></div>
                <h3 className="text-xs font-medium  mt-0.5 text-center overflow-hidden text-ellipsis">
                  TBA32384708300
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="px-3 py-1 flex items-center justify-between gap-x-3 bg-gray-4 border-t">
        <div className="flex items-center gap-x-5 text-gray-10">
          <div className="p-1 text-accent-9">
            <svg
              className="size-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm-16,80H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96-96H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM144,184a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8,8,0,0,0,144,184Zm64-32H184v-8a8,8,0,0,0-16,0v56H144a8,8,0,0,0,0,16h32a8,8,0,0,0,8-8V168h24a8,8,0,0,0,0-16Zm0,32a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8,8,0,0,0,208,184Z"></path>
            </svg>
          </div>
          <div className="p-1">
            <svg
              className="size-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M232,48V88a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h40A8,8,0,0,1,232,48ZM72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Zm152-40a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160ZM32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96ZM80,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,80,80Zm104,88V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0ZM144,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,144,80Zm-32,0a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,112,80Z"></path>
            </svg>
          </div>
          <div className="p-1">
            <svg
              className="size-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M75.19,198.4a8,8,0,0,0,11.21-1.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6A67.88,67.88,0,0,0,155,165.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,73.6,187.2,8,8,0,0,0,75.19,198.4ZM128,112a24,24,0,1,1-24,24A24,24,0,0,1,128,112Zm72-88H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM88,64a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Z"></path>
            </svg>
          </div>
        </div>
        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </div>
  );
}

function StackedList() {
  return (
    <div className="h-full w-full overflow-y-auto">
      {Object.keys(directory).map((letter) => (
        <div key={letter} className="relative">
          <div className="sticky top-0 z-10 border-y border-t-gray-6 border-b-gray-7 bg-gray-6 px-3 py-1.5 text-sm/6 font-semibold">
            <h3 className="relative">{letter}</h3>
          </div>
          <ul role="list" className="divide-y divide-gray-7">
            {directory[letter].map((person) => (
              <li key={person.email} className="flex gap-x-4 px-3 py-5">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10"
                />
                <div className="min-w-0">
                  <p className="text-sm/6 font-semibold">{person.name}</p>
                  <p className="mt-1 truncate text-xs/5 text-gray-11">{person.email}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
