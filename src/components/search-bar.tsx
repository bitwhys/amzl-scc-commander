export function SearchBar() {
  return (
    <div className="flex">
      <div className="-mr-px grid grow grid-cols-1 focus-within:relative">
        <input
          id="query"
          name="query"
          type="text"
          placeholder="Search qr-codes..."
          className="col-start-1 row-start-1 block w-full rounded-l-full bg-gray-7 py-1.5 pr-3 pl-10 text-lg font-medium outline-1 -outline-offset-1 outline-gray-a5 placeholder:text-gray-9 focus:outline-2 focus:-outline-offset-2 focus:outline-accent-a8 sm:pl-9 sm:text-sm/6"
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-11 sm:size-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
        </svg>
      </div>
      <button
        type="button"
        className="flex shrink-0 items-center gap-x-1.5 rounded-r-full bg-gray-7 px-3 py-2 text-sm font-semibold outline-1 -outline-offset-1 outline-gray-a5 hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-ml-0.5 size-5 text-gray-11"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M204,136a12,12,0,0,1-12,12H64a12,12,0,0,1,0-24H192A12,12,0,0,1,204,136Zm28-60H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Zm-80,96H104a12,12,0,0,0,0,24h48a12,12,0,0,0,0-24Z"></path>
        </svg>
      </button>
    </div>
  );
}
