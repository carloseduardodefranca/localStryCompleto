// scripts.js
document.getElementById('changeImageBtn').addEventListener('click', function() {
  const newImage = prompt('Digite o URL da nova foto de perfil:');
  if (newImage) {
    document.getElementById('profileImage').src = newImage;
  }
});

document.getElementById('saveBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const bio = document.getElementById('bio').value;
  
  if (name && bio) {
    alert('Alterações salvas com sucesso!');
    // Aqui você pode adicionar código para salvar as alterações no servidor ou localmente
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
  if (confirm('Tem certeza de que deseja sair?')) {
    // Aqui você pode adicionar código para encerrar a sessão do usuário
    alert('Você saiu com sucesso!');
  }
});

document.getElementById('deleteAccountBtn').addEventListener('click', function() {
  if (confirm('Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
    // Aqui você pode adicionar código para excluir a conta do usuário
    alert('Sua conta foi excluída com sucesso!');
  }
});
