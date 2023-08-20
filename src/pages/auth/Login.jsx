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
  const navigate = useNavigate();
  useTitle('Masuk');

  const initialState = { email: '', password: '' };
  const { setProfile } = useProfile();
  const [errMessage, setErrMessage] = useOutletContext();
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
        setErrMessage('');
        setInputData(initialState);

        // Store token to State && Local Storage
        localStorage.setItem('user', JSON.stringify({ token }));

        // Get user data
        getUserOwnProfile()
          .then((data) => {
            navigate('/'); // Redirect to home page
            setProfile({ ...data });
          })
          .catch((err) => console.log(err));
      })
      .catch(({ data }) => setErrMessage(`Error - ${data.message}`))
      .finally(() => setIsLoading(false));
  };

  // Remove err msg on first render
  useEffect(() => {
    if (errMessage.includes('Error')) setErrMessage('');
  }, []);

  return (
    <>
      <h1 className='mt-4 text-xl sm:text-2xl'>Masuk</h1>
      {errMessage &&
        (errMessage.includes('Error') ? (
          !errMessage.includes('not verified') && (
            <div className='mt-0.5 mb-1.5 text-danger-main capitalize w-max max-w-full'>
              {errMessage}
            </div>
          )
        ) : (
          <div className='mt-2 mb-4 py-2 px-4 bg-green-100 text-green-600 rounded-md w-max max-w-full'>
            {errMessage}
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
            placeholder='Masukkan email atau username'
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

        <section className='mt-4 w-full'>
          <Button>Masuk</Button>
        </section>
      </form>
      <div className='mt-2.5 text-center'>
        <p className='text-gray-dark'>
          Belum mempunyai akun?
          <span className='ml-1 text-primary underline'>
            <Link to='/register'>Daftar</Link>
          </span>
        </p>
      </div>
      <OverlayLoading loadingState={isLoading} />
    </>
  );
};

export default Login;
