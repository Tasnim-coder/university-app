<<<<<<< HEAD
import './App.css'
import StudentCard from "./components/StudentCard.jsx";

const etudiants = [
  {
    nom: "Tasnim",
    prenom: "chouaieb",
    email: "tasnimch899@gmail.com",
    tel: "95090907",
    filiére: "GLSI",
    année: "2026-2027",
    ville: "Mahdia" ,
    image: "./image.jpg" 
   
    
  },
  {
    nom: "Nom1",          
    prenom: "Prenom1",    
    email: "email1@gmail.com",
    tel: "98765452",
    filiére: "GLSI",
    année: "2026-2027",
    ville: "Mahdia",
    image: "./image.jpg" 
  },
  {
    nom: "Nom2",          
    prenom: "Prenom2",    
    email: "email2@gmail.com",
    tel: "98765412",
    filiére: "GLSI",
    année: "2026-2027",
    ville: "Mahdia",
    image: "./image.jpg" 
  },
  {
    nom: "Nom3",          
    prenom: "Prenom3",    
    email: "email3@gmail.com",
    tel: "98765432",
    filiére: "GLSI",
    année: "2026-2027",
    ville: "Mahdia",
    image: "./image.jpg" 
  }
 
];

function App() {
  return (
    <div className="container">
      {etudiants.map((etudiant, index) => (
        <StudentCard 
          key={index}
          nom={etudiant.nom}
          prenom={etudiant.prenom}
          email={etudiant.email}
          tel={etudiant.tel}
          filiére={etudiant.filiére}
          année={etudiant.année}
          ville={etudiant.ville}
          image={etudiant.image}
        />
      ))}
    </div>
  );
}

export default App;
=======
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
>>>>>>> 565e5ae8005b792597c259da8cce8c0aea3c709f
