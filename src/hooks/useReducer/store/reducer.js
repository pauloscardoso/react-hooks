export const reducer = (state, action) => {
  //Função que manipula o estado. Sempre recebe por padrão o estado atual e uma ação.
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda:', action.payload);
      return { ...state, title: action.payload }; //sempre é necessário retornar um estado novo.
    }
    case 'inverter': {
      console.log('Chamou inverter:');
      const { title } = state;
      console.log('state', state);
      return { ...state, title: title.split('').reverse().join('') };
    }
    case '': {
      console.log("chamou '' ", state);
      return { ...state, title: 'Sem Action' };
    }
    case 'aumenta': {
      console.log("chamou 'aumenta' ", action.payload);
      return { ...state, counter: action.payload };
    }
  }
  return { ...state };
};
