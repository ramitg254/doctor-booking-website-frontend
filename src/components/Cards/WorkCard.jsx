
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function WorkCard({img,heading,link}) {
    return (
        <div className='py-[30px] px-5'>
            <div className="flex items-center justify-center">
                <img src={img} alt="" />
            </div>
            <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    {heading}
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[700] mt-4 text-center">
                    World-class care for everyone.Our health System offers unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                    to={link}
                    className='w-[44px] h-[44px] group rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
            </div>
        </div>
    )
}

export default WorkCard
