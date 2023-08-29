import { useState, useEffect } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { useProfile, useTitle } from '../../hooks/title';
import { sendLogin } from '../../utils/auth';

// Components
import Button from '../../components/buttons/Button';
import { Input } from '../../components/form';
import { OverlayLoading } from '../../components/overlay';
import { getUserOwnProfile } from '../../utils/user';

const Login = () => {
  window.history.pushState({}, null, '/login');
  useTitle('Masuk');

  const initialState = { email: '', password: '' };
  const { setProfile } = useProfile();
  const [error, setError] = useOutletContext();
  const [inputData, setInputData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const inputHandler = (e, key) => {
    setInputData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  // Submit process
  const submitHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);
    sendLogin(inputData)
      .then((data) => {
        const { token } = data;
        // Reset state
        // setError({});
        setInputData(initialState);

        // Store token to State && Local Storage
        localStorage.setItem('user', JSON.stringify({ token }));

        // Get user data
        getUserOwnProfile()
          .then((data) => {
            setProfile({ ...data });
            window.location.replace('/');
          })
          .catch((err) => console.log(err));
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
    if (error.status == 400) setError({ status: '', mesg: '' });
  }, []);

  return (
    <>
      <div className='mt-6 divider'></div>
      <h1 className='mt-4 text-xl'>Masuk</h1>
      {error.status &&
        (error.status === 400 ? (
          <div className='mt-2 mb-3 text-danger-main capitalize w-max max-w-full'>
            {error.msg}
          </div>
        ) : (
          <div className='mt-2 mb-4 py-2 px-4 bg-green-100 text-green-600 rounded-md w-max max-w-full'>
            {error.msg}
          </div>
        ))}
      <form
        onSubmit={submitHandler}
        className='flex flex-col gap-3 mt-1.5'
        method='POST'
      >
        <div>
          <Input
            onChange={(e) => inputHandler(e, 'email')}
            label='Email'
            type='email'
            value={inputData.email}
            color='primary'
            placeholder='Masukkan email'
            required
          />
        </div>
        <section className='flex flex-col w-full'>
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
        </section>

        <section className='mt-2 w-full'>
          <Button>Masuk</Button>
        </section>
      </form>
      <div className='my-4 divider'></div>
      <div className='mt-2.5 flex flex-col gap-2 text-center'>
        <div className='text-gray-dark'>Belum mempunyai akun?</div>
        <Link to='/register'>
          <Button color='secondary'>Daftar</Button>
        </Link>
      </div>
      <OverlayLoading loadingState={isLoading} />
    </>
  );
};

export default Login;
