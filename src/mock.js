

export const mockEndPoints = [
    {
        id: 1,
        type: 'Get',
        name: 'Films',
        endPoint: 'https://ghibliapi.herokuapp.com/films',
        current: false,
        status: 'ok',
        successHits: 0,
        failHits: 0
    },
    {
        id:2,
        type: 'Get',
        name: 'people',
        endPoint: 'https://ghibliapi.herokuapp.com/people',
        current: false,
        status: 'recovering',
        successHits: 0,
        failHits: 0
    },
    {
        id:3,
        type: 'Get',
        name: 'locations',
        endPoint: 'https://ghibliapi.herokuapp.com/locations',
        current: false,
        status: 'error',
        successHits: 0,
        failHits: 0
    }
  ]