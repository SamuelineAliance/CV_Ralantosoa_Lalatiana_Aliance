import React, { useState } from 'react';

// Composant de la fenêtre de notification
function NotificationWindow({ onClose }) {
  return (
    <div className="notification-window">
      <p>Contenu de la notification...</p>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
}

// Composant principal
function App() {
  const [showNotification, setShowNotification] = useState(false);

  // Gestionnaire d'événements pour le clic sur le bouton
  const handleButtonClick = () => {
    setShowNotification(true);
  };

  // Gestionnaire d'événements pour fermer la fenêtre de notification
  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="app">
      <button onClick={handleButtonClick}>Afficher la notification</button>
      {showNotification && <NotificationWindow onClose={handleCloseNotification} />}
    </div>
  );
}

export default App;