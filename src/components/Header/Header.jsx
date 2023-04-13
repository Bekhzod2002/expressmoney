import {AiOutlineMenu} from 'react-icons/ai';
import {BiUser} from 'react-icons/bi';
import expressmoney from '../../Assets/images/Expressmoney.png';
import './header.scss';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div className="header_container">
                <div className="menuicon">
                    <AiOutlineMenu/>
                </div>
                <div className="logoimg">
                    <img src={expressmoney} alt="Expressmoney" />
                </div>
                <div className="menu">
                    <a><Link>Как получить</Link></a>
                    <a><Link>Как погасить</Link></a> 
                    <a><Link>Программа лояльности</Link></a>
                    <a><Link>О компании</Link></a>
                    <a><Link>F.A.Q</Link></a>
                </div>
                <div>
                    <p>8 800 700 91 15</p>
                    <hr />
                    <p>Звонок по РФ бесплатный</p>
                </div>
                <div className="log_in">
                    <BiUser/>
                    <p>Войти</p>
                </div>
            </div>
        </div>
    )
}

export default Header