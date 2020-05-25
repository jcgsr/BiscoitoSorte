/* 

1º projeto ReactJS em 24.05.2020
O amigo de painho, seu Gito, faleceu ontem de covid...

*/

import React, { Component } from 'react';
import './index.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '"E daí?!"'
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['"O erro da ditadura foi torturar e não matar." (2008 e 2016)',
      '"Pela memória do coronel Carlos Alberto Brilhante Ustra, o pavor de Dilma Rousseff […] o meu voto é sim!" (2016)',
      '"Ele merecia isso: pau-de-arara. Funciona. Eu sou favorável à tortura. Tu sabe disso. E o povo é favorável a isso também." (1999)',
      '"Através do voto você não vai mudar nada nesse país, nada, absolutamente nada! Só vai mudar, infelizmente, se um dia nós partirmos para uma guerra civil aqui dentro, e fazendo o trabalho que o regime militar não fez: matando uns 30 mil, começando com o FHC, não deixar para fora não, matando! Se vai morrer alguns inocentes, tudo bem, tudo quanto é guerra morre inocente." (1999)',
      '"A atual Constituição garante a intervenção das Forças Armadas para a manutenção da lei e da ordem. Sou a favor, sim, de uma ditadura, de um regime de exceção, desde que este Congresso dê mais um passo rumo ao abismo, que no meu entender está muito próximo." (1999)',
      '"Vamos fuzilar a petralhada aqui do Acre. Vou botar esses picaretas para correr do Acre. Já que gosta tanto da Venezuela, essa turma tem que ir para lá." (2018)',
      '"Essa turma, se quiser ficar aqui, vai ter que se colocar sob a lei de todos nós. Ou vão para fora ou vão para a cadeia. Esses marginais vermelhos serão banidos de nossa pátria." (2018)',
      '"[O policial] entra, resolve o problema e, se matar 10, 15 ou 20, com 10 ou 30 tiros cada um, ele tem que ser condecorado, e não processado” (2018)',
      '"Morreram poucos. A PM tinha que ter matado mil." (1992)',
      '"Somos um país cristão. Não existe essa historinha de Estado laico, não. O Estado é cristão. Vamos fazer o Brasil para as maiorias. As minorias têm que se curvar às maiorias. As minorias se adequam ou simplesmente desaparecem."(2017)',
      '"Eu jamais ia estuprar você porque você não merece." (2003 e 2014)',
      '"Por isso o cara paga menos para a mulher (porque ela engravida)." (2014)',
      '"Foram quatro homens. A quinta eu dei uma fraquejada, e veio uma mulher." (2017)',
      '"Para mim é a morte. Digo mais: prefiro que morra num acidente do que apareça com um bigodudo por aí. Para mim ele vai ter morrido mesmo." (2011)',
      '"O filho começa a ficar assim meio gayzinho, leva um couro, ele muda o comportamento dele. Tá certo?" (2010)',
      '"90% desses meninos adotados [por um casal gay] vão ser homossexuais e vão ser garotos de programa com toda certeza." (2012)',
      '"Não existe homofobia no Brasil. A maioria dos que morrem, 90% dos homossexuais que morrem, morre em locais de consumo de drogas, em local de prostituição, ou executado pelo próprio parceiro." (2013)',
      '"O cara vem pedir dinheiro para mim para ajudar os aidéticos. A maioria é por compartilhamento de seringa ou homossexualismo. Não vou ajudar porra nenhuma! Vou ajudar o garoto que é decente." (2011)',
      '"Ele devia ir comer um capim ali fora para manter as suas origens." (2008)',
      '"Fui num quilombola [sic] em Eldorado Paulista. O afrodescendente mais leve lá pesava sete arrobas. Não fazem nada! Acho que nem para procriadores servem mais." (2017)',
      '"Quem usa cota, no meu entender, está assinando embaixo que é incompetente. Eu não entraria num avião pilotado por um cotista. Nem aceitaria ser operado por um médico cotista." (2011)',
      '"Isso não pode continuar existindo. Tudo é coitadismo. Coitado do negro, coitado da mulher, coitado do gay, coitado do nordestino, coitado do piauiense. Vamos acabar com isso." (2018)',
      '"A escória do mundo está chegando ao Brasil como se nós não tivéssemos problema demais para resolver." (2015)',
      '"Se eu chegar lá, não vai ter dinheiro para ONG. Esses inúteis vão ter que trabalhar." (2017)',
      '"Como eu estava solteiro na época, esse dinheiro do auxílio-moradia eu usava para comer gente." (2018)',
      '"Quem quiser vir aqui fazer sexo com uma mulher, fique à vontade." (2019)',
      '"O Brasil não pode ser um País do mundo gay, de turismo gay. Temos famílias." (2019)',
      '"Quando um moleque de 9 ou 10 anos vai trabalhar em algum lugar, tá cheio de gente aí: \'trabalho escravo, não sei o quê, trabalho infantil...\'. Agora, quando tá fumando um paralelepípedo de crack, ninguém fala nada. Então, o trabalho não atrapalha a vida de ninguém." (2019)',
      '"O Brasil é uma virgem que todo tarado de fora quer." (2019)',
      '"Muitos tentam nos deixar de lado dizendo que o estado é laico. O estado é laico, mas nós somos cristãos. Ou para plagiar a minha querida Damares: Nós somos terrivelmente cristãos. E esse espírito deve estar presente em todos os poderes." (2019)',
      '"Não posso admitir que, com dinheiro público, se façam filmes como o da Bruna Surfistinha. (...) Não somos contra essa ou aquela opção, mas o ativismo não podemos permitir, em respeito às famílias." (2019)',
      '"Falar que se passa fome no Brasil é uma grande mentira. Passa-se mal, não come bem. Aí eu concordo. Agora passar fome, não. Você não vê gente pobre pelas ruas com físico esquelético como a gente vê em alguns outros países por aí pelo mundo." (2019)',
      '"Daqueles governadores de ‘paraíba’, o pior é o do Maranhão. [governador Flávio Dino]" (2019)',
      '"[A questão ambiental importa] só aos veganos que comem só vegetais." (2019)',
      '"Um dia, se o presidente da OAB quiser saber como é que o pai dele desapareceu no período militar, conto pra ele. Ele não vai querer ouvir a verdade. Conto pra ele." (2019)',
      '"Tem a questão do coronavírus também que, no meu entender, está superdimensionado, o poder destruidor desse vírus. Então talvez esteja sendo potencializado até por questão econômica, mas acredito que o Brasil, não é que vai dar certo, já deu certo." (2020)',
      '"Não podemos entrar em uma neurose como se fosse o fim do mundo. Outros vírus mais perigosos aconteceram no passado e não tivemos essa crise toda. Com toda certeza há um interesse econômico nisso tudo para que se chegue a essa histeria." (2020)',
      '"Depois da facada, não vai ser gripezinha que vai me derrubar, não, tá ok?" (2020)',
      '"O Vírus está indo embora." 22.169 casos e 1.223 mortes (12-04-2020)',
      '"Ô, ô, ô, cara. Quem fala de... eu não sou coveiro, tá?" 40.581 casos e 2.575 mortes (20-04-2020)',
      '"E daí? Lamento. Quer que eu faça o quê? Eu sou Messias, mas não faço milagre." 71.886 casos e 5.017 mortes (28-04-2020)',
    ]
  }

  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <h1>FRASES QUE NÃO DEVEM SER ESQUECIDAS OU NORMALIZADAS...</h1>
        <div className="img-container">
          <img src={require('./assets/jair.gif')} className="img" alt="Gif do JB" />
          <img src={require('./assets/biscoito.png')} className="img" alt="Biscoito da Desgraça" />
        </div>
        <Botao nome="Abre o biscoito da desgraça dele&#128520; e vê o que tem dentro..." acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
        <a href="https://br.pinterest.com/sofiakataa011/elenao/?autologin=true">
          <img src={require('./assets/elenao.jpg')} className="img" alt="Biscoito da Desgraça" />
        </a>
        <div id="footer">
          &copy;2020 - Biscoito da Desgraça criado e desenvolvido por <a href="https://jcgsr.github.io/">Jovane Rocha </a> <br/>
          com base no <a href="https://www.udemy.com/course/curso-reactjs/"> Curso de ReactJS do Zero ao Avançado na Prática</a>
        </div>
      </div>

    );

  }

}

class Botao extends Component {
  render() {
    return (
      <div>
        <button className="btn" onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;
