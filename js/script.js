const name = document.querySelector('#name')
const date = document.querySelector('#date')
const amount = document.querySelector('#amount')
const table = document.querySelector('.tabela')
const inicialTr = document.querySelector('.inicial-tr')

document.addEventListener('click', e => {
  const el = e.target;
  console.log(el);

  const expenseDados = new ExpenseTrackerDados(
    name.value,
    date.value,
    amount.value
  )

  
  if(el.classList.contains('btn-add-expense')) {
    if (!name.value || !date.value || !amount.value) return
    expenseDados.adicionaDadosNaTabela()
    expenseDados.limpaInput();
  }

  if(el.classList.contains('apagar')) {
    const td = el.parentNode;
    td.parentNode.remove();
  };

})

function createTr() {
  const tr = document.createElement('tr')
  return tr
}

function createTd() {
  const td = document.createElement('td')
  return td
}

function createButton() {
  const button = document.createElement('button');
  return button;
}

function ExpenseTrackerDados(name, date, amount) {
  this.name = name
  this.date = date
  this.amount = '$' + amount
}

ExpenseTrackerDados.prototype.adicionaDadosNaTabela = function () {
  const tr = createTr()
  const nameTd = createTd()
  const dateTd = createTd()
  const amountTd = createTd()
  const td = createTd()
  const btn = createButton();

  inicialTr.innerHTML = ''

  nameTd.innerText = this.name
  dateTd.innerText = this.date
  amountTd.innerText = this.amount

  btn.innerText = 'X';
  btn.setAttribute('class', 'apagar')

  td.appendChild(btn);
  tr.appendChild(nameTd)
  tr.appendChild(dateTd)
  tr.appendChild(amountTd)
  tr.appendChild(td)

  table.appendChild(tr)
}

ExpenseTrackerDados.prototype.limpaInput = function() {
  const todosInputs = document.querySelectorAll('input');
  todosInputs.forEach(input => {
    input.value = '';
  })
}

// Criar método que adicione informação na tabela.
