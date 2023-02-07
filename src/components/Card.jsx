import dev from '../images/dev.png'
export default function Card() {
    return (

        
        <div className='w-[175px] font-popins mt-6 bg-slate-600'>
            <img src={dev} alt=""  className='w[100%] rounded-full border-2'/>
            <div>
                <span>5.0</span>
                <span>(6) .</span>
                <span>
                    USA
                </span>
            </div>
            <p>I am Coming Home</p>
            <p>
               From $136 / person 
            </p>
        </div>
    )
}