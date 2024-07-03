import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-custom mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/" legacyBehavior>
            <a>WISE SQooL</a>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-gray-300 hover:text-white">홈</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-gray-300 hover:text-white">서비스소개</a>
          </Link>
          <Link href="/docs" legacyBehavior>
            <a className="text-gray-300 hover:text-white">학습안내서</a>
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white"><FontAwesomeIcon icon={faBars} className="mr-2" /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;