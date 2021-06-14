import { useEffect } from 'react';
import heroImg from '../assets/images/Presentation.svg';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import API from '../api.js';


const Home = () => {
    
    return (
        <>
        <div className="container">
            {/* hero */}
            <div className="px-4 pt-5 my-5 text-center border-bottom shadow-lg">
                <h1 className="display-4 fw-bold">Learn Tech</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-2">Start your journey with Tech</p>
                </div>
                <div className="container px-5">
                    <img src={heroImg} className="img-fluid mb-4" alt="Presentation" width="600" height="400" loading="lazy" />
                </div>
            </div>
        </div>
            {/* first */}
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={heroImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second */}
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={heroImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials />
            <Pricing />
        </>
    )
}

export default Home
