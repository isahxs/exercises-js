document.addEventListener('DOMContentLoaded', function() {
const btnVerificar = document.getElementById('btnVerificar');
const resultadoDiv = document.getElementById('resultado');
 
    
verificarAgendamento();
 
btnVerificar.addEventListener('click', verificarAgendamento);
 
function verificarAgendamento() {
        
const horarioDisponivel = document.getElementById('chkHorario').checked;
const pacienteCadastrado = document.getElementById('chkCadastro').checked;
    
const podeAgendar = horarioDisponivel && pacienteCadastrado;
 
        
if (podeAgendar) {
    resultadoDiv.innerHTML = 'Consulta pode ser agendada!';
    resultadoDiv.style.color = '#155724';
    resultadoDiv.style.backgroundColor = '#d4edda';
    resultadoDiv.style.border = '1px solid #c3e6cb';
} else {
    resultadoDiv.innerHTML = 'Consulta não pode ser agendada.';
    resultadoDiv.style.color = '#721c24';
    resultadoDiv.style.backgroundColor = '#f8d7da';
    resultadoDiv.style.border = '1px solid #f5c6cb';
    }
}
});