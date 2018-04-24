export const TROCA_NOME  = 'TROCA_NOME';


export const trocanome = (atual)=>{
    return {
      type: TROCA_NOME,
      payload: atual === 'Mathias'?'José':'Mathias'
    }
  }