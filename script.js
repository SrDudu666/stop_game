function submitAnswers() {
    const name = document.getElementById('name').value;
    const place = document.getElementById('place').value;
    const object = document.getElementById('object').value;
  
    if (name === '' || place === '' || object === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `Respostas enviadas: <br> Nome: ${name} <br> Lugar: ${place} <br> Objeto: ${object}`;
  }
  
