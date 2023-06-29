import React from 'react'

export const Portfolio = () => {
  return (
    <div className='portfolio-container' >
        <div className='intro-container'>
            <div className='portfolio-content'>
                <h1>Explore Our Succesful Projects</h1>
                <p>Below you’ll find some of our projects described. However, there are dozens of apps we’re not allowed to show publicly, according to our clients’ preferences.

Contact us if you want to discover whether we have an experience in building apps like yours!</p>
            </div>
            <div className='portfolio-pic'>
            <img  src="https://teacode.io/wp-content/uploads/2022/10/Phone-and-Laptop-Clay-Mockup-16-e1667245665180-compress.png" alt=""/>
            </div>
        </div>
            <div className='projects-section'>
                <div className='e-commerse'>
                    <img  src="https://teacode.io/wp-content/uploads/2022/08/Phone-and-Laptop-Clay-Mockup-9-600x450.png" />
                    <h2>Beat the Street | Mobile app & a web portal for street games</h2>
                    <h5>Web development</h5>
                </div>
                <div className='social-media'>
                
                    <img src="https://teacode.io/wp-content/uploads/2022/12/voicey-full-600x450.jpg"/>
                    <h2>Voicey | An iOS mobile app for connecting influencers and brands</h2>
                    <h5>Web development</h5>
                </div>
                {/* <div className='company-sites'>
                    
                </div> */}
                <div className='automation'>
                    <img src='https://teacode.io/wp-content/uploads/2023/01/medicor5-600x450.jpg'/>
                    <h2>Medicor | A modern and aesthetic website for a healthcare clinic</h2>
                    <h5>Web development</h5>
                </div>
                <div className='job-seek-web'>
                    <img src='https://teacode.io/wp-content/uploads/2022/10/Web-Moock-Up-04B-600x450.jpg'/>
                    <h2>TBP2 | A modern landing page to promote HR reports as a Service</h2>
                    <h5>Web development</h5>
                </div>
                {/* <div className='hospital-system'>
                    <img />
                </div> */}
                <div className='web-app'>
                    <img src='https://teacode.io/wp-content/uploads/2023/06/PSD-7-1-600x450.png'/>
                    <h2>Meconed | An online platform for medical presentation recording and sharing</h2>
                    <h5>Web development</h5>
                </div>
                <div className='web-app'>
                    <img src='https://teacode.io/wp-content/uploads/2022/06/renoon_miniatura_case-study-compress.jpg'/>
                    <h2>Modern web app for an eco clothing company with sophisticated filters</h2>
                    <h5>Web development</h5>
                </div>
                <div className='presentation'>
                    <img src='https://teacode.io/wp-content/uploads/2022/08/SCENE-2-600x450.png'/>
                    <h2>ClosedWon | An online platform for automatisation outbound marketing campaigns</h2>
                    <h5>Web development</h5>
                </div>
                <div className='presentation'>
                <img src='https://teacode.io/wp-content/uploads/2023/06/deubi-watermarked-1-600x450.jpg'/>
                <h2>Deutsche Bildung | A web app for online loan taking</h2>
                    <h5>Web development</h5>
                </div>
                <div className='presentation'>
                <img src='https://teacode.io/wp-content/uploads/2022/12/hocomo-600x450.png'/>
                <h2>Hocomo | An e-commerce portal with a visual house configurator</h2>
                    <h5>Web development</h5>
                </div>
                </div>

                
            </div>

        
  )
}
