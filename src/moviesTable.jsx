import '../src/assets/table.css'

const BuildTable = (props) => {
  return (
    <div>
      <table border="1px" cellPadding="8" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{backgroundColor: '#3b3b66', color: 'white'}}>
            <th>Name</th>
            <th>Year</th>
            <th>Country</th>
            <th>Synopsis</th>
            <th>mpaa</th>
          </tr>
        </thead>
        <tbody>
          { //sempre que ir para JS usar {}. Para ir para HTML, abrir ().
            // function map para passar por cada elemento (tipo forEach) mas retornar algo em cada elemento. Todo map gera um novo array. O forEach nao retorna nada.
            props.moviesFake.map((movie, index) => {//adicionar para receber o indice de cada elemento
              let className; //criar uma variavel para adicionar a classe dentro e reutilizar depois
              if (index % 2 === 0) { //checar se o index é par, ou seja, se index dividido por 2 tem resto igual a 0. Retorna true para par e falso para impar.
                className = 'row-even' //Se par (true), atribuimos a class com o estilo para linhas even definida no arquivo css
              } else {
                className = 'row-odd' //Se ímpar (false), atribuimos a class com o estilo para linhas impar definida no arquivo css
              }
              return ( //In React, the key is a special attribute you need to provide when rendering a list of elements using .map(). It's react's way of tracking each item in a list.
                //Adicionamos a className a variavel className definida no passo anterior (entre chaves pq é JS)
                <tr key={movie._id} className={className}> 
                  <td>{movie.name}</td>
                  <td>{movie.year}</td>
                  <td>{movie.country}</td>
                  <td>{movie.synopsis}</td>
                  <td>{movie.mpaa}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default BuildTable;