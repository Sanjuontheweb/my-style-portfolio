<script>
    import profile from '$lib/assets/profile.png';
    import GOG_img from '$lib/assets/GOG.png';
    import HMS_img from '$lib/assets/HMS.png';
    import ACT_img from '$lib/assets/ACT.png';
    import phone_track_img from "$lib/assets/ptrack.png";
    import amadeus_img from "$lib/assets/amadeus.png";
</script>

<div class="flex flex-row justify-center">
            <div class="flex flex-col items-center justify-center gap-4 sm:gap-5 lg:gap-6 ">    <!-- make this responsive -->
                <div class="mr-0 md:mr-13 lg:mr-30 px-2 py-2 justify-center items-center outline-4 outline-dotted outline-slate-400 rounded-xl bg-linear-[25deg,red_5%,violet_60%,cyan_90%,teal]">
                    <a href="https://github.com/Sanjuontheweb/GOG" target="_blank"><img src={GOG_img} alt="GOG" class="w-[12rem] sm:w-[15rem] lg:w-[16rem] lg:hover:w-[23rem] transition-ease duration-300" /></a>
                </div>
                <div class="mr-0 md:mr-60 lg:mr-90 px-2 py-2 justify-center items-center border-2 border-dashed border-red-500 rounded-xl bg-linear-[25deg,red_5%,gray_60%,cyan_90%,teal]">
                    <a href="https://github.com/Sanjuontheweb/HMS" target="_blank"><img src={HMS_img} alt="HMS" class="w-[10rem] sm:w-[16rem] lg:w-[13rem] lg:hover:w-[22rem] transition-discrete duration-300" /></a>
                </div>
                <div class="ml-0 md:ml-[22px] lg:ml-[30px] px-4 py-4 justify-center items-center outline-3 outline-dotted outline-blue-500 rounded-[30rem] bg-linear-[25deg,red_5%,orange_60%,teal_90%,teal]">
                    <a href="https://github.com/Sanjuontheweb/Phone-tracker" target="_blank"><img src={phone_track_img} alt="ptrack" class="w-[12rem] sm:w-[15rem] lg:w-[16rem] lg:hover:w-[23rem] transition-ease duration-300" /></a>
                </div>
                
                <div class="ml-0 md:ml-60 lg:ml-100 px-2 py-2 justify-center items-center border-4 border-dotted border-cyan-500 rounded-xl bg-linear-[25deg,black_5%,gray_60%,gray_90%,white]">
                    <a href="https://github.com/Sanjuontheweb/ACT" target="_blank"><img src={ACT_img} alt="ACT" class="w-[17rem] sm:w-[20rem] lg:w-[22rem] lg:hover:w-[30rem] transition-ease duration-300" /></a>
                </div>
                <div class="mr-0 md:mr-40 lg:mr-70 px-1 py-1 justify-center items-center border-3 border-dashed border-amber-500 rounded-xl bg-linear-[25deg,orange_5%,violet_60%,cyan_90%,teal]">
                    <a href="https://github.com/Sanjuontheweb/Amadeus" target="_blank"><img src={amadeus_img} alt="Amadeus" class="w-[22rem] sm:w-[23rem] lg:w-[25rem] lg:hover:w-[35rem] transition-ease duration-300" /></a>
                </div>
            </div>
        </div>