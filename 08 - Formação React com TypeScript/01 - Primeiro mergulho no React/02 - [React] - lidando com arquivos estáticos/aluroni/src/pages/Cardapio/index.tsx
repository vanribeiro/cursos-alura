import style from './Cardapio.module.scss';
import { ReactComponent as Logo} from 'assets/img/logo-aluroni.svg';

const Cardapio = () => {
    return (
        <main className={style.menu}>
            <Logo />
        </main>
    )
}

export default Cardapio;