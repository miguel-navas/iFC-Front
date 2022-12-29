export interface JogosValueObject {
  idCopa: number; 
  idFederacao: number; 
  rodada: string;
  diaSemana: string;
  data: string; 
  estadio: string; 
  hora: string; 
  t1: string; 
  p1?: number;
  t2: string;
  p2?: number; 
  linkDetalheJogo: string;
}