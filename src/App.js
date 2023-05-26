import styled from 'styled-components';
import { BrowserRouter as ReactRouterDomProvider, Routes, Route } from 'react-router-dom';

// components
import Nav from './Nav';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';

const App = () => {
    return (
        <ReactRouterDomProvider>
            <AppStyled className='App'>
                <Nav />
                <Routes>
                    <Route element={<UseMemo />} path="" />
                    <Route element={<UseCallback />} path="/usecallback" />
                </Routes>
            </AppStyled>
        </ReactRouterDomProvider>
    );
}

export default App;

const AppStyled = styled.div`
    margin: 20px;
`;