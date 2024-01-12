import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 
function Employee() {
  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/getEmployee')
    .then(res => {
      if(res.data.Status === "Success") {
        setData(res.data.Result);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }, [])
 
  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/'+id)
    .then(res => {
      if(res.data.Status === "Success") {
        window.location.reload(true);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }
 
  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Liste des Employés</h3>
      </div>
      <Link to="/create" className='btn btn-success'>Ajouter Employé</Link>
      <div className='mt-3'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Fonction</th>
              <th>Adresse</th>
              <th>Salaire</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => {
              return <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.fonction}</td>
                  <td>{employee.adresse}</td>
                  <td>{employee.salaire}</td>
                  <td>
                    <Link to={`/employeeedit/`+employee.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                    <button onClick={e => handleDelete(employee.id)} className='btn btn-sm btn-danger'>delete</button>
                  </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
 
export default Employee