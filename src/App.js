import "./styles.css";
import React, { useState } from "react";
import Radio from "../componentes/form/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()"
    ],
    resposta: "React.createElement()",
    id: "p1"
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"'
    ],
    resposta: 'import Component from "./Component"',
    id: "p2"
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3"
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4"
  }
];

const app = () => {
  const [respostas, SetRespostas] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: ""
  });

  const [slide, SetSlide] = useState(0);
  const [resultado, setResultado] = useState(null);

  function handleChange({ target }) {
    SetRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );

    setResultado(`Voce acertou ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      SetSlide(slide + 1);
    } else {
      SetSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          key={pergunta.id}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleClick}>Proxima</button>
      )}
    </form>
  );
};
export default app;
