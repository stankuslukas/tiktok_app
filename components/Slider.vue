<template>
<div>
              <logo class="logo" @callPhotos="swapComponent" @callReels="openReels" />
              <div>
    <div v-if="error" class="error">{{ error }}</div>
    <hooper
      ref="sliderRef"
      style="height: var(--real100vh);"
      v-if="videos.length > 0"
      :settings="sliderSettings"
      @slide="onSlide"
    >
      <slide class="slide" v-for="(item, index) in videos" :key="index" :data-username="`${item.model_name}`">
        <div
          class="background"
          :style="{
            'background-image':
              'url(' + item.poster + ')',
          }"
        />
        <div v-if="!firstPlayDone" class="controls">
          <div @click="onPlayClick" class="video-play-button"></div>
          <div class="scroll-down">
            <span class="mouse">
              <span class="move"></span>
            </span>
          </div>
        </div>

        <div class="right-menu">

          <div class="menu-element" style="display: none;" @click="onShare">
            <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.262779 33.569V21.8306C0.2671 17.8293 1.81649 13.9931 4.57103 11.1637C7.32556 8.33431 11.0603 6.74282 14.9558 6.73838H22.841V4.07879C22.8411 3.41557 23.0327 2.76728 23.3915 2.21588C23.7503 1.66448 24.2602 1.23472 24.8567 0.980934C25.4532 0.727149 26.1096 0.660734 26.7429 0.790083C27.3762 0.919432 27.9579 1.23874 28.4145 1.70763L38.014 11.5662C38.9321 12.5096 39.4479 13.789 39.4479 15.123C39.4479 16.4569 38.9321 17.7363 38.014 18.6797L28.4145 28.5383C27.9579 29.0072 27.3762 29.3265 26.7429 29.4558C26.1096 29.5852 25.4532 29.5188 24.8567 29.265C24.2602 29.0112 23.7503 28.5814 23.3915 28.03C23.0327 27.4786 22.8411 26.8303 22.841 26.1671V23.5075H13.3232C10.7261 23.5102 8.23615 24.5711 6.39974 26.4574C4.56332 28.3437 3.53048 30.9014 3.52789 33.569C3.52789 34.0138 3.35589 34.4403 3.04972 34.7548C2.74356 35.0693 2.32831 35.2459 1.89533 35.2459C1.46235 35.2459 1.04711 35.0693 0.740943 34.7548C0.43478 34.4403 0.262779 34.0138 0.262779 33.569ZM26.1061 8.41529C26.1061 8.86004 25.9341 9.28657 25.6279 9.60105C25.3218 9.91553 24.9065 10.0922 24.4736 10.0922H14.9558C11.926 10.0958 9.02125 11.3336 6.87885 13.5342C4.73646 15.7348 3.53134 18.7185 3.52789 21.8306V24.7048C4.7516 23.2743 6.25832 22.1284 7.94746 21.3436C9.6366 20.5588 11.4693 20.1531 13.3232 20.1537H24.4736C24.9065 20.1537 25.3218 20.3304 25.6279 20.6449C25.9341 20.9593 26.1061 21.3859 26.1061 21.8306V26.1671L35.7039 16.3085C36.01 15.9941 36.1819 15.5676 36.1819 15.123C36.1819 14.6783 36.01 14.2518 35.7039 13.9374L26.1061 4.07879V8.41529Z" fill="white"/>
</svg>
          </div>

          <div class="menu-element" @click="openProfile(item.model_name)">
            <img loading="lazy" class="profile" :src="`${item.model_img}`"></img>
          </div>


          <div class="menu-element" style="display: none;" @click="onLikeReel(index)">
<svg width="47" height="40" viewBox="0 0 47 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.463837 12.5085C0.642763 11.688 0.747733 10.844 1.01374 10.0527C2.70996 5.00215 6.2193 1.88484 11.5728 0.978982C15.9994 0.229751 19.8427 1.56574 23.0694 4.61526C23.1433 4.68423 23.2185 4.75202 23.3115 4.83851C23.7052 4.48903 24.0785 4.13954 24.4722 3.81227C31.9548 -2.39548 43.6149 1.41262 45.8347 10.7763C46.6292 14.1273 45.9958 17.2715 44.5107 20.3082C42.9839 23.4314 40.8224 26.1104 38.3962 28.5953C34.2081 32.8838 29.4475 36.4757 24.3386 39.6421C23.6562 40.0652 23.0348 40.0664 22.3501 39.6433C16.4336 35.9848 10.9668 31.798 6.39345 26.5709C4.1855 24.0462 2.30081 21.3111 1.2356 18.119C0.919502 17.1722 0.776361 16.1705 0.550914 15.1945C0.531829 15.1138 0.493658 15.0367 0.463837 14.9572C0.463837 14.1414 0.463837 13.3243 0.463837 12.5085ZM43.3274 13.4541C43.2821 13.0754 43.2678 12.4255 43.1198 11.806C42.1035 7.53504 39.453 4.74267 35.0562 3.83915C30.8109 2.96719 27.3087 4.39318 24.6356 7.73258C23.8113 8.76233 22.7998 8.77987 21.9994 7.72323C19.3191 4.18513 14.6825 2.67965 10.4479 4.12902C6.30995 5.54567 3.94932 8.46661 3.39703 12.7458C3.13342 14.7866 3.63441 16.7082 4.45866 18.5596C5.86025 21.7061 8.02764 24.3267 10.436 26.7672C14.2078 30.5882 18.4877 33.8002 23.0014 36.7258C23.259 36.893 23.4236 36.8626 23.6646 36.7071C27.5234 34.2186 31.1914 31.4906 34.5481 28.3756C37.0721 26.0332 39.3851 23.512 41.1505 20.5537C42.4125 18.4392 43.2773 16.2009 43.3274 13.4541Z" fill="white" :data-id="`${index}`" />
</svg>
     </div>

     <div class="menu-element" @click="onFullScreen">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.9609 26.7543C37.5289 26.7543 37.1146 26.9259 36.8092 27.2314C36.5037 27.5368 36.3321 27.9511 36.3321 28.3831V31.6405C36.3321 32.9364 35.8173 34.1792 34.901 35.0956C33.9847 36.0119 32.7418 36.5267 31.446 36.5267H28.1885C27.7565 36.5267 27.3423 36.6983 27.0368 37.0037C26.7314 37.3092 26.5598 37.7234 26.5598 38.1554C26.5598 38.5874 26.7314 39.0016 27.0368 39.3071C27.3423 39.6125 27.7565 39.7841 28.1885 39.7841H31.446C33.605 39.7815 35.6748 38.9227 37.2015 37.3961C38.7282 35.8694 39.587 33.7995 39.5896 31.6405V28.3831C39.5896 27.9511 39.418 27.5368 39.1125 27.2314C38.8071 26.9259 38.3928 26.7543 37.9609 26.7543Z" fill="white"/>
<path d="M2.12888 13.7246C2.56084 13.7246 2.97511 13.553 3.28056 13.2475C3.586 12.9421 3.7576 12.5278 3.7576 12.0958V8.83839C3.7576 7.54249 4.27239 6.29968 5.18873 5.38334C6.10507 4.467 7.34788 3.95221 8.64378 3.95221H11.9012C12.3332 3.95221 12.7475 3.78062 13.0529 3.47517C13.3584 3.16973 13.53 2.75545 13.53 2.32349C13.53 1.89152 13.3584 1.47725 13.0529 1.17181C12.7475 0.866361 12.3332 0.694763 11.9012 0.694763H8.64378C6.48475 0.697349 4.41489 1.55617 2.88822 3.08283C1.36156 4.6095 0.502739 6.67936 0.500153 8.83839L0.500153 12.0958C0.500153 12.5278 0.67175 12.9421 0.977195 13.2475C1.28264 13.553 1.69691 13.7246 2.12888 13.7246Z" fill="white"/>
<path d="M11.9012 36.5267H8.6438C7.34791 36.5267 6.10509 36.0119 5.18875 35.0956C4.27242 34.1792 3.75763 32.9364 3.75763 31.6405V28.3831C3.75763 27.9511 3.58603 27.5368 3.28058 27.2314C2.97514 26.9259 2.56086 26.7543 2.1289 26.7543C1.69694 26.7543 1.28266 26.9259 0.977218 27.2314C0.671773 27.5368 0.500175 27.9511 0.500175 28.3831L0.500175 31.6405C0.502762 33.7995 1.36158 35.8694 2.88824 37.3961C4.41491 38.9227 6.48477 39.7815 8.6438 39.7841H11.9012C12.3332 39.7841 12.7475 39.6125 13.0529 39.3071C13.3584 39.0016 13.53 38.5874 13.53 38.1554C13.53 37.7234 13.3584 37.3092 13.0529 37.0037C12.7475 36.6983 12.3332 36.5267 11.9012 36.5267Z" fill="white"/>
<path d="M31.446 0.694748H28.1885C27.7565 0.694748 27.3423 0.866345 27.0368 1.17179C26.7314 1.47724 26.5598 1.89151 26.5598 2.32347C26.5598 2.75544 26.7314 3.16971 27.0368 3.47516C27.3423 3.7806 27.7565 3.9522 28.1885 3.9522H31.446C32.7418 3.9522 33.9847 4.46699 34.901 5.38333C35.8173 6.29966 36.3321 7.54248 36.3321 8.83837V12.0958C36.3321 12.5278 36.5037 12.9421 36.8092 13.2475C37.1146 13.5529 37.5289 13.7245 37.9609 13.7245C38.3928 13.7245 38.8071 13.5529 39.1125 13.2475C39.418 12.9421 39.5896 12.5278 39.5896 12.0958V8.83837C39.587 6.67934 38.7282 4.60948 37.2015 3.08282C35.6748 1.55615 33.605 0.697334 31.446 0.694748V0.694748Z" fill="white"/>
</svg>
     </div>
        </div>

        <video
          crossorigin="anonymous"
          loop
          ref="videoRef"
          oncontextmenu="return false;"
          controlslist="nofullscreen nodownload"
          :preload="(index == 0? 'auto': 'none')"
          playsinline="" webkit-playsinline=""
          muted
          :src="item.reel"
          @ended="onVideoEnd(index + 1)"
          @play="onVideoPlay(index + 1)"
          @click="onVideoClick"
        />

                          <div class="description">
                            <div class="description-box">
                              <b>{{ item.model_name }}</b><br>
                                  {{ item.model_desc }}
                            </div>
                          </div>

      </slide>
</hooper>
  </div>
  </div>

</template>


<script>
import * as Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'
import { Hooper, Slide } from 'hooper'
import { TimeAgo } from 'vue2-timeago'
import Logo from '~/components/Logo.vue'
import Photos from '~/components/Photos.vue'
import Match from '~/components/Match.vue'

export default {
  computed: mapGetters({
    videos: 'videos/videos',
    profile: 'profile/videkai',
  }),
  data() {
    return {
      firstPlayDone: false,
      currentSlide: 0,
      prevSlide: 0,
      reelsPage: 0,
      reelsOrder: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      error: false,
      sliderSettings: {
        vertical: true,
        itemsToShow: 1,
        centerMode: true,
        mouseDrag: false,
        touchDrag: true,
      },
      currentComponent: Hooper,
    }
  },
  components: {
    Hooper,
    TimeAgo,
    Slide,
    Logo,
    Photos,
    Match
  },
  async created() {
    this.set100vhVar()
    await this.loadVideos()
    if (this.videos.length <= 0) {
      this.error = '⚠️ Website issues'
    }
  },
  methods: {
    set100vhVar() {
      if(typeof window !== 'undefined' && typeof document !== 'undefined'){
        // If less than most tablets, set CSS var to window height.
        let value = "100vh"

        // If window size is iPad or smaller, then use JS to set screen height.
          if (window.innerWidth && window.innerWidth <= 1024) {
              value = `${window.innerHeight}px`
          }

        console.log('real100vh', value);
        document.documentElement.style.setProperty("--real100vh", value)
      }
    },
    swapComponent: function()
    {
      this.currentComponent = Photos;
    },
    openReels : function()
    {
      this.currentComponent = Slide;
    },
    loadVideos() {
      this.reelsPage = this.reelsPage + 1;

      return this.$store.dispatch('videos/get', { 
          page: this.reelsPage,
          order: this.reelsOrder
        }).then(() => this.restart())
    },
    loadProfile() {
      return this.$store.dispatch('profile/get').then(() => this.showProfile())
    },
    loadMore() {
      // load more if there is less than 8 videos left
      if (this.currentSlide + 8 > this.videos.length) {
        this.loadVideos()
      }
    },
    onVideoEnd(index) {
      this.$refs.sliderRef.slideNext()
      this.loadMore(index)
    },
    onVideoPlay(index) {
      //this.$refs.videoRef[index].volume = 0
    },
    onVideoClick(event) {
      const video = event.target
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    },
    onLinkClick() {
      this.$refs.videoRef[this.currentSlide].pause()
    },
    onPlayClick() {
      this.firstPlayDone = true
      this.$refs.videoRef[this.currentSlide].play()
    },
    onLikeReel(id) {
      var element = document.body.querySelector('path[data-id="'+id+'"]')

      element.setAttribute("fill", "red")
    },
    onFullScreen() {
        var element = this.$refs.videoRef[this.currentSlide];
        if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        } else if (element.webkitEnterFullScreen) {
            element.webkitEnterFullScreen();
        }
    },
    openProfile(name) {
      location.href = 'https://www.unlok.me/'+name;
    },
    async onShare() {
      var link = 'http://ec2-44-206-90-48.compute-1.amazonaws.com/';
        if (navigator.share) {
            navigator.share({
                    title: '',
                    text: '',
                    url: link,
                })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
           alert('phone only');
        }
    },
    onSlideChange(){
      var model = document.getElementsByClassName('is-active')[0].getAttribute('data-username');
      this.loadProfile()
      console.log('onSlideChange ' + model);
    },
    onSlide({ currentSlide, slideFrom }) {
      this.currentSlide = currentSlide
      this.prevSlide = slideFrom
      // play video and pause previous
      if (this.firstPlayDone) {
        console.log('lets play');

this.$refs.videoRef[currentSlide].volume = 0


                        if (this.$refs.videoRef[currentSlide].paused) {
                            var playPromise = this.$refs.videoRef[currentSlide].play();

                            if (playPromise !== undefined) {
                                playPromise.then(_ => {

                                        // console.log('playback done');

                                        // Automatic playback started!
                                        // Show playing UI.
                                    })
                                    .catch(error => {
                                        console.log(error);
                                        // div.remove();
                                        // console.log('playback not gonna run... hidden');

                                        // Auto-play was prevented
                                        // Show paused UI.
                                    });
                            }
                        }

        // this.$refs.videoRef[currentSlide].play()
        this.$refs.videoRef[slideFrom].pause()
      }
      // preload next video
      if (undefined !== this.$refs.videoRef[currentSlide + 1]) {
        this.$refs.videoRef[currentSlide + 1].preload = 'auto'
      }
      this.loadMore()
    },
    restart() {
      return this.$nextTick().then(async () => {
        if (this.videos.length > 0) {
          // await this.$refs.sliderRef.update()
        }
      })
    },
    showProfile() {
      // this.$refs.profileRef.update()
      document.getElementsByClassName('loader')[0].style.visibility = 'hidden';
      console.log('showing profile lol')
    },
    prettyNumber(number) {
      const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E']
      const tier = (Math.log10(Math.abs(number)) / 3) | 0
      if (tier == 0) return number
      const suffix = SI_SYMBOL[tier]
      const scale = Math.pow(10, tier * 3)
      const scaled = number / scale
      return scaled.toFixed(1) + suffix
    },
  },
}
</script>

<style lang="scss">
.profile-layout{
background-color:white;
height: var(--real100vh);
width: 100%;
}

.description{
    font-size: 14px;
    z-index: 342423423423423234234;
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 80px;
}

// .is-vertical{
//   height: calc(100vh - 130px) !important;
// }

.description-box{
width: calc(100% - 100px) !important;
padding-left: 20px;
display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
.w-100 {
  width: 100%;
}
.ml-auto, .mx-auto {
  margin-left: auto;
}
.mr-auto, .mx-auto {
  margin-right: auto;
}

.right-menu{
  position:absolute;
  fill: white;
  right: 10px;
      right: 10px;
    width: 50px;
    height: 100px;
    bottom: 50%;
      -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
    text-align: center;
        z-index: 10000;
}

.right-menu .menu-element{
  margin-bottom: 30px;
}

.right-menu .profile{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
}
* {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
}
body {
  overflow: hidden;
  background-color: black;
}

.hooper {
  height: 100%;
}
.hooper-track {
  margin: 0;
  padding: 0;
}
.hooper-slide {
  height: var(--real100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 30px;
}
.error {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
}
.slide {
  display: flex;
  align-items: center;
  position: relative;
  left: 0;
  top: 0;
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 120%;
    background-position: center;
    opacity: 0.4;
    filter: blur(2rem);
    z-index: -1;
  }
  .author {
    display: flex;
    align-items: center;
    padding: 3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 9998;
    .avatar {
      display: none;
      width: auto;
      height: 145px;
      padding-right: 2rem;
    }
    .name,
    .desc {
      color: white;
      text-shadow: 1px 1px 2px black;
      padding-bottom: 0.5rem;
    }
    .name {
      font-size: 2rem;
      letter-spacing: 1px;
    }
    .date {
      font-size: 0.7rem;
      letter-spacing: 1px;
      margin: 0.2rem 0;
    }
    .desc {
      max-width: 50%;
      font-size: 1.2rem;
    }
    .tags {
      .tag {
      }
    }
  }

  html {
  overflow: hidden;
}

body {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

:root {
    --real100vh: 100vh;
}

  video {
    width: auto !important;
    // height: 100vh;
    height: var(--real100vh);
    min-width: 100%;
    z-index: 9997;
        object-fit: cover;
  }
  video {
    &::-webkit-media-controls-panel {
      display: none !important;
    }
  }
  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.2rem;
    z-index: 9998;
    background-color: rgba(255, 255, 255, 1);
    transition: width 0.2s;
  }
  .heart-container {
    position: absolute;
    top: 35px;
    right: 10px;
    z-index: 9998;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  .likes {
    color: white;
    padding: 0.6rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px black;
  }
  .heart {
    position: relative;
    display: block;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 0 0 0 10px;
    transform: rotate(-45deg);
    animation: pulse 1s infinite;
    &:before,
    &:after {
      position: absolute;
      content: '';
      width: 30px;
      height: 30px;
      background: white;
      border-radius: 50%;
    }
    &:before {
      top: -15px;
      left: 0;
    }
    &:after {
      top: 0;
      right: -15px;
    }
  }
  .controls {
    position: absolute;
    width: 100%;
    height: 100%;
    // background-color: rgba(0, 0, 0, 0.43);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10000;

    .video-play-button {
      background-position: 0px 0px;
      cursor: pointer;
      transform: matrix(1, 0, 0, 1, 0, 0);
      content: '';
      border: 0px none white;
      outline: white none 0px;
      transform: scale(0.7);
      &:after {
        cursor: pointer;
        display: block;
        height: 48px;
        position: absolute;
        width: 40px;
        transform: matrix(1, 0, 0, 1, -20, -24);
        transform-origin: 20px 24px;
        content: '';
        border-top: 24px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 24px solid transparent;
        border-left: 40px solid white;
        margin: 0px 0px 0px 4.80000019073486px;
        transition: border 0.15s ease 0s, box-shadow 0.15s ease 0s;
      }
      &:before {
        box-shadow: white 0px 0px 0px 1.79999995231628px inset,
          white 0px 0px 0px 4.80000019073486px,
          rgba(0, 0, 0, 0.247059) 0px 0px 3.59999990463257px 1.79999995231628px;
        cursor: pointer;
        display: block;
        height: 96px;
        position: absolute;
        width: 96px;
        transform: matrix(1, 0, 0, 1, -48, -48);
        transform-origin: 48px 48px;
        content: '';
        border: 9px solid transparent;
        border-radius: 48px 48px 48px 48px;
        margin: 0px -64.3199996948242px -24px 0px;
        transition: border 0.15s ease 0s, box-shadow 0.15s ease 0s;
      }
      &:hover {
        z-index: 1;
        transform: matrix(1, 0, 0, 1, 0, 0);
        border: 0px none white;
        &:before {
          box-shadow: white 0px 0px 0px 4.80000019073486px inset,
            white 0px 0px 0px 1.79999995231628px,
            rgba(0, 0, 0, 0.247059) 0px 0px 3.59999990463257px
              1.79999995231628px;
          border: 4px solid transparent;
        }
      }
    }
  }
}

.scroll-down {
  display: none;
  margin-top: 70px;
  transform: scale(0.7);
  .mouse {
    margin: 0 auto;
    display: block;
    border-radius: 50px;
    border: 2px solid #fff;
    height: 100px;
    width: 50px;
    position: relative;

    .move {
      position: absolute;
      background-color: #fff;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      left: 50%;
      transform: translateX(-50%);
      animation: move 2s linear infinite;
    }
  }
}

@keyframes pulse {
  0%,
  20% {
    transform: rotate(-45deg) scale(1);
  }
  30% {
    transform: rotate(-45deg) scale(1.2);
  }
  50% {
    transform: rotate(-45deg) scale(1);
  }
  60% {
    transform: rotate(-45deg) scale(1.1);
  }
  70%,
  100% {
    transform: rotate(-45deg) scale(1);
  }
}

@keyframes move {
  0% {
    transform: translate(-50%, 10px);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, 40px);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 80px);
    opacity: 0;
  }
}

@media (max-width: 600px) {
  body,
  html {
    overflow: hidden;
  }

  .slide {
    .heart-container {
      display: none;
    }

    .author {
      padding: 1rem;
      display: none;

      .avatar {
        padding-right: 1rem;
      }
      .name {
        font-size: 1rem;
      }
      .desc {
        font-size: 0.5rem;
      }
    }
  }
}
</style>

<style lang="scss">
/*

All grid code is placed in a 'supports' rule (feature query) at the bottom of the CSS (Line 310). 
        
The 'supports' rule will only run if your browser supports CSS grid.

Flexbox and floats are used as a fallback so that browsers which don't support grid will still recieve a similar layout.

*/

/* Base Styles */

.img-fluid {
  max-width: 100%;
  height: auto;
}
.w-100 {
  width: 100%;
}
.ml-auto, .mx-auto {
  margin-left: auto;
}
.mr-auto, .mx-auto {
  margin-right: auto;
}

:root {
    font-size: 10px;
}

.item-box {
    position: relative;
    width: 100%;
    border-radius: 3px;
}

.item-box:after {
    content: "";
    display: block;
    padding-bottom: 100%;
}

.profile-activity {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 3px;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    font-family: "Open Sans", Arial, sans-serif;
    min-height: var(--real100vh);
    background-color: #fafafa;
    color: #262626;
    padding-bottom: 3rem;
}

img {
    display: block;
}

.container {
    max-width: 93.5rem;
    margin: 0 auto;
    padding: 0 2rem;
}

.btn {
    display: inline-block;
    font: inherit;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
}

.btn:focus {
    outline: 0.5rem auto #4d90fe;
}

.visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
}

/* Gallery Section */

.gallery {
    display: flex;
    flex-wrap: wrap;
    margin: -1rem -1rem;
    padding-bottom: 3rem;
}

.gallery-item {
    position: relative;
    flex: 1 0 22rem;
    margin: 1rem;
    color: #fff;
    cursor: pointer;
}

.gallery-item:hover .gallery-item-info,
.gallery-item:focus .gallery-item-info {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}

.gallery-item-info {
    display: none;
}

.gallery-item-info li {
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 600;
}

.gallery-item-likes {
    margin-right: 2.2rem;
}

.gallery-item-type {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2.5rem;
    text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
}

.fa-clone,
.fa-comment {
    transform: rotateY(180deg);
}

.gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Loader */

.loader {
    width: 5rem;
    height: 5rem;
    border: 0.6rem solid #999;
    border-bottom-color: transparent;
    border-radius: 50%;
    margin: 0 auto;
    animation: loader 500ms linear infinite;
}

/* Media Query */

@media screen and (max-width: 40rem) {
    .gallery {
            grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)) !important;
            grid-gap: 0.5rem !important;
        }
}

/* Spinner Animation */

@keyframes loader {
    to {
        transform: rotate(360deg);
    }
}

/*

The following code will only run if your browser supports CSS grid.

Remove or comment-out the code block below to see how the browser will fall-back to flexbox & floated styling. 

*/

@supports (display: grid) {
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
        grid-gap: 2rem;
    }
}

.cover-image{
  background-position: 10% 30%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    position: relative;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    width: 100%;
    margin: 0 auto;
}

.cover-image img{
      height: 125px;
    width: 125px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #fff;
        position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%,0);
    -ms-transform: translate(-50%,0);
    transform: translate(-50%,0);
    bottom: -70px;
}

main{
  margin-top: 20px;
}

.profile-section{
margin-top: 80px;
    text-align: center;
}

.profile-section h1{
  color: black;
}

.hooper{
  overflow:hidden;
}

</style>