import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Note from './Note';
import Notes from './Notes'

function createcard(item){
  return < Note title ={item.title} content ={item.content} />;

}

function App() {
  return (
    <div>
      <Head/>
      {Notes.map(createcard)}
    </div>
  );
}

export default App;
