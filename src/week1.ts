import './style.css'
// задание 1
const auto = {
  manufacturer: "Tesla",
  model: "model x",
  release: 2015,
  speed: 200,
  logInfo(){
    console.log(this.manufacturer, this.model, this.release, this.speed)
  },
  timeCount(way: number){
    let time = Math.floor(way/this.speed)
    time += Math.floor(time/4)
    console.log(`Вы доедете за ${time} часов`)
  },
}

auto.logInfo()
auto.timeCount(1000)
// задание 2


// задание 3