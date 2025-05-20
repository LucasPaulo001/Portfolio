
api = "https://api.github.com/users/LucasPaulo001"
api_repos = "https://api.github.com/users/LucasPaulo001/repos"
api_events = "https://api.github.com/users/LucasPaulo001/events"

const avatar = document.getElementById("img-avatar")
const dataUser = document.getElementById("dados-user")


//Função para formatar data
const formatDate = (data) => {
  const date = new Date(data)
  return date.toLocaleDateString('pt-br')
}

//Função para fazer as requisições das APIs
const fetchData = async () => {
  try{

    //Api do perfil (geral)
    const res = await fetch(api)

    const dataJson = await res.json()
    
    //Api dos repositórios
    const resRepo = await fetch(api_repos)

    const dataRepo = await resRepo.json()

    //Api dos eventos
    const resEvents = await fetch(api_events)

    const dataEvents = await resEvents.json()

    console.log(dataEvents)


    //Inserindo imagem do github
    avatar.innerHTML = `<img class="imgAvatar" src="${dataJson.avatar_url}" alt="foto do avatar do github">
    
    <span><strong>Conta criade em:</strong> ${formatDate(dataJson.created_at)}</span>
    `
    

    //Inserindo dados do github
    const dataGH = document.createElement("div")
    dataGH.classList.add("localData")
   dataGH.innerHTML = `<ul>
  <li><strong>Empresa (2023 - atualmente):</strong> <a href="https://loopisjr.com.br/" target="_blank">${dataJson.company}</a></li>
  <li><strong>Seguidores:</strong> ${dataJson.followers}</li>
  <li><strong>Seguindo:</strong> ${dataJson.following}</li>
  <li><strong>Repositórios:</strong> ${dataJson.public_repos} repositórios públicos
    <span class="lineGeneral"></span>
    <div class="repoList">
      ${dataRepo.map((repo) => `
      <a href="${repo.html_url}" target="_blank">
        <p>
          <i class="fa-brands fa-github-alt icon"></i>
          ${repo.name} <br>
        </p>
        <div class="description"><i class="fa-solid fa-pen"></i>${repo.description == null ? "Sem descrição": repo.description}</div>
      </a>`).join("")}
    </div>
  </li>
</ul>`;

    dataUser.appendChild(dataGH)


    
    console.log(dataJson)
    console.log(`${dataJson.company}\n ${dataJson.bio}\n${dataJson.avatar_url}`)
  }
  catch(error){
    console.log(error)
  }
}

fetchData()
