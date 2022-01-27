import HttpClient from "./utils/httpClient";

class ContactsService {
  constructor(){
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return await this.httpClient.get(`/contacts?orderBy=${orderBy}`)
  }


  async storeContacts(data){
    return await this.httpClient.post(`/contacts`, data)
  }
}

export default new ContactsService();