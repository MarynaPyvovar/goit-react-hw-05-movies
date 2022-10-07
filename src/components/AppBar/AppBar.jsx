import { Navigation, MainNavLink } from './AppBarStyled';

export const AppBar = () => {
  return <header>
      <Navigation>
        <MainNavLink to='/'>Home</MainNavLink>
        <MainNavLink to='/movies'>Movies</MainNavLink>
      </Navigation>
    </header>
}