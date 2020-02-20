import $ from "jquery"

export default function loadingPromise(path) {
  const images = new Image()
  return new Promise((resolve, reject) => {
    images.onload = () => resolve(path)
    images.src = `images/${path}`
  })
}