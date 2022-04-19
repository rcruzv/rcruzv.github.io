import * as React from 'react'
import { Link } from 'gatsby'
import * as H from './header.module.styl'

const Header = () => (
    <header className={H.header}>
		<div className={H.container}>
			<h1 className={H.titulo}>
				<Link to="/">Alurinha</Link>
			</h1>

			<nav className={H.nav}>
				<Link className={H.navLink} to="/">Home</Link>
				<Link className={H.navLink} to="/courses">Cursos</Link>
				<Link className={H.navLink} to="/about">Sobre nós</Link>
				<Link className={H.navLink} to="/blog">Blog</Link>
				<Link className={H.navLink} to="/contact">Contato</Link>
				<Link className={`${H.navLink} ${H.navLinkApp}`} to="/">Nosso APP</Link>
			</nav>
		</div>
	</header>
)
export default Header
