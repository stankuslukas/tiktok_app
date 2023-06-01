<template>
  <div>
    <div style="display: flex; width: calc(100vw - 30px);">
    <div style="width: 100px;">
    <svg width="100" height="50" viewBox="0 0 310 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.8787 44.6095V52.1009C25.8787 53.463 26.9003 54.4845 28.2623 54.4845C29.6244 54.4845 30.646 53.463 30.646 52.1009V44.6095C31.6675 43.9285 32.1783 42.7367 32.1783 41.5449C32.1783 39.3315 30.4757 37.6289 28.2623 37.6289C26.049 37.6289 24.3464 39.3315 24.3464 41.5449C24.1761 42.7367 24.8572 43.7582 25.8787 44.6095Z" fill="white"/>
<path d="M86.1508 0.340517H76.6164C63.3362 0.340517 52.6099 11.5776 52.6099 25.1983V53.972C52.6099 64.8685 44.097 73.5517 33.7112 73.5517H24.1767C13.6207 73.5517 5.10776 64.6983 5.10776 53.8017V2.72414C5.10776 1.19181 3.91595 0 2.55388 0C1.19181 0 0 1.19181 0 2.72414V53.972C0 67.7629 10.7263 78.8297 24.0065 78.8297H33.5409C46.8211 78.8297 57.5474 67.5927 57.5474 53.972V25.1983C57.5474 14.3017 66.0603 5.61853 76.4461 5.61853H85.9806C96.3664 5.61853 104.879 14.472 104.879 25.1983V75.7651C104.879 77.2974 106.071 78.4892 107.433 78.4892C108.795 78.4892 109.987 77.2974 109.987 75.7651V25.1983C110.157 11.4073 99.431 0.340517 86.1508 0.340517Z" fill="white"/>
<path d="M185.755 73.5517H154.768C144.382 73.5517 135.869 64.6983 135.869 53.8017V2.72414C135.869 1.19181 134.678 0 133.316 0C131.954 0 130.762 1.19181 130.762 2.72414V53.8017C130.762 67.5927 141.488 79 154.768 79H185.755C187.117 79 188.309 77.8082 188.309 76.2759C188.309 74.7435 187.117 73.5517 185.755 73.5517Z" fill="white"/>
<path d="M228.488 0H225.594C210.781 0 198.863 11.9181 198.863 26.7306V51.9289C198.863 66.7414 210.781 78.6595 225.594 78.6595H228.488C243.301 78.6595 255.219 66.7414 255.219 51.9289V26.7306C255.389 11.9181 243.301 0 228.488 0ZM250.281 51.9289C250.281 63.847 240.577 73.5517 228.659 73.5517H225.764C213.846 73.5517 204.141 63.847 204.141 51.9289V26.7306C204.141 14.8125 213.846 5.10776 225.764 5.10776H228.659C240.577 5.10776 250.281 14.8125 250.281 26.7306V51.9289Z" fill="white"/>
<path d="M308.849 74.0625L280.927 48.0129C278.373 45.6293 276.841 42.3944 276.841 39.1595C276.841 35.9246 278.203 32.6896 280.927 30.306L308.509 4.76724C309.53 3.74569 309.7 2.0431 308.849 1.02155C307.998 -0.170259 306.465 -0.170259 305.444 0.681034L277.862 26.2198C277.522 26.5603 277.011 27.0711 276.67 27.4116V2.72414C276.67 1.19181 275.478 0 274.116 0C272.754 0 271.562 1.19181 271.562 2.72414V76.1056C271.562 77.6379 272.754 78.8297 274.116 78.8297C275.478 78.8297 276.67 77.6379 276.67 76.1056V50.9073C277.011 51.2478 277.351 51.7586 277.862 52.0991L305.784 78.1487C306.295 78.6595 306.806 78.8297 307.317 78.8297C307.998 78.8297 308.679 78.4892 309.19 77.8082C310.041 76.7866 309.871 75.084 308.849 74.0625Z" fill="white"/>
</svg>
    </div>

    <div style="width: calc(100% - 100px); display: none;">
 <ul class="nav">
  <li class="menu" @click="setActiveTab('reels')" :class="{'initial': activeTab !== 1, 'active': activeTab === 'reels'}">Reels</li>
  <li class="menu" @click="setActiveTab('photos')" :class="{'initial': activeTab !== 1, 'active': activeTab === 'photos'}">Photos</li>
</ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'reels'
    }
  },
  methods: {
    setActiveTab(tabas){
              let _this = this; //just for context change,
                                //this can be ignored if you make                                   //this function an arrow
                                //or bind the function
              _this.activeTab = tabas;

setTimeout(() => {
  if(tabas == 'photos'){
              this.changeToPhotos();
  }else{
    this.changeToReels();
  }
}, 500)
          },
    toggleShake() {
      this.$refs.logoRef.classList.toggle('shaking')
    },
    changeToPhotos(){
      return this.$emit('callPhotos');
    },
    changeToReels(){
      return this.$emit('callReels');
    },
  },
}
</script>

<style lang="scss">
.nav{
  justify-content: center;
}

.nav li {
  display: inline-block;
  font-size: 20px;
  margin-right: 10px;
  margin-top: 12px;
  font-size: 15px;
  font-weight: bold;
  color: white;
}

.active{
  border-bottom: 2px solid white;
}

.item {
  display: flex;
  align-items: center;
  font-size: 2.1rem;
  line-height: 3rem;
  color: #fff;
  white-space: nowrap;
  mix-blend-mode: screen;
  filter: drop-shadow(3px -3px 0px #0ff) drop-shadow(3px -3px 0px #f00);
  transform: translate(1px, -1px);
  padding: 0;
  margin: 0;

  &.shaking {
    animation: shaking 0.2s steps(6, end) infinite;
  }

  figcaption {
    padding-left: 0.4rem;
    display: inline;
  }

  .svg-tiktok {
    fill: #fff;
    width: 2.5rem;
    height: 2.5rem;
  }
}

.sub {
  font-size: 1rem;
  margin-top: -0.3rem;
  padding-left: 4.6rem;
  color: white;
}

@keyframes shaking {
  0% {
    filter: drop-shadow(3px 3px 0px #0ff) drop-shadow(-3px -3px 0px #f00);
    transform: translate(1px, 1px);
  }
  20% {
    filter: drop-shadow(-3px 3px 0px #0ff) drop-shadow(3px -3px 0px #f00);
    transform: translate(-2px, 1px);
  }
  40% {
    filter: drop-shadow(3px -3px 0px #0ff) drop-shadow(3px -3px 0px #f00);
    transform: translate(1px, -1px);
  }
  60% {
    filter: drop-shadow(-3px -3px 0px #0ff) drop-shadow(3px 3px 0px #f00);
    transform: translate(-1px, -1px);
  }
  80% {
    filter: drop-shadow(-2px 3px 0px #0ff) drop-shadow(-3px 2px 0px #f00);
    transform: translate(2px, 0px);
  }
  100% {
    filter: drop-shadow(-3px 1px 0px #0ff) drop-shadow(1px -3px 0px #f00);
    transform: translate(1px, 1px);
  }
}

@media (max-width: 600px) {

  .item {
    font-size: 1.5rem;
    filter: drop-shadow(1.5px -1.5px 0px #0ff)
      drop-shadow(1.5px -1.5px 0px #f00);

    &.shaking {
      animation: none;
    }

    .svg-tiktok {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .sub {
    font-size: 0.6rem;
    margin-top: -0.3rem;
    padding-left: 0.6rem;
  }
}

.logo {
  position: fixed;
  top: 10px;
  left: 10px;
  // padding: 3rem;
  z-index: 10;
}
</style>
