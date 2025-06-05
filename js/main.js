let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}
function closeMenu(){
    ul.classList.remove('open');
}

document.getElementById('calcular-button').addEventListener('click', calcularFinanciamento);

function calcularFinanciamento(event) {
  event.preventDefault();

  const valorFinanciamento = parseFloat(document.getElementById('valor-financiamento').value);
  const prazoPagamento = parseInt(document.getElementById('prazo-pagamento').value);
  const taxaJuros = parseFloat(document.getElementById('taxa-juros').value) / 100;

  const juros = valorFinanciamento * taxaJuros * prazoPagamento;
  const total = valorFinanciamento + juros;
  const parcela = total / prazoPagamento;

  const resultado = `Valor do Financiamento: R$ ${valorFinanciamento.toFixed(2)}<br>
                     Prazo de Pagamento: ${prazoPagamento} meses<br>
                     Taxa de Juros Mensal: ${taxaJuros * 100}%<br>
                     Juros: R$ ${juros.toFixed(2)}<br>
                     Total: R$ ${total.toFixed(2)}<br>
                     Parcela: R$ ${parcela.toFixed(2)}`;

  document.getElementById('resultado').innerHTML = resultado;
}

// Seleciona o formulário
const form = document.querySelector('form');

// Adiciona evento de envio do formulário
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Coleta os dados do formulário
  const dados = new FormData(form);
  const nome = dados.get('nome');
  const email = dados.get('email');
  const telefone = dados.get('telefone');
  const celular = dados.get('cel');
  const cpf = dados.get('cpf');
  const rg = dados.get('rg');
  const nascimento = dados.get('nasc');
  const profissao = dados.get('prof');
  const mae = dados.get('mae');
  const cep = dados.get('cep');
  const endereco = dados.get('end');
  const numero = dados.get('num');
  const bairro = dados.get('bairro');
  const cidade = dados.get('cidade');
  const estado = dados.get('estado');
  const assunto = dados.get('assunto');
  const mensagem = dados.get('mensagem');


  // Verifica se todos os campos estão preenchidos
  if (nome && email && telefone && celular && cpf && rg && nascimento && profissao && mae && cep && endereco && numero && bairro && cidade && estado && assunto && mensagem) {
    try {
      // Envia os dados para o servidor
      const response = await fetch('/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          celular,
          cpf,
          rg,
          nascimento,
          profissao,
          mae,
          cep,
          endereco,
          numero,
          bairro,
          cidade,
          estado,
          assunto,
          mensagem,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Cadastro realizado com sucesso!');
        form.reset();
      } else {
        alert('Erro ao realizar cadastro!');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao realizar cadastro!');
    }
  } else {
    alert('Preencha todos os campos!');
  }
});