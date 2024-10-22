
import {
    HiHome,
    HiMagnifyingGlass,
    HiPlus,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";

import logo from './../assets/images/disney.png';
import HeaderItem from "./HeaderItem.jsx";

function Header() {

    const menu = [
        {
            name: 'Home',
            Icon: HiHome
        },
        {
            name: 'Search',
            Icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            Icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            Icon: HiStar
        },
        {
            name: 'MOVIES',
            Icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            Icon: HiTv
        }
    ]

    return (
        <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-8">
                <img src={logo} alt="logo" className='w-[80px] md:w-[115px] object-cover'/>
                {menu.map((item) => (
                    <HeaderItem {...item} key={item.name}/>
                ))}
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                 className='w-[40px] rounded-full'/>
        </div>
    )
}

export default Header;