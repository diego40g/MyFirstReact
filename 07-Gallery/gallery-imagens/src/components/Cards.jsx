import Card from './Card'
import Loading from './Loading'
import FormImg from './FormImg'
import { useFetchIamges } from '../hooks/useFetchImages'

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchIamges()
  return (
    <div className='text-center'>
      <FormImg handleSubmit={handleSubmit}/>
      <hr />

      { loading && <Loading/> }

      <div className="row">
        {
          images.map((img) => {
            return <div key={img.id} className="col">
              <Card imgUrl={img.urls.regular}/>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Cards