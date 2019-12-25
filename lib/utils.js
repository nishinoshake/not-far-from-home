import axios from 'axios'

export async function fetchJson(path) {
  try {
    const { data } = await axios.get(`${process.env.STORAGE_URL}/${path}.json`)

    return data
  } catch (e) {
    throw new Error(e)
  }
}

export async function fetchApi(path, params = {}) {
  try {
    const { data } = await axios.get(`${process.env.API_URL}/${path}`, {
      params
    })

    return data
  } catch (e) {
    throw new Error(e)
  }
}

export function googleIt(str) {
  return `https://www.google.com/search?q=${encodeURIComponent(str)}`
}
