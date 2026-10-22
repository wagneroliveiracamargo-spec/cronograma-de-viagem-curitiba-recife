// Dados da tabela da viagem
const categorias = ['Passagem de avião', 'Hospedagem', 'Alimentação', 'Transporte'];
const valores = [1300, 1000, 500, 150];

// Configuração e criação do Gráfico (Chart.js)
const ctx = document.getElementById('graficoGastos').getContext('2d');

const grafico = new Chart(ctx, {
    type: 'pie', // Pode ser 'pie' (pizza) ou 'bar' (barras)
    data: {
        labels: categorias,
        datasets: [{
            label: 'Gastos em R$',
            data: valores,
            backgroundColor: [
                '#6c5ce7', // Roxo (Passagem)
                '#00cec9', // Turquesa (Hospedagem)
                '#ff7675', // Coral (Alimentação)
                '#fdcb6e'  // Amarelo (Transporte)
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Distribuição dos Gastos da Viagem (R$ 2.950,00)'
            }
        }
    }
});
