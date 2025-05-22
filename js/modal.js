
const certificados = document.querySelectorAll(".certificado")
const modal = document.getElementById("modal")
const body = document.getElementById("body")




certificados.forEach((c, index) => {
    c.addEventListener("click", () => {
        modal.classList.add("open")

        body.innerHTML = ""

        const localImage = document.createElement("img")
        localImage.src = `assets/certificados/img${index+1}.jpg`
        localImage.classList.add("imgCertificado")
        body.appendChild(localImage)
        console.log(index+1)

        document.getElementById("close").addEventListener("click", (btn) => {
            modal.classList.remove("open")
        })
    })
})
