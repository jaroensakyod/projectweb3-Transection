import { HiMenuAlt4} from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';


const Navbar = () => {
          return (
          <nav className="w-full flex md:justify-center justify-between items-center p-4">
                    <div className="md:flex-[0.5] flex-initial justify-between items-center">
                              <img src={logo} alt="logo" className="w-32 cursor-pointer" />
                    </div>
                    <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial"
          </nav>
            );
}
export default Navbar;