import { useState } from 'react'
import Image from './assets/hero.png'

import './App.css'
const etudiant={
  nom:"Tasnim",
  prénom:"chouaieb",
  email:"tasnimch899@gmail.com",
  tel:"95090907",
  filiére:"GLSI",
  année:"2026-2027",
  ville:"Mahdia",
  image: Image

}

function App() {
  const [count, setCount] = useState(0)


  return (
  <div className='fiche'>
    <img className='image'src={etudiant.image} alt="mon image"></img>
    <h1> Fiche étudiant</h1>
    <strong>Nom et prénom:</strong>{etudiant.nom}{etudiant.prénom}<br></br>
    <strong>Email:</strong>{etudiant.email}<br></br>
    <strong>Tel:</strong>{etudiant.tel}<br></br>
    <strong>Filiére:</strong>{etudiant.filiére}<br></br>
    <strong>Année d'etude:</strong>{etudiant.année}<br></br>
    <strong>ville:</strong>{etudiant.ville}<br></br>
    <button className="btn">contacter l'etudiant</button>
  </div>
  )
}
export default App
