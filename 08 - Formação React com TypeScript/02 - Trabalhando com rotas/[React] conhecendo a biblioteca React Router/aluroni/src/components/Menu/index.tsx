import { ReactComponent as Logo } from 'assets/img/logo-aluroni.svg';
import style from './Menu.module.scss';

const Menu = () => {
    const rotas = [{
        label: 'Inicio',
        to: '/'
    }, {
        label: 'Cardápio',
        to: '/cardapio'
    }, {
        label: 'Inicio',
        to: '/inicio'
    }];

    return(
        <nav className={style.menu}>
            <Logo />
            <ul className={style.menu__list}>
                {
                    rotas.map((rota, index) => {
                        return (<li key={index} className={style.menu__link}>
                            <a href={rota.to}>{rota.label}</a>
                        </li>);
                    })
                }
            </ul>
        </nav>
    );
};

export default Menu;