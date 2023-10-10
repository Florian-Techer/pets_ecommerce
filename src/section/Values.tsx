import qualite from '../assets/svg/qualite.svg'
import environement from '../assets/svg/environment.svg'
import security from '../assets/svg/security.svg'

function Values() {
  return (
    <section className="values_section">
        <h3>
            Nos Valeurs
        </h3>
        <div className='values_container'>
            <div>
                <img src={qualite} alt="" />
                <h4>Qualité</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec auctor tristique nisl, eu maximus nibh feugiat quis. 
                    Suspendisse et dolor porta, faucibus ligula at, bibendum risus. 
                </p>
            </div>
            <div>
                <img src={environement} alt="" />
                <h4>Environnement</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec auctor tristique nisl, eu maximus nibh feugiat quis. 
                    Suspendisse et dolor porta, faucibus ligula at, bibendum risus. 
                </p>
            </div>
            <div>
                <img src={security} alt="" />
                <h4>Sécurité</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec auctor tristique nisl, eu maximus nibh feugiat quis. 
                    Suspendisse et dolor porta, faucibus ligula at, bibendum risus. 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Values