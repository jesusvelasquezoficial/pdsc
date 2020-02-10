const state = {
  fullname: localStorage.getItem('fullname')
}

const getters = {
  getFullName: (state) => {
    return state.fullname;
  }
}

const actions = {
  
}

const mutations = {
 
}

export default {
	namespaced:true,
	state,
	getters,
	actions,
	mutations
}