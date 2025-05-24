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