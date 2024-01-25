'use client'

import Image from 'next/image'
import classes from './page.module.css'
import { useState } from 'react'

//

const data = {
    images: {
        black: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75',
        white: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=1920&q=75',
        blue: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=1920&q=75'
    },
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
    const [selectedColor, setSelectedColor] = useState(data.colors[0]);
    const [selectedSize, setSelectedSize] = useState(data.sizes[0]);

    // curring
    const handleSelect = (setState) => (e) => {
        setState(e.target.attributes['dataSet'].value)
    }


    return (
        <main className={`full-size`}>
            <section className={`${classes.card} ${classes.grid}`}>
                {/* image */}
                <div>
                    <div className={`${classes.imageContainer}`}>
                        <Image
                            src={data.images[selectedColor]}
                            alt=''
                            fill
                            sizes='(max-width: 768px) 500px, (max-width: 1200px) 700px, 900px'
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
                        <p>color: <span>{selectedColor}</span></p>
                        <div className={`${classes.buttonGroup}`}>
                            {
                                data.colors.map(color => (
                                    <button
                                        key={`select this from ${color}`}
                                        className={`${selectedColor === color ? classes.active : ''}`}
                                        dataSet={color}
                                        onClick={handleSelect(setSelectedColor)}
                                    >{color}</button>
                                )
                                )
                            }
                        </div>
                        <p>size: <span>{selectedSize}</span></p>
                        <div className={`${classes.buttonGroup}`}>
                            {
                                data.sizes.map(size => (
                                    <button
                                        key={size}
                                        className={`${selectedSize === size ? classes.active : ''}`}
                                        dataSet={size}
                                        onClick={handleSelect(setSelectedSize)}
                                    >{size}</button>
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