<script>
    export let y;

    let tabs = [
        {name: "Projects", link: '#projects'},
        {name: "About me", link: '#about'},
        {name: "Skills", link: '#skills'}
    ]

     let active = "projects";
</script>

<header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid ' + 
            ( y > 0 ? ' py-4 bg-slate-950 border-violet-950 ' : ' py-6 bg-transparent border-transparent')}>
    <div class="font-medium w-[27px] sm:w-[33px] md:w-[40px] lg:w-[45px] xl:w-[50px] h-auto">
        <p class="freckle text-[1.6rem] text-violet-400 pl-14">SANJU</p>
    </div>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a href={tab.link}
                
            class = {`duration-200 hover:text-fuchsia-300 pb-1 border-b-3 transition-colors ${
            active === "projects"
                ? "border-fuchsia-300 text-white"
                : " "
            }`} on:click={() => (active = "projects")}>
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
    <a href="https://github.com/Sanjuontheweb" target="_blank" 
    class="blueShadow relative overflow-hidden px-3 py-2 group rounded-xl bg-violet-800 text-slate-300 cursor-pointer">
        <div class="absolute top-0 right-full w-full h-full bg-fuchsia-600 opacity-20 group-hover:translate-x-full z-0 duration-250" ></div>
        <h4 class="relative z-9">Github</h4>
    </a>
</header>