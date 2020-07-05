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
}

setInterval(() => {
  const header = document.querySelector("#moonid-toolbar")
  const btnbot = document.querySelector("#btn-bot")

  if (header && !btnbot) {
    createButton()
  }
}, 500);

