import axios from 'axios'

export async function fetchJson(path) {
  try {
    const { data } = await axios.get(`${process.env.BASE_URL}/${path}.json`)

    return data
  } catch (e) {
    throw new Error(e)
  }
}

export function googleIt(str) {
  return `https://www.google.com/search?q=${encodeURIComponent(str)}`
}
