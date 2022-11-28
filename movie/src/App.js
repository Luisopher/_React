import {dummy} from "./movieDummy";
import Movie from "./component/Movie";

function App() {
  return (
    <div className="App">
      <div className='app_container'>
        {
          dummy.results.map((item)=>{
            return (
                <Movie></Movie>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
