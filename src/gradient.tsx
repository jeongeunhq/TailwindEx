export default function Gradient() {
    return (
        <div className="flex flex-col ustify-center items-center h-screen">
        <span className="inline-block w-[50px] h-[50px] bg-gradient-to-tr from-[#096cde] via-[#096cde] via-30% to-[#ddf1ff] rounded-[50%] bg-clip-border bg-scroll bg-origin-padding" />
        <div className="text-[100px] mt-[10px] font-bold bg-gradient-to-tr from-[#15c064]  to-[#00d1ff] bg-clip-text text-transparent ">
                Shopify
            </div>
        <div className="text-[30px] mt-[20px] p-[10px] font-bold bg-gradient-to-tr from-[#e9f9f4]  to-[#cfebfe]">
            from hello world to IPO
            </div>

            <a
      href="https://themes.shopify.com?locale=en"
      className="group flex justify-start items-center mt-[30px]"
      data-component-name=""
    >
      <span className=" text-[20px] underline font-semibold inline-block mr-2">
        Theme Store
      </span>
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
        className="group-hover:opacity-100 opacity-0 w-4 h-4 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform align-bottom"
      >
        <path
          d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <button className="mt-[20px] text-[20px] p-[10px] rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-150 hover:bg-indigo-200 duration-300 ...">
  Button
</button>
        </div>
    );
}
