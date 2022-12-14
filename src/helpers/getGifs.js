export const getGifs = async ( category )=> {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CjZ6RMWX6c4GtUFw8ZDWEMMR9JnaRolp&q=${category}&limit=10`
    const respuesta = await fetch ( url )
    const { data } = await respuesta.json()

    const gifs = data.map ( img => {
        return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
        }
    })

    return gifs
    }