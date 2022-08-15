
import { ParallaxProvider, Parallax, ParallaxBanner } from "react-scroll-parallax"
const clones = [
  { title: "Instagram", description: "Some text info about it", link: "google.com", image: "", }
]

export default function Clones() {
  return (
    <ParallaxProvider>
      <div>
        <div className="clones">
          <section >
            <div className="box">
             
              <Parallax
                translateX={['200px', '-200px']}
                easing="easeOutQuad"
              >
                <h2> Awesome parralax effect</h2>
              </Parallax>
              <div className="container">
                <div className="imgBx">
                  <ParallaxBanner
                    layers={[
                      { image: 'gifs/coded.png', speed: -20 },
                      {
                        speed: -15,
                      },
                      { image: '/static/banner-foreground.png', speed: -10 },
                    ]}
                    className="aspect-[2/1]"
                  />
                </div>
                <Parallax
                  translateY={['-200px']}
                  easing="easeOutQuad"
                  className="content"
                >
                <div >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci cum, odit sunt possimus aperiam eligendi reprehenderit magnam cumque illo blanditiis,
                    numquam porro praesentium? Accusantium, enim perferendis. Delectus doloribus incidunt fugit?

                  </p>
                </div>
                </Parallax>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ParallaxProvider>
  )
}
