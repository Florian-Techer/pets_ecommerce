import catUnivers from '../assets/png/catUnivers.png'
import dogUnivers from '../assets/png/dogUnivers.png'

function Univers() {
  return (
    <section className='univers_section'>
        <h3>
            Choisis ton univers
        </h3>
        <div className='univers_images_container'>
            <div className='univers_image_container'>
                <img src={dogUnivers} alt="" />
            </div>
            <div className='univers_image_container'>
                <img src={catUnivers} alt="" />
            </div>
        </div>
        
    </section>
  )
}

export default Univers