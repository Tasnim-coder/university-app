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