export default function wait(ms) {
  return () => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    })
  }
}
