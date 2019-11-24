import { normalize } from '@/lib/normalizer'
import { fetchJson } from '@/lib/utils'

export const state = () => ({
  selectedDistance: 2,
  selectedPrefectureId: null,
  isReady: false,
  rankings: {},
  prefectures: [],
  entities: {
    cinemas: {},
    prefectures: {},
    lines: {}
  }
})

export const actions = {
  nuxtServerInit: async function({ state, dispatch, commit }) {
    await Promise.all([
      dispatch('fetchRanking', { distance: state.selectedDistance }),
      dispatch('fetchCinemas'),
      dispatch('fetchPrefectures'),
      dispatch('fetchLines')
    ])

    commit('setIsReady')
  },
  async fetchRanking({ state, commit }, { distance }) {
    const ranking = await fetchJson(`rankin/${distance}`)

    commit('recieveRanking', { distance, ranking })
  },
  async fetchCinemas({ commit }) {
    const cinemas = await fetchJson(`cinema`)

    commit('recieveCinemas', { cinemas })
  },
  async fetchPrefectures({ commit }) {
    const prefectures = await fetchJson(`pref`)

    commit('recievePrefectures', { prefectures })
  },
  async fetchLines({ commit }) {
    const lines = await fetchJson(`line`)

    commit('recieveLines', { lines })
  }
}

export const mutations = {
  recieveRanking(state, { distance, ranking }) {
    if (!state.rankings[distance]) {
      state.rankings = {
        ...state.rankings,
        [distance]: ranking
      }
    }
  },
  recieveCinemas(state, { cinemas }) {
    state.entities.cinemas = normalize(cinemas)
  },
  recievePrefectures(state, { prefectures }) {
    state.prefectures = prefectures
    state.entities.prefectures = normalize(prefectures)
  },
  recieveLines(state, { lines }) {
    state.entities.lines = normalize(lines)
  },
  selectPrefecture(state, { id }) {
    state.selectedPrefectureId = id
  },
  unselectPrefecture(state) {
    state.selectedPrefectureId = null
  },
  setIsReady(state) {
    state.isReady = true
  }
}

export const getters = {
  selectedRanking(state) {
    if (!state.selectedDistance || !state.isReady) {
      return []
    }

    return state.rankings[state.selectedDistance].map(item => {
      const stationNames = item.stations.map(s => s.name)

      return {
        pref: state.entities.prefectures[item.prefId],
        stations: item.stations.map(station => ({
          id: station.id,
          name: station.name,
          point: station.point,
          isDuplicate: stationNames.filter(n => n === station.name).length > 1,
          lines: station.lineIds.map(lineId => state.entities.lines[lineId]),
          cinemas: station.cinemas.map(cinema => ({
            distance: cinema.distance,
            ...state.entities.cinemas[cinema.id]
          }))
        }))
      }
    })
  },
  prefectureAreas(state) {
    if (!state.prefectures.length) {
      return []
    }

    return [
      {
        name: '北海道・東北',
        prefectures: state.prefectures.slice(0, 7)
      },
      {
        name: '関東',
        prefectures: state.prefectures.slice(7, 14)
      },
      {
        name: '甲信越・北陸',
        prefectures: state.prefectures.slice(14, 20)
      },
      {
        name: '東海',
        prefectures: state.prefectures.slice(20, 24)
      },
      {
        name: '関西',
        prefectures: state.prefectures.slice(24, 30)
      },
      {
        name: '中国',
        prefectures: state.prefectures.slice(30, 35)
      },
      {
        name: '四国',
        prefectures: state.prefectures.slice(35, 39)
      },
      {
        name: '九州・沖縄',
        prefectures: state.prefectures.slice(39, 47)
      }
    ]
  },
  result(state, getters, rootState, rootGetters) {
    if (!state.selectedPrefectureId) {
      return null
    }

    if (!rootGetters.selectedRanking.length) {
      return null
    }

    const foundResult = rootGetters.selectedRanking.find(
      ({ pref }) => pref.id === state.selectedPrefectureId
    )

    if (!foundResult) {
      throw new Error(
        '都道府県のIDが見つかりませんでした。JSONの生成か取得に問題がある可能性があります。'
      )
    }

    return foundResult
  },
  hasResult(state, getters) {
    return getters.result !== null
  },
  selectedPrefecture(state, getters, rootState) {
    if (state.selectedPrefectureId) {
      return rootState.entities.prefectures[state.selectedPrefectureId]
    }

    return null
  }
}
