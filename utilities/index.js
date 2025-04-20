function validateInput(data, mssg){
    if (!data) {
        throw new Error(`${mssg} is required.`)
      }
}

module.exports ={
    validateInput
}