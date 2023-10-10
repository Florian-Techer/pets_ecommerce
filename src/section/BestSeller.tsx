import product from '../assets/png/product.png'

function BestSeller() {
  const products = [
    {
      img: product,
      title: "Balle de corde",
      price: 10.99,
    },
    {
      img: product,
      title: "Balle de corde",
      price: 10.99,
    },
    {
      img: product,
      title: "Balle de corde",
      price: 10.99,
    },
    {
      img: product,
      title: "Balle de corde",
      price: 10.99,
    },
    {
      img: product,
      title: "Balle de corde",
      price: 10.99,
    },
  ]
  return (
    <section className='best_seller_section'>
        <h3>
            Nos Best Sellers
        </h3>
        <div className='best_seller_container'>
          {products.map((item) => {
            return(
              <div className='product_card'>
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <h3 className='secondary'>
                        {`${item.price}$`}
                    </h3>
                  <button className="btn">
                    <a href="#">Ajouter au panier</a>
                  </button>
                </div>
              </div>
            )
          })}
          
        </div>
    </section>
  )
}

export default BestSeller