const search = () => {
  try {
    let war
    let search = true
    war = document.querySelectorAll(".fsbox")

    for (let i = 0; i < war.length; i++) {
      if (war[i].querySelectorAll(".fsval")[4].innerText >= 100 &&
        war[i].querySelectorAll(".fsval")[5].innerText >= 3 &&
        war[i].querySelectorAll(".fsval")[5].innerText <= 8) {
        war[i].querySelectorAll(".fs_attack form .fsattackbut")[0].click()
        search = false
      }
    }

    if (search)
      document.querySelector(".center input").click()
  } catch (e) {
    setTimeout(() => { search() }, 500);
  }
}

const createButton = () => {
  const header = document.querySelector("#moonid-toolbar .content .right")
  const listItem = document.createElement("li")
  const button = document.createElement("button")
  const node = document.createTextNode("Buscar")

  button.setAttribute("id", "btn-bot")
  button.classList.add("btn-bot")
  button.appendChild(node)
  listItem.appendChild(button)
  header.appendChild(listItem)
  
  button.addEventListener("click", () => {
    console.log("clicking to search")
  })
}

setInterval(() => {
  const header = document.querySelector("#moonid-toolbar")
  const btnbot = document.querySelector("#btn-bot")

  if (header && !btnbot) {
    createButton()
  }
}, 500);

