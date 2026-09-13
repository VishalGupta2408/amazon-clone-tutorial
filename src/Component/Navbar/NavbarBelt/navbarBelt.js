import React from 'react';
import './navbarBelt.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarBelt = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const amazonLogo = 'https://pngimg.com/uploads/amazon/amazon_PNG11.png';
    const india = 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg';

    return (
        <div className='navbarBelt'>
            <div className="leftNavBelt">
                <Link to={'/'} className="leftNavBeltLogo" >
                    <img className='amazonLogoNavbar' src={amazonLogo} alt='amazonLogo' />
                    <span className='navbar_inLogo'>.in</span>
                </Link>

                <div className="navbarBeltLocation">
                    <div className="navbarBeltLocationImg">
                        <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{ fontSize: "20px" }} />
                    </div>
                    <div className="navbarBeltLocationPlace">
                        <div className="navbarBeltLocationTop">Delivering to Mumbai 400001</div>
                        <div className="navbarBeltLocationBottom">Update location</div>
                    </div>
                </div>
            </div>
            <div className="navbarBeltSearchBox">
                <div className="navbarBeltSearchDiv">
                    <div className="navbarBeltSearchBoxAll">
                        <div className="navbarBeltSearchBoxAllText">All</div>
                        <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }} />
                    </div>

                    <input type="text" className="navbarBeltInputSearchBox" placeholder="Search Amazon.in" />
                    <Link to={'/products'} className="searchIconNavbarBelt">
                        <SearchIcon className='searchIconNavbarBeltIcon' />
                    </Link>
                </div>
            </div>
            <div className="rightSideNavbarBelt">
                <div className="indianFlagCode">
                    <img src={india} className='indiaFlag' alt='indiaFlag' />
                    <div className="indiaCodeNavbarBelt">EN <ArrowDropDownOutlinedIcon className='indiaCodeNavbarBeltDrp' sx={{ fontSize: "16px" }} /></div>
                </div>

                <div className="helloSignInNavbaeBelt">
                    <div className="helloTopNavbarBelt">Hello, sign in</div>
                    <div className="indiaCodeNavbarBelt">Account & Lists <ArrowDropDownOutlinedIcon className='indiaCodeNavbarBeltDrp' sx={{ fontSize: "16px" }} /></div>
                </div>

                <div className="helloSignInNavbaeBelt">
                    <div className="helloTopNavbarBelt">Returns</div>
                    <div className="indiaCodeNavbarBelt">& Orders</div>
                </div>

                <Link to={'/cart'} className="helloSignInNavbaeBelt">
                    <span className='cartItemNumberNavbarBelt'>{cartItems.length}</span>
                    <div className="helloTopNavbarBelt"><ShoppingCartOutlinedIcon/> <span className='cartTitle'>Cart</span></div>
                </Link>
            </div>
        </div>
    );
};

export default NavbarBelt;
