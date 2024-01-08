import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Social Media',
        github: 'https://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Blog Post',
        github: 'https://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Menzil',
        github: 'https://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Weather',
        github: 'https://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Financial App',
        github: 'https://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Pomogranate',
        github: 'https://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <div className='text_center1'>
                <h5>My Recent Work</h5>
            </div>
            <div className='text_center'>
                <h2>Portfolio</h2>
            </div>
            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (<article key={id} className='portfolio__item'>
                        <div className="portfolio__item-image">
                            <img src={image} alt={title}></img>
                        </div>
                        <h3>{title}</h3>
                        <div className='portfolio__item-cta'>
                            <a href={github} target='_blank' className='btn'>GitHub</a>
                            <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                        </div>

                    </article>

                    )
                })
                }
            </div>
        </section>
    )
}

export default Portfolio