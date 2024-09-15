function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    // Limpar a seção antes de adicionar novos resultados
    section.innerHTML = "";

    if (campoPesquisa == "") {
        section.innerHTML = "Nenhum resultado encontrado."
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";

    for (let dado of dados) {
        if (dado.descriçao.includes(campoPesquisa)|| dado.titulo.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}" alt="${dado.titulo}">
                <div class="texto-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descriçao}</p>
                    <a href="${dado.link}" target="_blank">Adote aqui</a>
                </div>
            </div>
            `;
        }
    }
    if(!resultados){
        resultados ="Nenhum resultado encontrado."
    }

    section.innerHTML = resultados;
}
