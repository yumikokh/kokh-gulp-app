import SHARE_DATA from "../config/shareData"
// import { sendGAEvent } from "./ga"

export function twitterOnClick(ev, type = "default", id = 0) {
  ev.preventDefault()

  const target = ev.currentTarget

  const url = SHARE_DATA[type].url
  const insertUrl = typeof url === "string" ? encodeURIComponent(url) : encodeURIComponent(url(id))
  const text = SHARE_DATA[type].text
  const insertText = typeof text === "string" ? encodeURIComponent(text) : encodeURIComponent(text(id))

  const hashtags = encodeURIComponent(SHARE_DATA[type].hashtags)

  target.setAttribute("href", `https://twitter.com/intent/tweet?url=${insertUrl}&text=${insertText}&hashtags=${hashtags}`)

  window.open(
    target.getAttribute("href"),
    '',
    `width=600,height=450,left=${window.screenX+(window.innerWidth-600)/2|0},top=${window.screenY+(window.innerHeight-450)/2|0}`
  )

  return false

}

export function facebookOnClick(ev, type = "default", id = 0) {
  ev.preventDefault()
  const target = ev.currentTarget

  const url = SHARE_DATA[type].url
  const insertUrl = typeof url === "string" ? encodeURIComponent(url) : encodeURIComponent(url(id))

  target.setAttribute("href", `https://www.facebook.com/sharer/sharer.php?u=${insertUrl}`)

  window.open(
    target.getAttribute("href"),
    '',
    `width=600,height=450,left=${window.screenX+(window.innerWidth-600)/2|0},top=${window.screenY+(window.innerHeight-450)/2|0}`
  )

  return false

}

export function lineOnClick(ev, type = "default", id = 0) {
  const target = ev.currentTarget

  const url = SHARE_DATA[type].url
  const insertUrl = typeof url === "string" ? encodeURIComponent(url) : encodeURIComponent(url(id))
  const text = SHARE_DATA[type].text
  const insertText = typeof text === "string" ? encodeURIComponent(text) : encodeURIComponent(text(id))

  target.setAttribute("href", `http://line.me/R/msg/text/?${insertText}%20${insertUrl}`)

}
