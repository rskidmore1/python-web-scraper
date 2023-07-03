import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App container">
      <div className="d-flex flex-column justify-content-center">

          <form className="">
            <div class="form-group">
              <label for="URLToScrap">Url to scrap</label>
              <input type="email" class="form-control" id="URLToScrap" placeholder="URL" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>


        <div className="">
          Display text
        </div>
      </div>

    </div>
  );
}

export default App;
