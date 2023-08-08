import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Note from './Note';
import Notes from './Notes'
import Hooks from './Hooks';
import Form from './Form';

function createcard(item){
  return < Note title ={item.title} content ={item.content} />;

}

function App() {
  return (
    <div>
      <Head/>
      <Hooks/>
      {Notes.map(createcard)}
      <Form/>
    </div>
  );
}

export default App;
