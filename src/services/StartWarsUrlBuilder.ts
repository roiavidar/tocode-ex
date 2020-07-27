export default class StarWarsUrlBuilder {
    private domain = 'https://swapi.dev/api';
    
    getUrl(id: string, category: string) {
        return `${this.domain}/${category}/${id}`;
    }
    
    
}