function StudentCard(props) {
    return (
      <div className="card">
       
        <img src={props.image} alt="Photo de l'étudiant" className="photo" />
        
        <h1>Fiche étudiant</h1>
        
        <p>
          <strong>Nom et prénom:</strong> {props.nom} {props.prenom}
        </p>
        <p>
          <strong>Email:</strong> {props.email}
        </p>
        <p>
          <strong>Tel:</strong> {props.tel}
        </p>
        <p>
          <strong>Filière:</strong> {props.filiére}
        </p>
        <p>
          <strong>Année d'étude:</strong> {props.année}
        </p>
        <p>
          <strong>Ville:</strong> {props.ville}
        </p>
        
        <button className="btn">Contacter l'étudiant</button>
      </div>
    );
  }
  
  export default StudentCard;