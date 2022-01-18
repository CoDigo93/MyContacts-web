import { useState } from "react";
import { FormGroup } from "../FormGroup";
import isEMailValid from '../../utils/isEmailValid'
import useErrors from "../../hooks/useErrors";
import formatPhone from "../../utils/formatPhone";
import Input from "../input";
import Select from "../select";
import { Form, ButtonContainer } from './styles'
import Button from "../button";

export const ContactForm = ({buttonLabel}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const { addError, removeError, getErrorMessageByFieldName, errors } = useErrors()

  const isValidForm = (name && errors.length === 0)

  function handleSubmit(event) {
    event.preventDefault();

    //console.log({name,email,phone,category});
  }

  function handleNameChange(event) {
    setName(event.target.value)

    if(!event.target.value) {
      addError({ field:'name', message: 'Nome é obrigatório' });

    } else {
      removeError('name');
    }

    
  }
  
  function handleEmailChange(event) {
    setEmail(event.target.value);
    
    if(event.target.value && !isEMailValid(event.target.value)){
      addError({ field:'email', message:'E-mail inválido!' })
      
     
    }else {
      removeError('email')
    }

  }

  function handlePhoneChange(event){
    setPhone(formatPhone(event.target.value));
  }

  


  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')} 
          placeholder='Nome *'
          value={name}
          onChange={event => handleNameChange(event)}/>
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')} 
          type='email' 
          placeholder='E-mail'
          value={email} 
          onChange={event => handleEmailChange(event)}/>
      </FormGroup>

      <FormGroup>
        <Input 
          type='text' 
          placeholder='Telefone'
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}/>
      </FormGroup>

      <FormGroup>
        <Select 
          placeholder='Categoria'
          onChange={event => setCategory(event.target.value)}
        >
           <option value={category}>Instagram</option>
        </Select>
      </FormGroup>
      
      <ButtonContainer >
        <Button disabled={!isValidForm} type='submit' >{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
    

  )
}