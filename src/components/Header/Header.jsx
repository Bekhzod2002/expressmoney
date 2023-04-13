import {AiOutlineMenu} from 'react-icons/ai';
import {BiUser} from 'react-icons/bi';
import expressmoney from '../../Assets/images/Expressmoney.png';
import user from '../../Assets/images/Group 28.png';
import './header.scss';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div className="header__container">
                <div className="menuicon">
                    <AiOutlineMenu/>
                </div>
                <div className="logoimg">
                    <img src={expressmoney} alt="Expressmoney" />
                </div>
                <div className='menu'>
                    <div className="menulinks">
                        <a className='item' ><Link>Как получить</Link></a>
                        <a className='item'><Link>Как погасить</Link></a> 
                        <a className='item'><Link>Программа лояльности</Link></a>
                        <a className='item'><Link>О компании</Link></a>
                        <a className='item'><Link>F.A.Q</Link></a>
                    </div>
                    <div className='contact__us'>
                        <p className='phonenumber'>8 800 700 91 15</p>
                        <hr className='line' />
                        <p className='freecall'>Звонок по РФ бесплатный</p>
                    </div>
                </div>

                <div className="log_in">
                    <img src={user} alt="user" />
                    <p>Войти</p>
                </div>
            </div>
        </div>
    )
}

export default Header