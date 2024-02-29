import Categoria from './Categoria';

export default interface Postagem {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  categoria: Categoria | null;
}