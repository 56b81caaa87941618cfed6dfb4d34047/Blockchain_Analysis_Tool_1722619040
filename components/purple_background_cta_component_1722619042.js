/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1722619042", {
    template: `
    <section id="cta-section-container" class="bg-gradient-to-br from-pink-500 via-purple-600 to-black">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 shadow-lg">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="bg-pink-500 absolute inset-0 translate-z-0 rounded-full blur-3xl opacity-70"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/3 h-1/3 translate-z-0 rounded-full blur-2xl bg-purple-400"></div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-3xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" stop-color="#FF69B4" /><stop offset="100%" stop-color="#8A2BE2" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-lg bg-clip-text pb-3 text-transparent bg-gradient-to-r from-pink-300 to-purple-300">Leveraging advanced algorithms and machine learning, our platform dissects complex blockchain information, revealing patterns, anomalies, and emerging trends that drive informed decision-making.</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 text-4xl font-bold bg-clip-text pb-4 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200"> Unleash the Power of Blockchain Analytics</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-gray-200">Gain valuable insights from the latest blockchain data with our cutting-edge analytics platform. Unlock the full potential of decentralized technologies and stay ahead of the curve.</p></div>
                    <a id="content-cta-button" href="#0" class="btn px-6 py-3 rounded-full transition duration-300 ease-in-out group text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-md hover:shadow-lg">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-300 ease-in-out ml-1 text-pink-200">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
            };
        },
    });
                    