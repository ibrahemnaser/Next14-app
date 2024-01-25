
import Image from 'next/image'
import classes from './page.module.css'



//

const data = {
    images: [
        'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75',
        'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=1920&q=75',
        'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=1920&q=75'
    ],
    colors: [
        'black',
        'white',
        'blue'
    ],
    sizes: [
        'sm',
        'lg',
        'xl',
        'xxl'
    ]
}

//

export default function ShirtsPage() {

    return (
        <main className={`full-size`}>
            <section className={`${classes.card} ${classes.grid}`}>
                {/* image */}
                <div>
                    <div className={`${classes.imageContainer}`}>
                        <Image
                            src={data.images[0]}
                            alt=''
                            fill
                        />
                    </div>

                </div>

                {/* text */}
                <div>
                    <section className={`${classes.title}`}>
                        <h2>New Shirt One</h2>
                        <p>price: 220$</p>
                    </section>
                    <section>
                        <p>color</p>
                        <div className={`${classes.buttonGroup}`}>
                            {
                                data.colors.map(color => (
                                    <button key={color}>{color}</button>
                                )
                                )
                            }
                        </div>
                        <p>size</p>
                        <div className={`${classes.buttonGroup}`}>
                            {
                                data.sizes.map(color => (
                                    <button key={color}>{color}</button>
                                )
                                )
                            }
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}