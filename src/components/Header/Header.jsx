import {AiOutlineMenu} from 'react-icons/ai';
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
                    <Link className='item'>Как получить</Link>                       
                    <Link className='item'>Как погасить</Link>
                    <Link className='item'>Программа лояльности</Link>                       
                    <Link className='item'>О компании</Link>                       
                    <Link className='item'>F.A.Q</Link>                    
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