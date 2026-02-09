import "./Nav.css"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div className='iconesNav'>
                <AccountCircleOutlinedIcon fontSize="large" />
                <Link to="/SearchPage">
                    <SearchOutlinedIcon fontSize="large" />
                </Link>
            </div>
            <div className='linksNav'>
                <ul className='linksNavUl'>
                    <li className='linksNavItem'>
                        <Link to="/about-us">درباره ما</Link>
                    </li>
                    <li className='linksNavItem'>
                        <Link to="/pages">
                            <KeyboardArrowDownIcon /> صفحات
                        </Link>
                    </li>
                    <li className='linksNavItem'>
                        <Link to="/installment">خرید اقساطی</Link>
                    </li>
                    <li className='linksNavItem'>
                        <KeyboardArrowDownIcon /> دسته بندی
                        <div className='Subcategorybox'>
                            <div className='Subcategory'>
                                <ul className='StitleALINKS'>
                                    <Link className='SATitle'>کنسول ها</Link>
                                    <ul className='SLinks'>
                                        <li>ps4</li>
                                        <li>ps5</li>
                                        <li>ps5 pro</li>
                                        <li>XBOX SERIES S</li>
                                        <li>Xbox Series X</li>
                                    </ul>
                                </ul>
                                <ul className='StitleALINKS'>
                                    <Link className='SATitle'>دسته ها</Link>
                                    <ul className='SLinks'>
                                        <li>HR-71 دسته بازی</li>
                                        <li>ps5 دسته بازی</li>
                                        <li>XBOX دسته بازی</li>
                                        <li>p4 دسته بازی</li>
                                        <li>p4 دسته بازی</li>
                                    </ul>
                                </ul>
                                <ul className='StitleALINKS'>
                                    <Link className='SATitle'>بازی ها</Link>
                                    <ul className='SLinks'>
                                        <li>بازی فیفا 2023</li>
                                        <li>Elden Ring</li>
                                        <li>God of War سری</li>
                                        <li>Black Myth: Wukong</li>
                                        <li>Assassin's Creed سری</li>
                                    </ul>
                                </ul>
                                <ul className='StitleALINKS'>
                                    <Link className='SATitle'>فانتزی ها</Link>
                                    <ul className='SLinks'>
                                        <li>تابلو</li>
                                        <li>ماگ</li>
                                        <li>انواع چراغ</li>
                                        <li>عروسک</li>
                                        <li>عروسک</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='logoNav'>
                <Link to="/"><img src="../public/logo/logo.png" alt="" /></Link>
            </div>
        </nav>
    );
}

export default Nav;
