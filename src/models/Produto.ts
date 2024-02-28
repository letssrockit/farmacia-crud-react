import Categoria from './Categoria';

export default interface Postagem {
  id: number;
  nome: string;
  valor: string;
  descricao: string;
  categoria: Categoria | null;
}