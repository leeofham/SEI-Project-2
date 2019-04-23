class Store {
  static setStore(datum){
    localStorage.setItem('datum', datum)
  }

  static getStore(){
    const newDatum = localStorage.getItem('datum')
    return JSON.parse(newDatum)

  }
}

export default Store
