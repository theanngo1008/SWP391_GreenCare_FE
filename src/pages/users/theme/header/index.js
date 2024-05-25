import { memo, useState } from "react";
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineMenu, AiOutlinePhone, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BiLogoMessenger, BiLogoYoutube, BiPhone, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from './logoHeader.jpg';
import logo1 from './logo1.webp'
import { ROUTERS } from "utils/router";
import Login from 'components/Login'
const Header = () => {
  const [seen, setSeen] = useState(false)

  function togglePop() {
    setSeen(!seen);
  };

  const [isShowCategories, setShowCategories] = useState(true);
  const [isShowHumberger, setShowHumberger] = useState(false);
  const [menus] = useState([
    {
      name: "HOME",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "JEWELRY",
      path: ROUTERS.USER.JEWELRY,
    },
    {
      name: "MENS",
      path: ROUTERS.USER.MENS,
      isShowSubmenu: false,
      child: [
        {
          name: "Ring",
          path: ROUTERS.USER.PROFILE,
        },
        {
          name: "BraceLet",
          path: "",
        },
        {
          name: "NeckLace",
          path: "",
        },
      ],
    },
    {
      name: "WOMENS",
      path: ROUTERS.USER.WOMENS,
      isShowSubmenu: false,
      child: [
        {
          name: "Ring",
          path: "",
        },
        {
          name: "BraceLet",
          path: "",
        },
        {
          name: "NeckLace",
          path: "",
        },
      ],
    },
    {
      name: "JEWELRY PROCESSING",
      path: ROUTERS.USER.PROCESSING,
    },

  ])
  // Hàm định dạng số thành giá tiền USD
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <>
      <div className={`humberger_menu_overlay${isShowHumberger ? " active" : ""}`}
        onClick={() => setShowHumberger(false)}
      />
      <div
        className={`humberger_menu_wrapper${isShowHumberger ? " show" : ""}`}
      >
        <div className="header_logo">
          <h1>LILILA Shop</h1>
        </div>
        <div className="humberger_menu_cart">
          <ul>
            <li>
              <Link to={""}>
                <AiOutlineShoppingCart /><span>1</span>
              </Link>
            </li>
          </ul>
          <div className="header_cart_price">
            Cart:<span>{formatPrice(100)}</span>
          </div>
        </div>
        <div className="humberger_menu_widget">
          <div className="header_top_right_auth">
            <Link to={""}>
              <BiUser /> Login
            </Link>
          </div>
        </div>
        <div className="humberger_menu_nav1">
          <ul>
            <li>
              <Link to={""}>Account Information </Link>
            </li>
          </ul>
        </div>
        <div className="humberger_menu_nav">
          <ul>
            <li>
              <Link to={""}>Contact Us </Link>
            </li>
          </ul>
        </div>
        <div className="header_top_right_social">
          <Link to={"https://www.facebook.com/profile.php?id=61560052164888"}>
            <AiOutlineFacebook />
          </Link>
          <Link to={""}>
            <AiOutlineInstagram />
          </Link>
          <Link to={""}>
            <AiOutlineLinkedin />
          </Link>
          <Link to={""}>
            <BiLogoYoutube />
          </Link>
          <Link to={"https://www.facebook.com/messages/t/325097017352199"} className="icon">
            <BiLogoMessenger />
          </Link>

        </div>
        <div className="humberger_menu_contact">
          <ul>
            <li>
              <i className="fa fa-envelope">jewelryshop@gmail.com</i>
            </li>
            <li>free shipping from {formatPrice(200)}</li>
          </ul>
        </div>
      </div>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left"  >
              <img src={logo} alt="Logo" className="logo" />
              <ul>
                <li className="logo11">
                  <img src={logo1} alt="Logo1" className="logo1" />
                  Showroom System
                </li>
                <li>
                  <AiOutlineMail />
                  Jewelryproduction@gmail.com
                </li>
                <li>
                  Address:20/2 Street 904, District 9, Ho Chi Minh City
                </li>
              </ul>
            </div>
            <div className="col-6 header_top_right" >
              <ul>
                <li>
                  <Link to={"https://www.facebook.com/profile.php?id=61560052164888"} className="icon">
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={"https://www.facebook.com/messages/t/325097017352199"} className="icon">
                    <BiLogoMessenger />
                  </Link>
                </li>
                <li>
                  <Link to={""} className="icon">
                    <BiPhone />
                  </Link>
                </li>
                <li>
                  <Link to={""} className="icon">
                    <AiOutlineShoppingCart />
                  </Link>
                </li>
                <li>
                  <Link to={""} className="icon">
                    <AiOutlineUser />
                  </Link>

                  <div>
                    <button className="loginButton" onClick={togglePop}>Login</button>
                    {seen ? <Login toggle={togglePop} /> : null}
                  </div>


                  <span className="Login11">/Register</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="color_header">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="header_logo">
                <h1>LILiLA SHOP</h1>
              </div>
            </div>
            <div className="col-xl-6">
              <nav className="header_menu">
                <ul>
                  {
                    menus?.map((menu, menuKey) => (
                      <li key={menuKey} className={menuKey === 0 ? "header_menu1" : ""} >
                        <Link to={menu?.path}>{menu?.name}</Link>
                        {
                          menu.child && (
                            <ul className="header_menu_dropdown">
                              {menu.child.map((childItem, childKey) => (
                                <li key={`${menuKey}-${childKey}`}>
                                  <Link to={childItem.path}>{childItem.name}</Link>
                                </li>
                              ))}
                            </ul>
                          )
                        }
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header_cart">
                <div className="header_cart_price">
                  <span>{formatPrice(1000)}</span>
                </div>
                <ul>
                  <li>
                    <Link to="#">
                      <AiOutlineShoppingCart /> <span className="sizecart">5</span>
                    </Link>
                  </li>
                </ul>
                <div className="listmenu">
                  <AiOutlineMenu
                    onClick={() => setShowHumberger(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero_categories_container">
          <div className="col-lg-3 hero_categories">
            <div className="hero_categories_all" onClick={() => setShowCategories(!isShowCategories)} >

              <AiOutlineMenu />
              List Jewelry
            </div>

            <ul className={isShowCategories ? "" : "hidden"}>
              <li>
                <Link to={"#"}>Ring</Link>
              </li>
              <li>
                <Link to={"#"}>BraceLet</Link>
              </li>
              <li>
                <Link to={"#"}>NeckLace</Link>
              </li>

            </ul>
          </div>
          <div className="col-lg-9 hero_search_container">
            <div className="hero_search">
              <div className="hero_search_form">
                <form>
                  <input type="" name="" placeholder="What are you looking for?" />
                  <button type="submit">Search</button>
                </form>
              </div>
              <div className="hero_search_phone">
                <div className="hero_search_phone_icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero_search_phone_text">
                  <p> 0363433416</p>
                  <span>support 24/7</span>
                </div>
              </div>
            </div>
            <div className="hero_item">
              <div className="hero_text">
                <span>LiLiLa Shop</span>
                <h2>
                  Helps you <br />
                  become noble</h2>
                <p>Fast Delivery</p>
                <Link to="" className="primary-btn">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);