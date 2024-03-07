import axios from "axios";
import { Dispatch, SetStateAction } from 'react';


const api = axios.create({
  baseURL: 'https://Localhost:8080/'
})

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const login  = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const buscar = async(url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const cadastrar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const atualizar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const deletar = async(url: string, header: Object) => {
  await api.delete(url, header)
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const buscarProdutos = async (url: string, setDados: Dispatch<SetStateAction<any>>) => {
  try {
    const resposta = await api.get(url);
    const dados = resposta.data;
    setDados(dados);
    return dados;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
