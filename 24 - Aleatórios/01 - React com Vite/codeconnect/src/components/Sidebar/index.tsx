import LogoSidebar from '../../assets/sidebar-logo.svg';
import InfoIcon from '../../assets/info-icon.svg';
import FeedIcon from '../../assets/feed-icon.svg';
import LogoutIcon from '../../assets/logout-icon.svg';
import ProfileIcon from '../../assets/profile-icon.svg';
import LinkButton from './PublishButton';
import './style.css';

function Sidebar () {
    return (
		<aside className='sidebar'>
			<img src={LogoSidebar} alt="Logo Code Connect" />
			<nav className='sidebar__nav'>
				<ul className='sidebar__nav__ul'>
					<li className='sidebar__nav__li'>
						<LinkButton title='Publicar' modifier='border'/>
					</li>
					<li className='sidebar__nav__li'>
						<a className='sidebar__nav__link' href="#" role="button">
							<img src={FeedIcon} alt="Ícone Feed" />
							<span>Feed</span>
						</a>
					</li>
					<li className='sidebar__nav__li'>
						<a className='sidebar__nav__link' href="#" role="button">
							<img src={ProfileIcon} alt="Ícone Perfil" />
							<span>Perfil</span>
						</a>
					</li>
					<li className='sidebar__nav__li'>
						<a className='sidebar__nav__link' href="#" role="button">
							<img src={InfoIcon} alt="Ícone de Informação" />
							<span>Sobre nós</span>
						</a>
					</li>
					<li className='sidebar__nav__li'>
						<a className='sidebar__nav__link' href="#" role="button">
							<img src={LogoutIcon} alt="Ícone de Sair" />
							<span>Sair</span>
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;