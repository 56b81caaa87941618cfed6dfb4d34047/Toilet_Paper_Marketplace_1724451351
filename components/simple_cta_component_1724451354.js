<template>
    <section id="cta-component" class="flex-1 bg-gradient-to-br from-pink-400 to-purple-600 min-h-870px p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">
                        Roll Into Savings with Our Toilet Paper Marketplace
                    </h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-100 md:text-lg">
                        Discover the best deals on quality toilet paper from various brands and suppliers, all in one convenient place.
                    </p>
                </div>

                <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Toilet_Paper_Marketplace_1724451351/main/images/ece322db7eb74995af1b6a22e802a8af.jpeg" alt="Toilet Paper Marketplace" class="mx-auto mb-6 rounded-lg shadow-lg" />

                <div id="cta-button-container" class="flex flex-col sm:flex-row gap-4">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-600 bg-opacity-70 hover:bg-opacity-90 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">
                        Start Browsing Rolls
                    </a>
                    <a id="email-santa-button" href="#" class="flex-1 text-white bg-pink-500 bg-opacity-70 hover:bg-opacity-90 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">
                        <i class='bx bx-envelope mr-2'></i>Email Santa Claus
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>