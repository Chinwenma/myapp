import animation3 from '../images/animation3.gif';
export default  function Navbar(){
    return(
        <div className='flex bg-slate-400 h[100px]'>
            <img src={animation3} alt=""  className='flex flex-col items-start ml-4 mt-4 mb-4 hover:cursor-pointer ' />
        </div>
    )
}