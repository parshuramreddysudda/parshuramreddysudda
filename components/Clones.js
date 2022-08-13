
import dynamic from 'next/dynamic';
const Jarallax = dynamic(() => import('./Jarallax'), { ssr: false });
import JarallaxImage from './JarallaxImage';
const clones = [
  { title: "Instagram", description: "Some text info about it", link: "google.com", image: "", }
]

export default function Clones() {
  return (
    <div>
      <div className="clones">
        <section >
          <div className="box">
            <h2 data-jarallax-element="0 -200"> Awesome parralax effect</h2>
            <div className="container">
              <div className="imgBx">

                <Jarallax speed={0.2}>
                  <JarallaxImage src="gifs/coded.png" alt="" />
                </Jarallax>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci cum, odit sunt possimus aperiam eligendi reprehenderit magnam cumque illo blanditiis,
                  numquam porro praesentium? Accusantium, enim perferendis. Delectus doloribus incidunt fugit?

                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
