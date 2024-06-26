async function register(event) {
    event.preventDefault();
    
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
  
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas!');
      return;
    }
  
    const employe = { non: email, pass: password };
  
    try {
      const response = await fetch('http://localhost:8080/TEST_JEE/employes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employe)
      });
  
      if (response.ok) {
        alert('Inscription réussie!');
      } else {
        alert('Échec de l\'inscription!');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur de serveur!');
    }
  }
  
  async function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    try {
      const response = await fetch('http://localhost:8080/TEST_JEE/employes');
      const employes = await response.json();
  
      const user = employes.find(employe => employe.non === email && employe.pass === password);
      
      if (user) {
        alert('Connexion réussie!');
      } else {
        alert('Email ou mot de passe invalide');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur de serveur!');
    }
  }
  