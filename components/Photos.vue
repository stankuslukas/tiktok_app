<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
     <swiper
      :slides-per-view="1"
      :space-between="0"
      :loop="false"
      @slideChange="onSlideChange"
    >

         <swiper-slide>
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

        <div class="right-menu">
          <div class="menu-element">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.4389 0C16.5734 0 12.7946 1.14628 9.58048 3.29388C6.36637 5.44147 3.86128 8.49394 2.38199 12.0653C0.902695 15.6366 0.515644 19.5664 1.26978 23.3577C2.02392 27.149 3.88537 30.6315 6.61874 33.3649C9.35212 36.0983 12.8347 37.9597 16.626 38.7138C20.4173 39.468 24.347 39.0809 27.9184 37.6016C31.4897 36.1224 34.5422 33.6173 36.6898 30.4032C38.8373 27.189 39.9836 23.4103 39.9836 19.5447C39.978 14.3628 37.9171 9.39483 34.2529 5.7307C30.5888 2.06657 25.6208 0.00560457 20.4389 0V0ZM20.4389 35.8319C17.2176 35.8319 14.0686 34.8767 11.3902 33.087C8.7118 31.2974 6.62422 28.7537 5.39148 25.7776C4.15873 22.8015 3.83619 19.5266 4.46464 16.3672C5.09309 13.2078 6.6443 10.3057 8.92211 8.02787C11.1999 5.75006 14.102 4.19885 17.2614 3.5704C20.4209 2.94196 23.6957 3.2645 26.6718 4.49724C29.6479 5.72999 32.1916 7.81756 33.9813 10.496C35.7709 13.1744 36.7262 16.3234 36.7262 19.5447C36.7214 23.8629 35.0039 28.0029 31.9505 31.0563C28.8971 34.1097 24.7571 35.8272 20.4389 35.8319Z" fill="white"/>
<path d="M22.7254 17.1555C21.7039 16.7942 20.0381 16.1872 19.2034 15.5326C19.1529 15.4929 19.0583 15.2549 19.1247 14.9013C19.1567 14.7316 19.3035 14.1649 19.8535 13.9991C20.7028 13.7418 21.5089 13.9108 22.0378 14.3025C22.8728 15.0629 24.1659 15.0051 24.9293 14.1719C25.6918 13.3397 25.6376 12.0486 24.8102 11.2827C24.8102 11.2827 23.8603 10.4369 22.502 10.0367V9.86795C22.502 8.73573 21.584 7.81781 20.4518 7.81781C19.3196 7.81781 18.4017 8.73573 18.4017 9.86795V10.1645C14.7166 11.5048 13.8501 16.5457 16.6733 18.7593C17.9594 19.7677 19.7973 20.4687 21.3574 21.0209C22.3738 21.3803 22.477 22.1091 22.3848 22.6573C22.2822 23.2673 21.7567 24.3021 20.438 24.3107C19.071 24.3194 18.7466 24.2693 17.7489 23.6162C16.8013 22.9962 15.5309 23.2613 14.9107 24.2088C14.2906 25.1563 14.5559 26.427 15.5033 27.0471C16.5932 27.7604 17.4564 28.1138 18.4015 28.2793V28.4766C18.4015 29.6088 19.3195 30.5267 20.4517 30.5267C21.5839 30.5267 22.5018 29.6088 22.5018 28.4766V28.0475C27.4691 26.2523 28.1281 19.0665 22.7254 17.1555Z" fill="white"/>
</svg>
          </div>

          <div class="menu-element" @click="onShare">
            <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.262779 33.569V21.8306C0.2671 17.8293 1.81649 13.9931 4.57103 11.1637C7.32556 8.33431 11.0603 6.74282 14.9558 6.73838H22.841V4.07879C22.8411 3.41557 23.0327 2.76728 23.3915 2.21588C23.7503 1.66448 24.2602 1.23472 24.8567 0.980934C25.4532 0.727149 26.1096 0.660734 26.7429 0.790083C27.3762 0.919432 27.9579 1.23874 28.4145 1.70763L38.014 11.5662C38.9321 12.5096 39.4479 13.789 39.4479 15.123C39.4479 16.4569 38.9321 17.7363 38.014 18.6797L28.4145 28.5383C27.9579 29.0072 27.3762 29.3265 26.7429 29.4558C26.1096 29.5852 25.4532 29.5188 24.8567 29.265C24.2602 29.0112 23.7503 28.5814 23.3915 28.03C23.0327 27.4786 22.8411 26.8303 22.841 26.1671V23.5075H13.3232C10.7261 23.5102 8.23615 24.5711 6.39974 26.4574C4.56332 28.3437 3.53048 30.9014 3.52789 33.569C3.52789 34.0138 3.35589 34.4403 3.04972 34.7548C2.74356 35.0693 2.32831 35.2459 1.89533 35.2459C1.46235 35.2459 1.04711 35.0693 0.740943 34.7548C0.43478 34.4403 0.262779 34.0138 0.262779 33.569ZM26.1061 8.41529C26.1061 8.86004 25.9341 9.28657 25.6279 9.60105C25.3218 9.91553 24.9065 10.0922 24.4736 10.0922H14.9558C11.926 10.0958 9.02125 11.3336 6.87885 13.5342C4.73646 15.7348 3.53134 18.7185 3.52789 21.8306V24.7048C4.7516 23.2743 6.25832 22.1284 7.94746 21.3436C9.6366 20.5588 11.4693 20.1531 13.3232 20.1537H24.4736C24.9065 20.1537 25.3218 20.3304 25.6279 20.6449C25.9341 20.9593 26.1061 21.3859 26.1061 21.8306V26.1671L35.7039 16.3085C36.01 15.9941 36.1819 15.5676 36.1819 15.123C36.1819 14.6783 36.01 14.2518 35.7039 13.9374L26.1061 4.07879V8.41529Z" fill="white"/>
</svg>
          </div>

          <div class="menu-element" @click="openProfile">
            <img class="profile" src="https://unlok.me/media/models/f6da1899a1492914ae13b987f1486d7f/small_main_pic.jpg?hash=1655828319"></img>
          </div>


          <div class="menu-element">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.500153 39.175L3.45783 29.9889C1.52993 26.9101 0.513955 23.3473 0.528081 19.714C0.528081 17.1474 1.03358 14.6059 2.01509 12.2346C2.9966 9.86331 4.43502 7.70872 6.24861 5.89383C8.06221 4.07894 10.2154 2.63928 12.5849 1.65707C14.9545 0.674854 17.494 0.169312 20.0588 0.169312C22.6236 0.169312 25.1631 0.674854 27.5327 1.65707C29.9023 2.63928 32.0554 4.07894 33.869 5.89383C35.6826 7.70872 37.121 9.86331 38.1025 12.2346C39.0841 14.6059 39.5896 17.1474 39.5896 19.714C39.5896 24.8976 37.5317 29.8689 33.869 33.5342C30.2063 37.1996 25.2387 39.2587 20.0588 39.2587C16.4184 39.2516 12.8526 38.2265 9.76349 36.2991L0.500153 39.175ZM9.67971 32.8648C10.3013 32.8629 10.9104 33.0372 11.4371 33.3674C13.9878 34.9679 16.9365 35.8192 19.9471 35.8244C24.212 35.817 28.2995 34.1164 31.3126 31.0959C34.3257 28.0755 36.0181 23.9819 36.0181 19.714C36.0108 15.4509 34.3153 11.3646 31.303 8.35012C28.2907 5.33567 24.2071 3.6389 19.9471 3.63152C15.6871 3.6389 11.6035 5.33567 8.59118 8.35012C5.57888 11.3646 3.88345 15.4509 3.87607 19.714C3.89296 22.6774 4.73376 25.5777 6.30379 28.0903C6.5567 28.5043 6.71739 28.968 6.77516 29.4499C6.83294 29.9317 6.78609 30.4203 6.63825 30.8824L5.69005 33.842L8.64704 32.8927C8.98759 32.8296 9.33625 32.8202 9.67971 32.8648Z" fill="white"/>
<path d="M19.947 21.779C21.0873 21.779 22.0117 20.854 22.0117 19.7129C22.0117 18.5718 21.0873 17.6467 19.947 17.6467C18.8068 17.6467 17.8824 18.5718 17.8824 19.7129C17.8824 20.854 18.8068 21.779 19.947 21.779Z" fill="white"/>
<path d="M28.1495 21.779C29.2898 21.779 30.2142 20.854 30.2142 19.7129C30.2142 18.5718 29.2898 17.6467 28.1495 17.6467C27.0092 17.6467 26.0848 18.5718 26.0848 19.7129C26.0848 20.854 27.0092 21.779 28.1495 21.779Z" fill="white"/>
<path d="M11.7161 21.779C12.8564 21.779 13.7807 20.854 13.7807 19.7129C13.7807 18.5718 12.8564 17.6467 11.7161 17.6467C10.5758 17.6467 9.6514 18.5718 9.6514 19.7129C9.6514 20.854 10.5758 21.779 11.7161 21.779Z" fill="white"/>
</svg>
          </div>

          <div class="menu-element" @click="onMenuClick">
<svg width="47" height="40" viewBox="0 0 47 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.463837 12.5085C0.642763 11.688 0.747733 10.844 1.01374 10.0527C2.70996 5.00215 6.2193 1.88484 11.5728 0.978982C15.9994 0.229751 19.8427 1.56574 23.0694 4.61526C23.1433 4.68423 23.2185 4.75202 23.3115 4.83851C23.7052 4.48903 24.0785 4.13954 24.4722 3.81227C31.9548 -2.39548 43.6149 1.41262 45.8347 10.7763C46.6292 14.1273 45.9958 17.2715 44.5107 20.3082C42.9839 23.4314 40.8224 26.1104 38.3962 28.5953C34.2081 32.8838 29.4475 36.4757 24.3386 39.6421C23.6562 40.0652 23.0348 40.0664 22.3501 39.6433C16.4336 35.9848 10.9668 31.798 6.39345 26.5709C4.1855 24.0462 2.30081 21.3111 1.2356 18.119C0.919502 17.1722 0.776361 16.1705 0.550914 15.1945C0.531829 15.1138 0.493658 15.0367 0.463837 14.9572C0.463837 14.1414 0.463837 13.3243 0.463837 12.5085ZM43.3274 13.4541C43.2821 13.0754 43.2678 12.4255 43.1198 11.806C42.1035 7.53504 39.453 4.74267 35.0562 3.83915C30.8109 2.96719 27.3087 4.39318 24.6356 7.73258C23.8113 8.76233 22.7998 8.77987 21.9994 7.72323C19.3191 4.18513 14.6825 2.67965 10.4479 4.12902C6.30995 5.54567 3.94932 8.46661 3.39703 12.7458C3.13342 14.7866 3.63441 16.7082 4.45866 18.5596C5.86025 21.7061 8.02764 24.3267 10.436 26.7672C14.2078 30.5882 18.4877 33.8002 23.0014 36.7258C23.259 36.893 23.4236 36.8626 23.6646 36.7071C27.5234 34.2186 31.1914 31.4906 34.5481 28.3756C37.0721 26.0332 39.3851 23.512 41.1505 20.5537C42.4125 18.4392 43.2773 16.2009 43.3274 13.4541Z" fill="white"/>
</svg>
     </div>

     <div class="menu-element">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.9609 26.7543C37.5289 26.7543 37.1146 26.9259 36.8092 27.2314C36.5037 27.5368 36.3321 27.9511 36.3321 28.3831V31.6405C36.3321 32.9364 35.8173 34.1792 34.901 35.0956C33.9847 36.0119 32.7418 36.5267 31.446 36.5267H28.1885C27.7565 36.5267 27.3423 36.6983 27.0368 37.0037C26.7314 37.3092 26.5598 37.7234 26.5598 38.1554C26.5598 38.5874 26.7314 39.0016 27.0368 39.3071C27.3423 39.6125 27.7565 39.7841 28.1885 39.7841H31.446C33.605 39.7815 35.6748 38.9227 37.2015 37.3961C38.7282 35.8694 39.587 33.7995 39.5896 31.6405V28.3831C39.5896 27.9511 39.418 27.5368 39.1125 27.2314C38.8071 26.9259 38.3928 26.7543 37.9609 26.7543Z" fill="white"/>
<path d="M2.12888 13.7246C2.56084 13.7246 2.97511 13.553 3.28056 13.2475C3.586 12.9421 3.7576 12.5278 3.7576 12.0958V8.83839C3.7576 7.54249 4.27239 6.29968 5.18873 5.38334C6.10507 4.467 7.34788 3.95221 8.64378 3.95221H11.9012C12.3332 3.95221 12.7475 3.78062 13.0529 3.47517C13.3584 3.16973 13.53 2.75545 13.53 2.32349C13.53 1.89152 13.3584 1.47725 13.0529 1.17181C12.7475 0.866361 12.3332 0.694763 11.9012 0.694763H8.64378C6.48475 0.697349 4.41489 1.55617 2.88822 3.08283C1.36156 4.6095 0.502739 6.67936 0.500153 8.83839L0.500153 12.0958C0.500153 12.5278 0.67175 12.9421 0.977195 13.2475C1.28264 13.553 1.69691 13.7246 2.12888 13.7246Z" fill="white"/>
<path d="M11.9012 36.5267H8.6438C7.34791 36.5267 6.10509 36.0119 5.18875 35.0956C4.27242 34.1792 3.75763 32.9364 3.75763 31.6405V28.3831C3.75763 27.9511 3.58603 27.5368 3.28058 27.2314C2.97514 26.9259 2.56086 26.7543 2.1289 26.7543C1.69694 26.7543 1.28266 26.9259 0.977218 27.2314C0.671773 27.5368 0.500175 27.9511 0.500175 28.3831L0.500175 31.6405C0.502762 33.7995 1.36158 35.8694 2.88824 37.3961C4.41491 38.9227 6.48477 39.7815 8.6438 39.7841H11.9012C12.3332 39.7841 12.7475 39.6125 13.0529 39.3071C13.3584 39.0016 13.53 38.5874 13.53 38.1554C13.53 37.7234 13.3584 37.3092 13.0529 37.0037C12.7475 36.6983 12.3332 36.5267 11.9012 36.5267Z" fill="white"/>
<path d="M31.446 0.694748H28.1885C27.7565 0.694748 27.3423 0.866345 27.0368 1.17179C26.7314 1.47724 26.5598 1.89151 26.5598 2.32347C26.5598 2.75544 26.7314 3.16971 27.0368 3.47516C27.3423 3.7806 27.7565 3.9522 28.1885 3.9522H31.446C32.7418 3.9522 33.9847 4.46699 34.901 5.38333C35.8173 6.29966 36.3321 7.54248 36.3321 8.83837V12.0958C36.3321 12.5278 36.5037 12.9421 36.8092 13.2475C37.1146 13.5529 37.5289 13.7245 37.9609 13.7245C38.3928 13.7245 38.8071 13.5529 39.1125 13.2475C39.418 12.9421 39.5896 12.5278 39.5896 12.0958V8.83837C39.587 6.67934 38.7282 4.60948 37.2015 3.08282C35.6748 1.55615 33.605 0.697334 31.446 0.694748V0.694748Z" fill="white"/>
</svg>
     </div>
        </div>
          <img :src="`${item.poster}`" style="height: var(--real100vh); width: auto">
        <div class="info">
          <a
            class="heart-container"
            target="_blank"
            @click="onLinkClick"
            :href="`${item.poster}`"
          >
            <div class="heart pulse"></div>
            <div class="likes">
              300
            </div>
          </a>
        </div>

                          <div class="description">
                            <div class="description-box">
                              <b>Naty</b><br>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </div>
                          </div>

      </slide>
</hooper>
    </swiper-slide>

          <swiper-slide>
        <div class="profile-layout" v-if="profile.length > 0">
          <header>

	<div class="container" id="prof">

    <div class="cover-image" style="background-image: url('https://unlok.me/media/models/f6da1899a1492914ae13b987f1486d7f/cover_pic.jpg?hash=1655826915');">
      <img src="https://unlok.me/media/models/f6da1899a1492914ae13b987f1486d7f/small_main_pic.jpg?hash=1655828319" alt=""></img>
    </div>

	</div>
	<!-- End of container -->
<div class="profile-section">
<h1>{{ profile[0].model_name }}</h1>
</div>
</header>

<main>
	<div class="container">

		<div class="gallery">

			<div class="gallery-item" tabindex="0" v-for="(item, index) in profile[0].reels" :key="index">
        <div class="item-box">
                <img :src="`${item.poster}`" class="gallery-image profile-activity" alt="">
        </div>
			</div>

		</div>
		<!-- End of gallery -->

		<div class="loader"></div>

	</div>
	<!-- End of container -->

</main>


        </div>
        </swiper-slide>
    </swiper>

      <Footer />
  </div>
</template>


<script>
import * as Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'
import { Hooper, Slide } from 'hooper'
import { TimeAgo } from 'vue2-timeago'
import Logo from '~/components/Logo.vue'
import Footer from '~/components/Footer.vue'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import 'swiper/swiper-bundle.css'

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
});

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
      error: false,
      sliderSettings: {
        vertical: true,
        itemsToShow: 1,
        centerMode: true,
        mouseDrag: false,
        touchDrag: true,
      },
    }
  },
  components: {
    Hooper,
    TimeAgo,
    Slide,
    Logo,
    Swiper,
    SwiperSlide,
    Footer,
  },
  async created() {
    await this.loadVideos()
    if (this.videos.length <= 0) {
      this.error = '⚠️ API is not working, refresh or try later'
    }
  },
  methods: {
    loadVideos() {
      return this.$store.dispatch('videos/get').then(() => this.restart())
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
    onMenuClick() {
      alert('You liked the reel!');
    },
    openProfile() {
      location.href = 'https://www.unlok.me/franundurraga';
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

        console.log(this.$refs.videoRef[currentSlide]);

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