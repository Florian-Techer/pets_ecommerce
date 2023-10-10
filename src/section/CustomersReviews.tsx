import customer from '../assets/svg/customer.svg'

function CustomersReviews() {
    const reviews = [
        {
            name: 'anonymous',
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tristique nisl, eu maximus nibh feugiat quis. Suspendisse et dolor porta, faucibus ligula at, bibendum risus."
        },
        {
            name: 'anonymous',
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tristique nisl, eu maximus nibh feugiat quis. Suspendisse et dolor porta, faucibus ligula at, bibendum risus."
        },
        {
            name: 'anonymous',
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tristique nisl, eu maximus nibh feugiat quis. Suspendisse et dolor porta, faucibus ligula at, bibendum risus."
        },
        {
            name: 'anonymous',
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tristique nisl, eu maximus nibh feugiat quis. Suspendisse et dolor porta, faucibus ligula at, bibendum risus."
        },
        {
            name: 'anonymous',
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tristique nisl, eu maximus nibh feugiat quis. Suspendisse et dolor porta, faucibus ligula at, bibendum risus."
        }
    ]
  return (
    <section className='customers_reviews_section'>
        <h3>
            Votre avis compte
        </h3>
        <div className='customers_reviews_container'>
            {reviews.map((review) => {
                return(
                    <div className='customer_card'>
                        <img src={customer} alt="" />
                        <h5>
                            {review.name}
                        </h5>
                        <div className='customer_review_text'>
                            <p className='double_quote quote_start'>
                                "
                            </p>
                            <p className='customer_review_text'>
                                {review.text}
                            </p>
                            <p className='double_quote quote_end'>
                                "
                            </p>
                        </div>
                
                    </div>
                )
            })}

        </div>
    </section>
  )
}

export default CustomersReviews