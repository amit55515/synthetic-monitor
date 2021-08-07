

export const mockEndPoints = [
    {
        id: 1,
        type: 'Get',
        name: 'Films',
        endPoint: 'https://ghibliapi.herokuapp.com/films',
        status: 'ok'
    },
    {
        id:2,
        type: 'Get',
        name: 'people',
        endPoint: 'https://ghibliapi.herokuapp.com/people',
        status: 'recovering'
    },
    {
        id:3,
        type: 'Get',
        name: 'locations',
        endPoint: 'https://ghibliapi.herokuapp.com/locations',
        status: 'error'
    }
  ]