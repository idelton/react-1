function App(){
 // const style = {color:'red', backgroundColor: 'blue'} // et style={style}
const handleClick = () => {
  alert('jai cliquer')
}
const showTitle = true // false masque le h1
const todos = [
  'Decouverte de react',
  'decouverte jsx',
  'creer composants'
]

   return <>
  
  {showTitle && <h1 onClick={handleClick} id="title" className="title" style={{color: 'red',backgroundColor: 'blue'}}>Bonjour les gens </h1>}
   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quod fugit quibusdam quia amet, expedita voluptatem eos at quam recusandae, sint hic dolor quos aliquam, assumenda autem facere quaerat et.
    </p>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
   </>
}

export default App
//fonction map prend tableaux  en entré et effectue transformation
// il est imperatif que l'element racine du tableaux est un attribut keys et unique pour identifier comme todo
