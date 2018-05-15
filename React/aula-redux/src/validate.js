const validate = (values) => {
    if(!values.firstName){
        return {firstName: 'Primeiro Nome Obrigatório'}
    }
    return true;
}


export default validate