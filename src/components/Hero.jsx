import grid from '../images/grid.jpg';
export default  function Hero(){
    return(
        <section className='bg-slate-600'>
       
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            <div className ="flex flex-col mb-23 space-y-12 md:w-1/2">
                <h1 className ="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                    Bring Everyone together to Build Better Products
                </h1>
                <p className="max-w-sm text-center text-white md:text-left">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus consequatur perspiciatis, assumenda
                    amet dicta nobis ipsam exercitationem. Nihil incidunt repellat adipisci porro iusto veritatis hic
                    accusamus voluptatem nemo. Eaque, accusamus.
                </p>

            </div>
            <div>
                <img src={grid} alt="" className =" rounded-full md:50% " />
            </div>
        </div>
    </section>
        



    )
}