import { ParallaxProvider, Parallax, ParallaxBanner } from "react-scroll-parallax";

export default function Clones() {
  return (
    <ParallaxProvider>
      <div className="clones">
        <section>
          <div className="box">
            <Parallax
              className="title"
              y={[-50, 50]}
              tagOuter="figure"
            >
              <h2>Awesome parallax effect</h2>
            </Parallax>
            <div className="container">
              <div className="imgBx">
                <ParallaxBanner
                  layers={[
                    { image: 'gifs/coded.png', speed: -0.1 },
                    { speed: 0.1 },
                    { image: '/static/banner-foreground.png', speed: -0.05 },
                  ]}
                  className="aspect-[2/1]"
                />
              </div>
              <div className="content">
                <Parallax
                  className="description"
                  y={[-200, 20]}
                  tagOuter="div"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci cum, odit sunt possimus aperiam eligendi reprehenderit magnam cumque illo blanditiis,
                    numquam porro praesentium? Accusantium, enim perferendis. Delectus doloribus incidunt fugit?
                  </p>
                </Parallax>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
}
