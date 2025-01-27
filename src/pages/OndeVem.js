import React from 'react';
import '../styles/Ondevem.css';

function OndeVem() {
  return (
    <div className="ondevem-container">
      <div className="ondevem-header">
        <h1>De Onde Vem?</h1>
        <p>O segredo por trás do sabor único da Palha Italiana!</p>
      </div>

      <div className="ondevem-content">
        <h2>A História da Palha Italiana</h2>
        <p>
          A Palha Italiana, originária da Itália, é um doce tradicional que tem conquistado os paladares ao redor do mundo.
          Feita a partir de uma mistura simples e deliciosa de chocolate e leite condensado, esse doce tem se tornado uma
          verdadeira paixão em muitos países. Seu sabor irresistível é resultado de ingredientes de alta qualidade e da
          dedicação na sua produção.
        </p>

        <h2>Ingredientes Selecionados</h2>
        <p>
          A nossa Palha Italiana é feita com os melhores ingredientes, cuidadosamente escolhidos para garantir um sabor
          excepcional. Utilizamos:
        </p>
        <ul>
          <li><strong>Chocolate de alta qualidade</strong>: Utilizamos chocolate premium, o que garante uma textura suave e um sabor profundo.</li>
          <li><strong>Leite condensado fresco</strong>: Nosso leite condensado é cremoso, trazendo a doçura perfeita para equilibrar o chocolate.</li>
          <li><strong>Ingredientes locais</strong>: Priorizamos ingredientes frescos e de produtores locais, apoiando a economia regional e garantindo a qualidade em cada pedaço.</li>
        </ul>
      </div>
    </div>
  );
}

export default OndeVem;
