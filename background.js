const styles = document.querySelector(".form")
const back = document.querySelector(".inside1")
const colores = document.querySelector(".inside")
const click1 = document.querySelector(".images")
const click2 = document.querySelector(".color")
const click3 = document.querySelector(".collage")
const box1 = document.querySelector(".boxCenter1")
const box2 = document.querySelector(".boxCenter2")
const box3 = document.querySelector(".boxCenter3")





click1.addEventListener("click", () => {
  if (box2.style.display != "none") {
    box2.style.display = "none"
  }
  else{
    box2.style.display = "block"
    box1.style.display = "none"
    box3.style.display = "none"
  }
});

click2.addEventListener("click", () => {
  if (box1.style.display != "none") {
    box1.style.display = "none"
  }
  else{
    box1.style.display = "block"
    box2.style.display = "none"
    box3.style.display = "none"
  }
});


click3.addEventListener("click", () => {
  if (box3.style.display != "none") {
    box3.style.display = "none"
  }
  else{
    box3.style.display = "block"
    box2.style.display = "none"
    box1.style.display = "none"
  }
});




styles.addEventListener("submit", (e) => {
  e.preventDefault()
  val = styles.color.value
  back.style.background = val
  console.log(val)
});