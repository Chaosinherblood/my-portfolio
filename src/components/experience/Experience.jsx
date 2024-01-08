import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
    return (
        <section id='experience'>
            <div className='text_center1'>
                <h5>What Skills I Have</h5>

            </div>

            <div className='text_center'>

                <h2>My Experience</h2>
            </div>
            <br></br>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div> <h4>HTML</h4>
                            <small className='text-light'>Experienced</small></div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div><h4>CSS</h4>
                            <small className='text-light'>Intermediate</small></div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div><h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small></div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div><h4>BootStrap</h4>
                            <small className='text-light'>Experienced</small></div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div><h4>React</h4>
                            <small className='text-light'>Experienced</small></div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div>
                            <h4>TailWind</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </div>
                </div>
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div> <h4>FastAPI</h4>
                            <small className='text-light'>Experienced</small></div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div> <h4>Python</h4>
                            <small className='text-light'>Experienced</small></div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div><h4>Solidity</h4>
                            <small className='text-light'>Intermediate</small></div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div><h4>MySQL</h4>
                            <small className='text-light'>Experienced</small></div>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                        </article>
                        <div> <h4>MangoDB</h4>
                            <small className='text-light'>Experienced</small></div>


                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience