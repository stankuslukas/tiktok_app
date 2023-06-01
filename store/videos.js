export const state = () => ({
  videos: [],
  maxCursor: 0
})

export const actions = {
  async get({ commit, state }, payload) {

    const regions = ['es', 'en', 'br', 'de', 'hk', 'in', 'id', 'jp', 'my', 'ru', 'sg', 'tw', 'gb', 'vn']
    const randomRegion = regions[Math.floor(Math.random() * regions.length)];
    var pagination = 1;
    var orderination = 1;

    if(payload){
      pagination = JSON.parse(payload.page);
      orderination = JSON.parse(payload.order);
    }

    return await this.$axios({
      method: 'post',
      url: 'https://unlok.me/api/tiktok.php?page='+pagination+'&order='+orderination,
      data: '',
      config: { headers: { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' } }
    })
      .then(async res => {
        if (res.status === 200) {
          await commit('append', res.data)
        }
      })
      .catch(e => console.log(e))
  },
  async shuffle({ commit, state }) {
    await commit('shuffle')
  }
}

export const mutations = {
  add(state, video) {
    state.videos.push(video)
  },
  append(state, videos) {
    state.videos = [...state.videos, ...videos]
  },
  async shuffle(state) {
    state.videos = await state.videos.sort(() => 0.5 - Math.random())
  },
  setMaxCursor(state, maxCursor) {
    state.maxCursor = maxCursor
  }
}

export const getters = {
  videos(state) {
    return state.videos
  }
}
