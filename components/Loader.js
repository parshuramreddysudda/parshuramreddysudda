
export default function Loader() {
    return (
        <section className='loaderSection' >
        <svg>
            <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation={10}/>
                <feColorMatrix values="
                                        1 0 0 0 0
                                        0 1 0 0 0
                                        0 0 1 0 0
                                        0 0 0 20 -10"></feColorMatrix>
            </filter>
        </svg>
            <div className="loader">
                <span className='span1'></span>
                <span className='span2'></span>
                <span className='span3'></span>
                <span className='span4'></span>
                <span className='span5'></span>
                <span className='span6'></span>
                <span className='span7'></span>
                <span className='span8'></span>
                <span className="rotate jpan1 "> </span>
                <span className="rotate jpan2"> </span>
                <span className="rotate jpan3"> </span>
                <span className="rotate jpan4"> </span>
                <span className="rotate jpan5"> </span>
            </div>
            <h2>This is loader</h2>
        </section>
    )
}
