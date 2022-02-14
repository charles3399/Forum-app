<template>
    <div class="p-20 my-3 mx-auto flex flex-col md:flex-row  sm:flex-row justify-center gap-10 font-bold">
        <figure class="bg-white text-black rounded shadow-lg border-transparent border-2 border-b-8 hover:border-orange-400">
            <div class="bg-orange-400 text-white p-6 text-center">
                <i class="fa-solid fa-circle-question text-5xl"></i>
            </div>
            <div class="p-6 text-center tracking-wider">
                <h1>Ask any questions or topics</h1>
            </div>
        </figure>
        <figure class="bg-white text-black rounded shadow-lg border-transparent border-2 border-b-8 hover:border-lime-400">
            <div class="bg-lime-400 text-white p-6 text-center">
                <i class="fa-regular fa-hand text-5xl"></i>
            </div>
            <div class="p-6 text-center tracking-wider">
                <h1>Help by answering questions</h1>
            </div>
        </figure>
        <figure class="bg-white text-black rounded shadow-lg border-transparent border-2 border-b-8 hover:border-sky-500">
            <div class="bg-sky-500 text-white p-6 text-center">
                <i class="fa-solid fa-filter text-5xl"></i>
            </div>
            <div class="p-6 text-center tracking-wider">
                <h1>Filter by what you want!</h1>
            </div>
        </figure>
    </div>
</template>
<script>
export default {
    name: 'Cards',
}
</script>