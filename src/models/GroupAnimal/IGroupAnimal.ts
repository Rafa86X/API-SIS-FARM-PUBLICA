
export interface IGroupAnimal{
    species: string
    active: boolean,
    id: string,
    name: string,
    gender: string,
    date_birth: string,
    date_start:string,    
    date_and: string,
    reason:{ ref:string,desc:string},    
    puppies:string, //filhotes
    breed: string, // raça
    ancestry: string, // ancestralidade

    }