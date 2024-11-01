<!-- Summary: This component contains the app's logo and name in a large, bold font.
     They're both in the same line. And then a line of text underneath it.
     Both of these lines are center aligned. -->

<template>
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
        <div id="footer-container" class="max-w-screen-xl p-6 py-8 mx-auto lg:py-16 md:p-10 lg:p-12">
            <hr id="footer-divider" class="my-6 border-pink-300 sm:mx-auto lg:my-8">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition-colors duration-300">
                        <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 sm:h-10" alt="Landwind Logo" />
                        TrashTopia: Your Garbage Emporium
                    </a>
                </div>
            </div>
            <div class="flex">
                <div id="footer-text" class="flex-1 block text-sm text-center text-white hover:text-pink-200 transition-colors duration-300">
                    © 2023 TrashTopia. Waste management redefined. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
}
</script>