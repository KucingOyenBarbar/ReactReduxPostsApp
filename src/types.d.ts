type Posts = {
  id: string,
  userId: number |  string ,
  title: string,
  content: string,
  date: string,
  reactions: {
    thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
  }
}

type Users = {
  id: number,
  name: string
  username:  string,
  email:  string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  }
}


export interface AppState {
  posts: Posts[],
  users: Users[]
}