import APIError from '../../errors/APIError';

class HttpClient{
  constructor(baseUrl){
    this.baseUrl = baseUrl;
  }

  async get(path){
    
    const response = await fetch(`${this.baseUrl}${path}`);
    
    const contentType = response.headers.get('content-type');
    let body = null;

    if(contentType.includes('application/json')){
       body = await response.json();

    }

    if(response.ok){
      return body;
    }
   
    throw new APIError(response, body)
  }


  async post(path, data){
    await fetch(`${this.baseUrl}${path}`, {
      method:'POST',
        headers: {
          'Accept': 'application/json. text/plain, */*',
          'Content-Type': 'application/json'
        },

        body:JSON.stringify(data),
    })

    
  }

}

export default HttpClient;