import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Main } from './Container.styled';
import { Header } from 'components/Header/Header';
import 'react-toastify/dist/ReactToastify.css';

export const Container = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
