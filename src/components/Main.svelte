<script>
    import profile from '$lib/assets/profile.png';
    import GOG_img from '$lib/assets/GOG.png';
    import HMS_img from '$lib/assets/HMS.png';
    import ACT_img from '$lib/assets/ACT.png';
    import phone_track_img from "$lib/assets/ptrack.png";
    import amadeus_img from "$lib/assets/amadeus.png";

    import blow from "$lib/assets/warli art/blow.png";
    import one from "$lib/assets/warli art/one.png";
    import two from "$lib/assets/warli art/two.png";
    import three from "$lib/assets/warli art/three.png";
    import drums from "$lib/assets/warli art/drums.png";

    import tree_bg from "$lib/assets/tree.jpg";

    import Step from "./Step.svelte";

    let benefits = [
        {name: 'a self taught developer', description: ' Whatever i know now about coding, developing apps, knowledge about systems & more, i taught myself. i fell in love with the creativity developing has to offer. Started off with HTML, CSS, JavaScript, Python, C and evolving my knowledge base to include Javascript frameworks & much more'},
        {name: 'a web developer', description: "Well, I'm like the Spiderman, i design webs to help solve real-world problems, and simple ones as well"},
        {name: 'a communicator', description: 'I am a human & can communicate better than an average one'},
    ]

    let communication_skills = [
        {name: 'HTML', description: 'The first ever programming language i ever put my hands on, 1+ year experience ', color: 'violet-500'},
        {name: 'CSS', description: ' Styling is my second nature, am very incricate for details on this one. 1+ year experience ', color: 'fuchsia-300'},
        {name: 'JS', description: ' Even tho this is not one of my favourite langauges, I can navigate around it just fine. 1+ year experience ', color: 'fuchsia-400'},
        {name: 'Python', description: 'Does it even need a description? my favourite langauage of all & have 1 year experience', color: 'fuchsia-400'},
        {name: 'C', description: 'Recently, even though it might be a headache, i have built a solid project around it. i can work with it more..', color: 'violet-400'}
    ]
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 px-0 md:px-10 lg:px-40 py-8 sm:py-14 mb-12 sm:mb-22 md:mb-30 lg:mb-45 xl:mb-58 mt-8 sm:mt-16 md:mt-20 lg:mt-35 xl:mt-32">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hey <span class="outfit text-fuchsia-300">Stranger</span>👋 <br/>
            </h2>
            <h3 class="font-bold text-3xl sm:text-4xl md:text-5xl">
                I'm an <span class="text-violet-400">aspiring</span> dev <br/>
                who is trying to understand the <span class="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
                font-semibold bg-gradient-to-r bg-clip-text text-transparent from-red-500 via-cyan-500 to-indigo-500 
                cursor-none">magic</span> behind these <span class="text-2xl sm:text-3xl md:text-4xl 
                lg:text-4xl">lil'</span> <span class="text-gray-500">screens</span> <br/>
            </h3>
        </div>
        <div class="relative shadow-2xl grid place-items-center lg:place-items-end">
            <img src={profile} alt="profile" class="object-cover z-[2] max-h-[40vh]" />
        </div>
    </section>

    <div class="flex flex-row items-center justify-center gap-0 md:gap-40 lg:gap-70 bg-repeat-space bg-[url(./lib/assets/tree.jpg)]">
        <div class="w-0 md:w-[6rem] lg:w-[12rem]">
            <img src={blow} alt="blow" class="w-0 lg:w-[2.3rem]">
        </div>

    <section id='projects' class="py-20 lg:py-32 flex flex-col gap-24 py-8 sm:py-14 overflow-show">
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious? <span class="outfit text-violet-500">Dive</span> in.
            </h3>
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A <span class="text-violet-500">couple</span> of my <span class="font-semibold">experiences</span>
            </h6>
        </div>
        <Step />
    </section>

        <div class="grid w-0 md:w-[6rem] lg:w-[12rem] justify-items-end">
            <img src={blow} alt="blow" class="w-0 lg:w-[2.3rem]">
        </div>
    </div>

    <section id="about" class="py-20 pt-10 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 
                    after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
        
            <h6 class="text-lg sm:text-xl md:text-2xl">Wanna know me?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="outfit text-fuchsia-400">about</span> me.</h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am...</p>
        <div class="flex flex-row">
            <img src={three} alt='three' class="w-0 lg:w-[6rem] h-0 lg:h-[6rem]" />
            <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
                {#each benefits as benefit, index}
                    <div class="flex gap-6 sm:gap-8">
                        <p class="outfit text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                            0{index+1}
                        </p>
                        <div class="flex flex-col gap-6 sm:gap-9">
                            <h3 class="text-2xl sm:text-3xl md:text-5xl">
                                {benefit.name}
                            </h3>
                            <p>{benefit.description}</p>
                        </div>
                    </div>
                {/each}
            </div>
            <img src={drums} alt='drums' class="w-0 lg:w-[6rem] h-0 lg:h-[7rem]" />
        </div>
        <section id="skills" class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-fuchsia-300 
                    after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-fuchsia-500 py-4 mt-[6.5rem]">
            <h5 class="text-3xl sm:text-5xl text-center outfit font-bold text-slate-400">My <span class="text-violet-400 outfit">Communication</span> skills...</h5>
        </section>
        <div class="flex flex-row">
            <img src={one} alt='one' class="w-0 lg:w-[5rem] h-0 lg:h-[8rem]" /> 
            <div class="flex flex-col gap-20 mx-auto items-center">
                {#each communication_skills as skills}
                    <div class="flex gap-6 sm:gap-8">
                        <p class="outfit text-4xl sm:text-5xl md:text-6xl text-{skills.color} font-semibold">
                            *
                        </p>
                        <div class="flex flex-col gap-6 sm:gap-9">
                            <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-{skills.color} font-semibold">
                                {skills.name}
                            </h3>
                            <p class="outfit text-xl">{skills.description}</p>
                        </div>
                    </div>
                {/each}
            </div>
            <img src={two} alt='two' class="w-0 lg:w-[5rem] h-0 lg:h-[10rem]" /> 
        </div>
    </section>

</main>