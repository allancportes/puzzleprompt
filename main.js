function imprimirInformacoes() {
  // 1. Coletar os valores do formulário
  const materia = document.getElementById('materia').value;
  const turma = document.getElementById('turma').value;
  const perfilTurma = document.getElementById('perfil_turma').value;
  const objetivoAula = document.getElementById('objetivo_aula').value;
  const profundidade = document.getElementById('profundidade').value;

  // Coletar os valores dos checkboxes
  let materialDigital =[];
  const checkboxes = document.querySelectorAll('input[name="material_digital"]:checked');
  checkboxes.forEach((checkbox) => {
    materialDigital.push(checkbox.value);
  });

  // 2. Construir a string com as informações
  let informacoes = `Matéria: ${materia}\n`;
  informacoes += `Turma: ${turma}\n`;
  informacoes += `Perfil da turma: ${perfilTurma}\n`;
  informacoes += `Objetivo da aula: ${objetivoAula}\n`;
  informacoes += `Nível de dificuldade: ${profundidade}\n`;
  if (materialDigital.length > 0) {
    informacoes += `Materiais digitais desejados: ${materialDigital.join(', ')}\n`;
  }

  // 3. Exibir as informações em um alert
  alert(informacoes);
}