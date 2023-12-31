/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { useTitle } from '../../hooks/title';
import { sendRegister } from '../../utils/auth';

// Components
import Button from '../../components/buttons/Button';
import { Input } from '../../components/form';
import { OverlayLoading } from '../../components/overlay';

const Register = () => {
  const navigate = useNavigate();
  useTitle('Daftar');

  const initialState = {
    username: '',
    fullName: '',
    email: '',
    password: '',
    id_division: 1,
  };
  const [error, setError] = useOutletContext();
  const [inputData, setInputData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const inputHandler = (e, key) => {
    setInputData((prev) => ({ ...prev, [key]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const id_division = parseInt(inputData.id_division);
    const data = { ...inputData, id_division: id_division };

    setIsLoading(true);
    sendRegister(data)
      .then(() => {
        setInputData(initialState); // Reset state
        // Set message
        setError({
          status: 200,
          msg: 'Berhasil membuat akun, silakan masuk',
        });
        navigate('/login'); // Navigate to /login
      })
      .catch((err) =>
        setError({
          status: err.status,
          msg: err.message,
        })
      )
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setError({ status: '', mesg: '' });
  }, []);

  return (
    <>
      <div className='mt-6 divider'></div>
      <h1 className='mt-4 text-xl'>Daftar</h1>
      {error.status && (
        <div className='mt-2 mb-3 text-danger-main capitalize w-max max-w-full'>
          {error.msg}
        </div>
      )}
      <form onSubmit={submitHandler} className='mt-1.5 flex flex-col gap-3'>
        <div>
          <Input
            onChange={(e) => inputHandler(e, 'fullName')}
            label='Nama'
            value={inputData.fullName}
            color='primary'
            placeholder='Masukkan nama'
            required
          />
        </div>
        <div>
          <Input
            onChange={(e) => inputHandler(e, 'username')}
            label='Username'
            value={inputData.username}
            color='primary'
            placeholder='Masukkan username'
            required
          />
        </div>
        <div>
          <Input
            onChange={(e) => inputHandler(e, 'email')}
            label='Email'
            type='email'
            value={inputData.email}
            color='primary'
            placeholder='Masukkan alamat email'
            required
          />
        </div>
        <div>
          <Input
            onChange={(e) => inputHandler(e, 'password')}
            label='Password'
            type='password'
            value={inputData.password}
            color='primary'
            placeholder='Masukkan password'
            required
          />
        </div>
        <div>
          <Input
            onChange={(e) => inputHandler(e, 'phoneNumber')}
            label='Nomor Telepon'
            type='text'
            value={inputData.phoneNumber}
            color='primary'
            placeholder='Masukkan nomor telepon'
            required
          />
        </div>

        <section className='mt-2 w-full'>
          <Button>Daftar</Button>
        </section>
      </form>
      <div className='my-4 divider'></div>
      <div className='mt-2.5 flex flex-col gap-2 text-center'>
        <div className='text-gray-dark'>Sudah mempunyai akun?</div>
        <Link to='/login'>
          <Button color='secondary'>Masuk</Button>
        </Link>
      </div>

      <OverlayLoading loadingState={isLoading} />
    </>
  );
};

export default Register;
