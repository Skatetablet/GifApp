
export const GifGrid = ({category}) => {


    const getGifs = async() => {
        const url = `api.giphy.com/v1/gifs/search?api_key=1j6o5JMyT6QaGNUceEOi59a7y9xViHrZ&q=${category}&limit=20`
        const resp = await fetch(url);
        const {data} = resp.json()
        console.log(data);
        
    }
    getGifs();

  return (
    <>
      <h3>{category}</h3>
       
    </>
  )
}

