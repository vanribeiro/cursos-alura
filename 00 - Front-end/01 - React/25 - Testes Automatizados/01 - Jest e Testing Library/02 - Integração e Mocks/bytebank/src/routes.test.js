import { render, screen } from '@testing-library/react';
import App from './paginas/Principal/App';
import Cartoes from './componentes/Cartoes';
import Servicos from './componentes/Servicos';
import Investimentos from './componentes/Investimentos';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes';

describe('Routes', () => {
    it('should render the main route', () => {
        // Alternative render(<App />, { wrapper: BrowserRouter });
        render(<BrowserRouter><App /></BrowserRouter>);
        const user = screen.getByText('Olá, Joana :)!');
        expect(user).toBeInTheDocument();
    });

    it('should render the /cartoes route', () => {
        const route = '/cartoes';

        render(
            <MemoryRouter initialEntries={[route]}>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route path='cartoes' element={<Cartoes />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        const myCards = screen.getByText('Meus cartões');
        expect(myCards).toBeInTheDocument();
    });

    it('should render /servicos route', () => {
        const route = '/servicos';
        render(
            <MemoryRouter initialEntries={[route]}>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route path='servicos' element={<Servicos />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        const serviceOne = screen.getByText('Empréstimo');
        const serviceTwo = screen.getByText('Meus cartões');
        const serviceThree = screen.getByText('Doações');
        const serviceFour = screen.getByText('Pix');
        const serviceFive = screen.getByText('Seguros');
        const serviceSix = screen.getByText('Recarga celular');

        expect(serviceOne).toBeInTheDocument();
        expect(serviceTwo).toBeInTheDocument();
        expect(serviceThree).toBeInTheDocument();
        expect(serviceFour).toBeInTheDocument();
        expect(serviceFive).toBeInTheDocument();
        expect(serviceSix).toBeInTheDocument();
    });

    it('should render the /investimentos route', () => {
        const route = '/investimentos';

        render(
            <MemoryRouter initialEntries={[route]}>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route path='investimentos' element={<Investimentos />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        const statitics = screen.getByTestId('investimentos');
        expect(statitics).toBeInTheDocument();
    });

    it('should render the Pagina404 when the route is not found', () => {
        const route = '/not-found-page';

        render(
            <MemoryRouter initialEntries={[route]}>
                <AppRoutes />
            </MemoryRouter>
        );

        const pageNotFound = screen.getByText('Ops! Não encontramos a página');
        expect(pageNotFound).toBeInTheDocument();
    });

});