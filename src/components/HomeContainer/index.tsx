import { Container } from './styles';

type Props = {
    children: JSX.Element
}

function HomeContainer({ children }: Props) {
    return (
        <Container>
            { children }
        </Container>
    );
}

export default HomeContainer;
