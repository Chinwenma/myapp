import grid from '../images/grid.jpg';
export default  function Hero(){
    return(
        <section className='flex flex-col items-center space-x-0 '>
            <img src={grid} alt="" className='w-[500px]' />
            <h1 className='text-4xl font-bold md:mt-4 '>i will make it</h1>
            <p className='text-2xl font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
        </section>
    )
}