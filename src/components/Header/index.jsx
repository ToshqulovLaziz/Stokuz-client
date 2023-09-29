import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { RiHeartLine } from "react-icons/ri";
import logo from "../../assets/LOGO.svg";
import UzF from "../../assets/icons/uz.svg";
import RusF from "../../assets/icons/rus.svg";
import "./header.scss";

const Header = () => {
  return (
    <React.Fragment>
      <header className="site-header">
        <div className="container">
          <div className="site-header__wrapper">
            <div className="site-header__start">
              <Link className="site-header__logo" to="/">
                <img src={logo} alt="stok uz logo" />
              </Link>
            </div>
            <div className="site-header__end">
              <button className="site-header__menu" type="button">
                <AiOutlineMenu className="site-header__menu--img" />
              </button>
              <form className="site-header__form--search">
                <label htmlFor="search">
                  <FiSearch className="site-header__form--search--img" />
                </label>
                <input
                  className="site-header__search"
                  id="search"
                  type="search"
                  placeholder="Mahsulot nomini yozing"
                />
              </form>
              <button className="site-header__favorites" type="button">
                <RiHeartLine className="site-header__favorites--img" />
                Sevimlilar
              </button>
              <button className="site-header__cart" type="button">
                <TiShoppingCart className="site-header__cart--img" />
                Savatcha
              </button>
              <button className="site-header__login">Kirish</button>
              <form className="site-header__form--language">
                <select className="site-header__select">
                  <option className="site-header__select--uz" value="Uz">
                    <img src={UzF} alt="Uz" />
                    Uz
                  </option>
                  <option className="site-header__select--oz" value="Oz">
                    <img src={UzF} alt="Uz" />
                    Узб
                  </option>
                  <option className="site-header__select--rus" value="Rus">
                    <img src={RusF} alt="Rus" />
                    Рус
                  </option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
