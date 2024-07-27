
import './App.css';
import ShowMeTheSkillTree from './components/SkillTree/ShowMeTheSkillTree';
import { projects } from './data/projectsData';


function App() {
  
  return (
    <div className="App">
      <h2>Hello world. Let's build the skill tree</h2>
      <ShowMeTheSkillTree projects={projects} />
    </div>
  );
}

export default App;
