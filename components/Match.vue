<template>
  <div>
    <div id="matches" style="padding-bottom: 200px;">
        <div style="width: 80%; margin: 0 auto;">
            <p class="freshy-p text-center">test</p>
        </div>

        <div id="hidden-divs" style="display: none;">
        </div>

        <input type="hidden" id="match-offset">
        <input type="hidden" id="match-passed">
        <input type="hidden" id="match-all">
        <div id="phone">
            <div id="app">
                <div class="header">
                    <div class="top">
                        <span class="left">
                            <span class="fontawesome-circle"></span>
                            <span class="fontawesome-circle"></span>
                            <span class="fontawesome-circle-blank"></span>
                            <span class="fontawesome-signal"></span>
                        </span>
                        <span class="center clock"></span>
                        <span class="right">
                            <span>75%</span>
                            <div id="battery"></div>
                            <span class="fontawesome-bolt"></span>
                        </span>
                    </div>
                </div>
                <div id="people"></div>
                <div id="control">
                    <div class="button no">
                        <a href="#" class="trigger" onclick="return false;">
                            <svg width="24" height="50" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9328 13.0218L23.004 6.93864C24.332 5.60795 24.332 3.32676 23.004 1.99607C21.6759 0.665374 19.3992 0.665374 18.0711 1.99607L12 8.07924L5.92885 1.99607C4.60079 0.665374 2.32411 0.665374 0.996047 1.99607C-0.332016 3.32676 -0.332016 5.60795 0.996047 6.93864L7.06719 13.0218L0.996047 19.105C-0.332016 20.4357 -0.332016 22.7169 0.996047 24.0476C1.75494 24.8079 2.51383 24.998 3.46245 24.998C4.41107 24.998 5.16996 24.6178 5.92885 24.0476L12 17.9644L18.0711 24.0476C18.83 24.8079 19.5889 24.998 20.5375 24.998C21.4862 24.998 22.2451 24.6178 23.004 24.0476C24.332 22.7169 24.332 20.4357 23.004 19.105L16.9328 13.0218Z" fill="#FF0000" />
                            </svg>
                        </a>
                    </div>
                    <div class="button info">
                        <a href="#" class="trigger" onclick="return false;">
                            <svg width="25" height="53" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 19.8634C0.249103 19.6277 0.474897 19.3597 0.748765 19.1591C9.32168 12.9139 17.9004 6.67597 26.4777 0.438063C26.638 0.320919 26.7982 0.197918 26.9745 0.108596C27.5382 -0.176942 28.1515 0.123239 28.2695 0.744101C28.303 0.922745 28.2943 1.11018 28.2943 1.29321C28.2957 4.41363 28.2957 7.53405 28.2957 10.6559C28.2957 10.8346 28.2957 11.0132 28.2957 11.1758C29.5194 11.3017 30.6935 11.3808 31.8545 11.5492C35.6231 12.0968 39.1004 13.4293 42.2294 15.6184C44.9128 17.4957 47.0862 19.8546 48.6406 22.7613C50.7455 26.7002 51.5045 30.8691 50.664 35.2869C49.8351 39.6432 47.6791 43.2878 44.5369 46.3335C43.2768 47.5548 41.8274 48.5798 40.4624 49.6897C39.9686 50.0909 39.3917 50.0426 38.8484 49.8815C38.1622 49.6795 38.0632 48.9429 38.6051 48.3484C39.1659 47.7334 39.7661 47.1521 40.2832 46.5034C41.7312 44.6891 42.6723 42.6464 42.7189 40.2889C42.7786 37.1919 41.4326 34.7143 39.1543 32.7287C36.4957 30.4108 33.3157 29.377 29.8617 29.0797C29.3679 29.0373 28.8697 29.0299 28.2957 29.0021C28.2957 29.2276 28.2957 29.4194 28.2957 29.6127C28.2957 32.7331 28.2928 35.8536 28.2986 38.9754C28.3001 39.4308 28.2578 39.8482 27.799 40.0839C27.3401 40.3197 26.973 40.1044 26.6088 39.8408C17.9485 33.5795 9.28381 27.3182 0.626398 21.0495C0.381666 20.8723 0.206857 20.5941 0 20.3642C0 20.1973 0 20.0304 0 19.8634Z" fill="#BDBDBD" />
                            </svg>
                        </a>
                    </div>
                    <div class="button yes">
                        <a href="#" class="trigger" onclick="return false;" style="background-color: #00A893;">
                            <svg width="28" height="50" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1265 23.8021C5.42427 17.0625 0 13.4925 0 7.81414C0 3.52011 3.06133 0 7.25334 0C10.1623 0 12.3209 1.78651 13.6533 4.3208C14.9857 1.78667 17.1442 0 20.0533 0C24.2458 0 27.3067 3.5208 27.3067 7.81414C27.3067 13.4918 21.8895 17.0563 14.1802 23.802C13.8785 24.066 13.4282 24.066 13.1265 23.8021Z" fill="white" />
                            </svg>
                        </a>
                    </div>

                    <div class="button picture">
                        <a href="#" class="trigger" onclick="return false;" style="background-color: #00A893;">
                            <img src="https://unlok.me/media/models/e973d6721f990140341f7f60ac17a0f7/main_pic.jpg?v=1631116722" id="circle-image">
                        </a>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  <link rel="stylesheet" href="https://www.unlok.me/css/match.css"></link>
  <script src="https://www.unlok.me/js/match.js"></script>

</div>

</template>

<script>
export default {
  methods: {
    toggleShake() {
      this.$refs.logoRef.classList.toggle('shaking')
    },
    changeToPhotos(){
      return this.$emit('callPhotos');
    },
    changeToMatch(){
      return this.$emit('callMatch');
    },
  },
}
</script>

<style lang="scss">
</style>