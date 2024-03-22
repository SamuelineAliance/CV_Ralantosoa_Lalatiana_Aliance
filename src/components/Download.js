import React from 'react';


const handleDownload = () => {
  // Obtenir l'URL complète vers le fichier PDF
  const fileUrl = `${process.env.PUBLIC_URL}../cv/cv.pdf`;

  // Créer un élément d'ancre pour le téléchargement
  const anchor = document.createElement('a');
  anchor.href = fileUrl;

  // Spécifier le nom du fichier une fois téléchargé
  anchor.download = 'Cv_Ralantosoa_Lalatiana_aliance.pdf';

  // Ajouter l'ancre à la fin du corps
  document.body.appendChild(anchor);

  anchor.click();
  document.body.removeChild(anchor);
};

const DownloadButton = () => {
  return (
    <div onClick={handleDownload}>
      Télécharger le CV
    </div>
  );
};

export default DownloadButton;
