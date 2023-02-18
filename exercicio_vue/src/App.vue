<script setup>
  import { reactive } from 'vue';


  const estado = reactive ({
    operacao: '+',
    parametro1: 0,
    parametro2: 0,
  });


  const soma = () =>{
    return parseInt(estado.parametro1)+ parseInt(estado.parametro2)
  }

  const subtracao = () =>{
    return estado.parametro1 - estado.parametro2
  }

  const divisao = () =>{
    return estado.parametro1 / estado.parametro2
  }

  const multi = () =>{
    return estado.parametro1 * estado.parametro2
  }

  const operacoes = () => {
      const {operacao} = estado;
      switch (operacao){
        case '+':
          return soma();
        case '-':
          return subtracao();
        case '/':
          return divisao();
        case 'x':
          return multi();  
      }
  }

  const valorPadrao = () => {
    if(estado.parametro1 === ''){
      estado.parametro1 = 0
    }
  }

</script>

<template>
  <div class="container">
    <h1>Calculadora</h1>
    <label for="">Parametro 1</label>
    <input type="number" required @keyup="evento => estado.parametro1 = evento.target.value">
    <label for="">Parametro 2</label>
    <input type="number" required @keyup="evento => estado.parametro2 = evento.target.value">
    <select @change="evento => estado.operacao = evento.target.value">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="/">/</option>
      <option value="x">x</option>
    </select>
    <span>Resultado : <span v-if="operacoes() >= 0">{{operacoes()}}</span> <span v-else>Preencha os campos</span> </span>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    padding: 35px;
    max-width: 400px;
    gap: 35px;
    align-items: center;
    background-color: beige;
    margin: 25vh auto;
  }

  input{
    padding: 8px;
    width: 80%;
  }

  label{
    font-size: 24px;
  }

  select{
    width: 50%;
    padding: 8px;
  }

  span{
    font-size: 24px;
  }
</style>
