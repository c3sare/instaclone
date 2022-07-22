import "../styles/Header.css";
import logo from '../images/logo.png';
import {BsSearch} from 'react-icons/bs';
import {TiDelete} from 'react-icons/ti';
import {GrHomeRounded} from 'react-icons/gr';
import {RiSendPlaneFill} from 'react-icons/ri';
import {useRef, useState} from 'react';
import {BiBookmark, BiMessageSquareAdd} from 'react-icons/bi';
import {FaRegCompass} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {MdBrightness5} from 'react-icons/md';
import {TbSwitch3} from 'react-icons/tb';

const Header = () => {
    const [logged, setLogged] = useState<boolean>(false);
    const search = useRef<HTMLInputElement>(null);
    const placeholder = useRef<HTMLDivElement>(null);
    const deleteButton = useRef<HTMLDivElement>(null);
    const searchResults = useRef<HTMLDivElement>(null);
    const profileMenu = useRef<HTMLDivElement>(null);
    const escapeDiv = useRef<HTMLDivElement>(null);
    const notify = useRef<HTMLDivElement>(null);

    return (
        <header>
        <div className="container">
          <a href="/">
            <img src={logo} alt="Logo"/>
          </a>
          <div className="search">
            <input
              onFocus={() => {
                placeholder.current!.style.visibility = 'hidden';
                deleteButton.current!.style.display = 'block'
                searchResults.current!.classList.add("show");
              }}
              onBlur={(e) => {
                placeholder.current!.style.visibility = 'visible';
                setTimeout(() => deleteButton.current!.style.display = 'none', 250);
                searchResults.current!.classList.remove("show");
              }}
              ref={search} type="text" placeholder="Szukaj"/>
            <div ref={placeholder} className="placeholder" onClick={() => search.current?.focus()}>
              <BsSearch/>
            </div>
            <div ref={deleteButton} className="deleteSearch" onClick={() => {
              search.current!.value = '';
              search.current?.blur();
              deleteButton.current!.style.display = 'none'
            }}>
              <TiDelete/>
            </div>
            <div className="searchResults" ref={searchResults}>
              <div className="arrow"/>
              <div className="content">

              </div>
            </div>
          </div>
          {logged ? <div className="navigation">
            <a href="/">
              <GrHomeRounded/>
            </a>
            <a href="/">
              <RiSendPlaneFill/>
                <span className="badge">
                0
                </span>
            </a>
            <a href="/">
              <BiMessageSquareAdd/>
            </a>
            <a href="/">
              <FaRegCompass/>
            </a>
            <span className="button" onClick={(e) => {
                notify.current!.classList.toggle("show");
                escapeDiv.current!.classList.add("show");
            }}>
              <AiOutlineHeart/>
              <div className="notifications" ref={notify}>
                <div className="content">
                </div>
                <div className="arrow"/>
              </div>
            </span>
            <span className="button" onClick={(e) => {
                profileMenu.current!.classList.toggle("show");
                escapeDiv.current!.classList.add("show");
            }}>
              <CgProfile/>
              <div className="profileMenu" ref={profileMenu}>
                <div className="content">
                  <a href="/"><CgProfile/> Profil</a>
                  <a href="/"><BiBookmark/> Zapisane</a>
                  <a href="/"><MdBrightness5/> Ustawienia</a>
                  <a href="/"><TbSwitch3/> Przełącz</a>
                  <div className="stop"/>
                  <a href="/">Wyloguj się</a>
                </div>
                <div className="arrow"/>
              </div>
            </span>
          </div>
          :
          <div className="login">
            <a className="buttonBackground" href="/">Zaloguj się</a>
            <a className="button" href="/">Zarejestruj się</a>
          </div>  
        }
        </div>
        <div className="escape" ref={escapeDiv} onClick={() => {
            profileMenu.current!.classList.remove("show");
            escapeDiv.current!.classList.remove("show");
            notify.current!.classList.remove("show");
        }}/>
      </header>
    )
}

export default Header;