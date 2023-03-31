import { useState } from "react"

function App() {
  const [checkboxValue, setCheckboxValue] = useState({
    chbx1: false,
    chbx2: false
  })
  const handleCheckboxChange = (e) =>{
    setCheckboxValue({
      ...checkboxValue,
      [e.target.name]: !checkboxValue[e.target.name]
    });
  }

return(
  <div className="container text-center">
    <div className="row">
      <div className="col-2"></div>
      <div className="col">
       <h1>Shopping List</h1>
      </div>
       <div className="col-2 text-end">
          <button type="button" className="btn btn-outline-primary btn-sm mt-1">
            <i className="bi bi-plus-circle"></i>
          </button>
       </div>
    <hr />
    </div>
    <div className="row">
      <div className="col-1">
        <input 
        name="chbx1"
        type="checkbox"
        onChange={(e)=>handleCheckboxChange(e)}
        checked={checkboxValue.chbx1}
        />
      </div>
      <div className="col text-start">
        {checkboxValue.chbx1 ? <s>1 kg</s> : '1 kg'}
      </div>
      <div className="col-5 col-md-7 text-start">
        {checkboxValue.chbx1 ? <s>Tortillas</s> : 'Tortillas'}
      </div>
      <div className="col-4 col-md-3 btn-group btn-group-sm text-end" role="group">
      <button className="btn btn-outline-primary">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-outline-primary">
          <i className="bi bi-files"></i>
        </button>  
        <button className="btn btn-outline-danger">
          <i className="bi bi-trash2-fill"></i>
        </button>   
      </div>
    </div>
    <div className="row">
      <div className="col-1">
        <input 
        name="chbx2"
        type="checkbox"
        onChange={(e)=>handleCheckboxChange(e)}
        checked={checkboxValue.chbx2}        />
      </div>
      <div className="col text-start">
      {checkboxValue.chbx2 ? <s>1 lt</s> : '1 lt'}
      </div>
      <div className="col-5 col-md-7 text-start">
      {checkboxValue.chbx2 ? <s>Aceite</s> : 'Aceite'}
      </div>
      <div className="col-4 col-md-3 btn-group btn-group-sm text-end" role="group">
        <button className="btn btn-outline-primary">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-outline-primary">
          <i className="bi bi-files"></i>
        </button>  
        <button className="btn btn-outline-danger">
          <i className="bi bi-trash2-fill"></i>
        </button>    
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col text-end">
      <button type="button" className="btn btn-outline-primary btn-sm mt-1">
        <i className="bi bi-plus-circle"></i>
      </button>
      </div>
    </div>
  </div>
)
}

export default App
