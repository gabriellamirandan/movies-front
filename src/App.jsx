import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import BuildTable from './moviesTable'

const moviesFake = [
  {
    "_id": "680e49ab31b78291a8854a49",
    "name": "All of those voices",
    "year": 2023,
    "directors": "Charlie Lightning",
    "cast": [
      "Louis Tomlinson",
      "Fans"
    ],
    "country": "UK",
    "synopsis": "Follow Louis Tomlinson as he tours all over the world on his Louis Tomlinson World Tour",
    "mpaa": "14",
  },
  {
    "_id": "39284292u239842y",
    "name": "Aula de programacao",
    "year": 2024,
    "directors": "Gabi",
    "cast": [
      "Dani",
      "Thais",
      "Joao"
    ],
    "country": "Brasil",
    "synopsis": "Aulas super divertidas",
    "mpaa": "12",
  },
  {
    "_id": "78462378421h23982",
    "name": "Qualquer Filme",
    "year": 2012,
    "directors": "Fulano",
    "cast": [
      "Ciclano",
      "Beltrano"
    ],
    "country": "Brasil",
    "synopsis": "Qualquer sinopse",
    "mpaa": "18",
  }
]


export default function App() {
  const [myState, setMyState] = useState(false); //desconstruindo uma variavel para ?pegar o state e acionar uma funcao?
  let tableContent; //definir uma variavel para colocar ou nao o elemento da tabela

  if (myState) {
    tableContent = ( //se o myState é true incluir a tabela na variavel tableContent
      <BuildTable
        moviesFake={moviesFake}
      />
    )
  } else { //se o myState é falso deixar a tableContent como nula (sem nada)
    tableContent = null;
  }
  return (<div>
    <div>{tableContent}</div>
    <div><button onClick={() => { setMyState(!myState) }//no clique do button user a funcao setMyState para inverter o myState e mostrar ou ocultar a tabela
  }>Click Me</button></div>
  </div>);
}

//TODO Usar o props para:
//Ler esse primeiro: https://react.dev/learn/passing-props-to-a-component#passing-props-to-a-component
// Depois esses: https://react.dev/reference/react/useEffect#reference | https://react.dev/reference/react/useState#reference
//Separar o codigo de tabela em um arquivo moviesTable.jsx
//Colocar todo o processamento pra gerar a tabela la dentro
//Colocar esse moviesTable dentro do app

/*function App() {
const [count, setCount] = useState(0)
return (
  <>
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
    {//chamando a funcao para exibir o resultado (html retornado)
      //buildTable()
    }
  </>
)
}*/

/*fazer o get na API - executar uma funcao pra jogar o resultado dentro da funcao moviesFake (useState)

const moviesReal = async () => {
  const fetchResult = await fetch("http://localhost:3000/api/movies");
  const arrayMovies = await fetchResult.json();
  console.log(arrayMovies)
}*/