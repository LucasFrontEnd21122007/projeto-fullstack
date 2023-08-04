// JavaScript é opcional para este exemplo, mas pode ser útil para adicionar comportamentos interativos.

// Exemplo de adicionar um novo item à lista não ordenada:
const unorderedList = document.getElementById('unordered-list');
const newUnorderedListItem = document.createElement('li');
newUnorderedListItem.textContent = 'Novo item';
unorderedList.appendChild(newUnorderedListItem);

// Exemplo de adicionar um novo item à lista ordenada:
const orderedList = document.getElementById('ordered-list');
const newOrderedListItem = document.createElement('li');
newOrderedListItem.textContent = 'Novo item ordenado';
orderedList.appendChild(newOrderedListItem);
// Função para carregar a lista do Python no elemento 'python-list'
function loadPythonList() {
    fetch('/get_python_list') // Envia uma solicitação GET para '/get_python_list'
      .then(response => response.json())
      .then(data => {
        const pythonList = document.getElementById('python-list');
        data.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          pythonList.appendChild(li);
        });
      })
      .catch(error => console.error('Erro ao carregar a lista do Python:', error));
  }
  
  // Chama a função para carregar a lista do Python quando a página for carregada
  document.addEventListener('DOMContentLoaded', loadPythonList);
  