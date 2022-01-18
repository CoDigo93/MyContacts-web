import {useState} from 'react'

export default function useErrors(){
  const [errors, setErrors] = useState([]);

  function addError({field, message}){
    const errorAlreadyExists = errors.find(error => error.field === 'email')
      
    if(errorAlreadyExists) return;

    setErrors(prevState => [
      ...prevState, 
      { field, message }
    ])
  }

  function removeError(field){
    setErrors(prevState => prevState.filter(error => error.field !== field))
  }

  function getErrorMessageByFieldName(fieldname){
    return errors.find(error => error.field === fieldname)?.message
  }

  return { errors, addError, removeError, getErrorMessageByFieldName }
}