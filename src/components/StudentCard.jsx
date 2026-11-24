import { useState } from "react";
function StudentCard(props) {
  const [Visibles, setCoordonneesVisibles] = useState(false);
  function basculerInformations() {
  setCoordonneesVisibles(!Visibles);
  }
  return (
    <div className="student-card">
      <img
        src={props.image}
        alt={"Photo de " + props.prenom}
        className="student-image"
      />
      <h2>
        {props.prenom} {props.nom}
      </h2>
      {Visibles &&(
        <>
          <p>
            <strong>Email :</strong> {props.email}
          </p>

          <p>
            <strong>Téléphone :</strong> {props.telephone}
          </p>
        </>
      )}
      <p>
        <strong>Filière :</strong> {props.filiere}
      </p>
      <p>
        <strong>Année d'étude :</strong> {props.annee}
      </p>
      <p>
        <strong>Groupe :</strong> {props.groupe}
      </p>
      <p>
        <strong>Ville :</strong> {props.ville}
      </p>
      <button
        onClick={basculerInformations}
        className="contact-button"
      >
        {Visibles
          ? "Masquer les informations"
          : "Afficher les informations"}
      </button>
      <a
        href={`mailto:${props.email}`}
        className="contact-button"
      >
        Contacter
      </a>
      <button
        onClick={() => props.modifierEtudiant(props.email)}
        className="contact-button"
      >
        Modifier
      </button>
      <button
        onClick={() => props.supprimerEtudiant(props.email)}
        className="contact-button"
      >
        Supprimer
      </button>
    </div>
  );
}
export default StudentCard;