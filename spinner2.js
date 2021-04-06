const animation = ['\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\n']
let timer = 100
const animate = (array) => {
  for (let index of array) {
    setTimeout(() => {
      process.stdout.write(index);
    }, timer);
    timer += 200
  }
}

animate(animation)