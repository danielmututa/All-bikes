import aboutimgae from "../images/motorcycle-showcase-faded-frame.jpg"
import img1 from "../images/bmw-is-working-on-an-electric-boxer-motorcycle.webp"
import bm150one from "../images/150-bm--one.jpg"
import imgdust from "../images/why_we_race_hero.jpg"
import bm150 from "../images/dirtbike--o.jpg"
import lastimage from "../images/oneoooo.webp"
import Aboutlast from "./Aboutlast"

const About = () => {
    return ( 
     
          <div className="about--container">

            
               <div className="about-image">

                  <div className="image--containertooimage">
                  <img loading="lazy" src={aboutimgae} alt="" className="too-image" />
                <div className="background--too--image">
                <h2>About Speedbikeszim.com</h2>
                </div>
                  </div>
                
                <div className="text--container">
                  <div className="one-about">
                   <span className="line"></span> 
            <h2>2004-Speedbike</h2>
                  </div>
                  <div className="two-about">
                    <p> The Ducati Panigale V4R is not just about looks; it also delivers performance with a top speed of 199 mph (320 km/h). Its 998 cc V4 engine produces approximately 221 hp, making it one of the most powerful bikes on the market. Combining Italian craftsmanship with cutting-edge technology, this motorcycle offers an exhilarating ride that appeals to both track enthusiasts and street riders.</p>
                 
                  </div>
                </div>

               <div className="two--images">
                <img loading="lazy" className="motor-bike" src={img1} alt="" />
                <img loading="lazy" className="motor-bike" src={imgdust} alt="" />
               </div>


               <div className="text--container">
                  <div className="one-about">
                   <span className="line"></span> 
            <h2>2016 BM 150</h2>
                  </div>
                  <div className="two-about">
                 <p> In 2016, the 2016 BM 150 made history in Zimbabwe by achieving 200 national records, including a top speed of 350 km/h - a groundbreaking first for 2016 BM 150 in the country. Its engine technology was based on the BMW M1B54 (149cc) of the BMW G 310 R and G 310 GS, which was modified for Hydrogen Fuel Cell. After the record-breaking runs, the BM 150 was retired to the Zimbabwe Motorsport Museum. However, it was revived in 2023 for the prestigious Zimbabwe Grand Prix in Harare. A team of experts worked tirelessly for six months to ensure the vehicle was once again ready to compete in the National Hillclimb Championship. With its remarkable achievements, the BM 150 cemented its place in Zimbabwean motorsport history.</p>
                  </div>
                </div>

                <div className="two--images">
                <img loading="lazy" className="motor-bike" src={bm150} alt="" />
                <img loading="lazy" className="motor-bike" src={bm150one} alt="" />
               
               </div>

                  <div className="last--image">
                    <img loading="lazy" className="gold-image" src={lastimage} alt="" />
                  </div>
               </div>
                  
               <Aboutlast/>
              
          </div>

     );
}
 
export default About;