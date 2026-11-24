import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import { useState } from "react";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  const [etudiants, setEtudiants ] = useState([
    {
      prenom: "Tasnim",
      nom: "Chouaieb",
      email: "tasnimch899@gmail.com",
      telephone: "95090908",
      filiere: "GLSI",
      annee: "2ème année",
      groupe: "Groupe 1",
      ville: "Mahdia",
      image: "image6.png",
    },
    {
      prenom: "Slim",
      nom: "Boubaker",
      email: "slim@gmail.com",
      telephone: "27985502",
      filiere: "GLSI",
      annee: "2ème année",
      groupe: "Groupe 1",
      ville: "Sfax",
      image: "image5.jpeg",
    },
    {
      prenom: "Raja",
      nom: "Trabelsi",
      email: "raja@gmail.com",
      telephone: "27894565",
      filiere: "GLSI",
      annee: "2ème année",
      groupe: "Groupe 2",
      ville: "Mednine",
      image: "image3.jpeg",
    },
    {
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem@gmail.com",
      telephone: "22989544",
      filiere: "GLSI",
      annee: "2ème année ",
      groupe: "Groupe 1",
      ville: "Sousse",
      image: "image2.jpeg",
    },
  ]);
  const [filiereFiltre, setFiliereFiltre] = useState("Toutes");
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      prenom: "Yassine",
      nom: "Kacem",
      email: "yassinekacem@gmail.com",
      telephone: "24688446",
      filiere: "GLSI",
      annee: "2ème année",
      groupe: "Group 1",
      ville: "Sfax",
      image: "image4.jpeg"
    }; 
    setEtudiants([...etudiants, nouvelEtudiant]);
  } 
  function supprimerEtudiant(email) {
    setEtudiants(
      etudiants.filter((etudiant) => etudiant.email !== email)
    );
  }
  function modifierEtudiant(email) {
    console.log("Fonction appelée :", email);

    const nouvelleVille = window.prompt("Entrez la nouvelle ville :");

    console.log("Nouvelle ville :", nouvelleVille);

    if (nouvelleVille === null || nouvelleVille.trim() === "") {
      return;
    }
    setEtudiants((anciensEtudiants) => 
      anciensEtudiants.map((etudiant) => 
        etudiant.email === email 
         ? { ...etudiant, ville: nouvelleVille }
         : etudiant
      )
    );
  }
  return (
    <div id="accueil">
      <Header />
      <Navbar />

      <main id="etudiants">
        <h1 className="page-title">Nos étudiants</h1>
        <div className="actions">
          <button
            className="add-button"
            onClick={ajouterEtudiant}
          >
            + Ajouter un étudiant
          </button>
        </div>
        <div className="filter-container">
          <label className="filter-label">
            Filtrer par filière :
          </label>
          <select
            className="filter-select"
            value={filiereFiltre}
            onChange={(e) => setFiliereFiltre(e.target.value)}
          >
            <option value="Toutes">Toutes les filières</option>
            <option value="GLSI">GLSI</option>
          </select>
        </div>

       <div className="students-container">
        {etudiants.filter((etudiant) => filiereFiltre === "Toutes" || (filiereFiltre === "Autre" ? etudiant.filiere !== "GLSI" : etudiant.filiere === filiereFiltre) ).map((etudiant) =>(
          <StudentCard
           key={etudiant.email}
           prenom={etudiant.prenom}
           nom={etudiant.nom}
           email={etudiant.email}
           telephone={etudiant.telephone}
           filiere={etudiant.filiere}
           annee={etudiant.annee}
           groupe={etudiant.groupe}
           ville={etudiant.ville}
           image={etudiant.image}
           supprimerEtudiant={supprimerEtudiant}
           modifierEtudiant={modifierEtudiant}
          />
        ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;