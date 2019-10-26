import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';
import { signOut } from 'store/modules/auth/actions';
import { Container, Content, Profile, LogoutButton } from './styles';

export default function Header() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/dashboard">
                        <img src={logo} alt="MeetApp" />
                    </Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>

                        <LogoutButton onClick={handleSignOut}>
                            Sair
                        </LogoutButton>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
