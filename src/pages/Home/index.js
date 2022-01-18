import { useEffect, useState, useMemo, useCallback } from "react";
import { Container , Header, ListHeader, Card, InputSearchContainer, ErrorContainer, EmptyContacts, SearchNotFoundContainer} from "./styles";
import { Link } from "react-router-dom";
import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg'
import { Modal } from "../../components/Modal";
import { Loader } from "../../components/Loader";
import Button from '../../components/button';
import ContactsService from '../../services/contactsService';

export const Home = () => {
  const [contacts, setContacts] = useState();
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

//
  const filteredContacts = useMemo(() => 
    contacts?.filter(contact =>(
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
,[contacts, searchTerm]);


const loadContacts = useCallback(async ()=>{
  try {
    setIsLoading(true)
    const contactsList = await ContactsService.listContacts(orderBy)
    setContacts(contactsList);
    setHasError(false);
      
  }catch(error){
    setHasError(true);
  }
  finally {
    setIsLoading(false);
  }
} 
,[orderBy])

  useEffect(() => {
    loadContacts();
      
  },[loadContacts])


  function handleToggleOrderBy() {
    setOrderBy(prevState => prevState === 'asc' ? 'desc' : 'asc');
  }


  function handleSearchTerm(event) {
    setSearchTerm(event.target.value)
  }


  function handleLoadContacts(){
    loadContacts();
  }


  return (
    <Container>
      <Loader isLoading={isLoading}/>
      
      {contacts?.length > 0 && (
        <InputSearchContainer>
        <input
          value={searchTerm} 
          type='text' 
          placeholder="Pesquisar contato ..."
          onChange={handleSearchTerm}/>
      </InputSearchContainer>
      ) }
      

      <Header justifyContent={ hasError ? 'flex-end' : (contacts?.length > 0 ? 'space-between': 'center')}>
        {(!hasError && contacts?.length !== 0) &&  (
          <strong>
            {filteredContacts?.length} 
            {filteredContacts?.length === 1 ? ' contato':' contatos'}
          </strong>
        )}
        <Link to='/new'>Novo contato</Link>
      </Header>

      
      
      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad"/>
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button 
              type="button"
              onClick={handleLoadContacts}>

              Tentar novamente
            </Button>
          </div>

        </ErrorContainer>
      )}

      {!hasError && (
        <>
        {(contacts?.length < 1 && !isLoading) && (

          <EmptyContacts>
            <img src={emptyBox} alt="empty-box"/>
            <p>Você ainda não tem nenhum contato cadastrado!
            Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o seu primeiro!</p>
          </EmptyContacts>
        )}

        {(contacts?.length > 0 && filteredContacts.length < 1) && (
          <SearchNotFoundContainer>
            <img src={magnifierQuestion} alt='lupa'/>
            <span>Nenhum resultado foi encontrado para <strong>"{searchTerm}"</strong></span>
          </SearchNotFoundContainer>
        )}

        {filteredContacts?.length > 0 && (
          <ListHeader orderBy={orderBy}>
            <button onClick={handleToggleOrderBy}type="button">
              <strong>Nome</strong>
              <img src={arrow} alt='arrow'/>
            </button>
        </ListHeader>
      )}

      {filteredContacts?.map( contact => (
        <Card key={contact.id}>
          <section className="info">
            <header>
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </header>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </section>
          <section className="actions">
            <Link to={`/edit/${contact.id}`} >
              <img src={edit} alt="edit"/>
            </Link>
            <button>
              <img src={trash} alt='delete'/>
            </button>
          </section>
        </Card>
      ))}
        </>
      )}
      
    </Container>
    
  )
}