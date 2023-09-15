import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { updatePassword } from '../../utils/user';
import { useProfile } from '../../hooks/title';
import Button from '../../components/buttons/Button';
import { Input } from '../../components/form';
import { OverlayLoading } from '../../components/overlay';
import ConstraintLarge from '../../layout/ConstraintLarge';

const ProfilePage = () => {
  // const { username } = useParams();
  const { profile, setProfile } = useProfile();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalPasswordOpen, setIsModalPasswordOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const closeModalPassword = () => setIsModalPasswordOpen(false);
  const onChangeFormHandler = (e, key) =>
    setUser((prev) => ({ ...prev, [key]: e.target.value }));

  // const onSumbitProfileHandler = async (e) => {
  //   e.preventDefault();

  //   setIsLoading(true);
  //   const data = new FormData();
  //   data.append('fullName', user.fullName);
  //   data.append('id_division', parseInt(user.id_division));
  //   if (user.generation) data.append('generation', user.generation);
  //   if (user.phoneNumber) data.append('phoneNumber', user.phoneNumber);
  //   if (user.imgProfile) data.append('image', user.imgProfile);

  //   updateUserProfile(data)
  //     .then(() => {
  //       user.imgProfile && delete user.imgProfile; // Delete uploaded img profile if any
  //       setProfile((prev) => ({ ...prev, ...user })); // Set user data to new state
  //     })
  //     .catch(({ data }) => console.log(data.message))
  //     .finally(() => setIsLoading(false));
  // };

  const onSubmitNewPasswordHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);
    updatePassword(newPassword)
      .then(() => setNewPassword(''))
      .catch(({ data }) => console.log(data.message))
      .finally(() => {
        setIsModalPasswordOpen(false);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setUser({ ...profile });
    if (profile.fullName) setIsLoading(false);
  }, [profile]);

  return (
    <ConstraintLarge>
      <h1 className='text-xl'>Ubah Profil</h1>
      <form
        // onSubmit={onSumbitProfileHandler}
        method='POST'
        encType='multipart/form-data'
      >
        <div className='mt-3 grid grid-cols-12 gap-3'>
          <div className='col-span-12'>
            <label
              htmlFor='thumbnail'
              className='block text-sm font-medium text-primary'
            >
              Foto Profil
            </label>
            {/* <div className='flex items-end gap-3.5'>
              <img
                src={user?.photoProfile || Ava}
                alt='profile'
                // width='80'
                className='mt-1.5 w-[5rem] rounded-md ring-4 ring-white border-white'
              />
              <div>
                <input
                  onChange={(e) =>
                    setUser((prev) => ({
                      ...prev,
                      photoProfile: URL.createObjectURL(e.target.files[0]),
                      imgProfile: e.target.files[0],
                    }))
                  }
                  type='file'
                  id='thumbnail'
                  name='thumbnail'
                  accept='image/*'
                />
              </div>
            </div> */}
          </div>

          <div className='col-span-12'>
            <Input
              onChange={(e) => onChangeFormHandler(e, 'fullName')}
              label='Nama Lengkap'
              value={user?.fullName || ''}
              placeholder='Masukkan nama lengkap'
              required
            />
          </div>

          <div className='col-span-12 sm:col-span-6'>
            <Input
              onChange={(e) => onChangeFormHandler(e, 'email')}
              label='Email'
              type='email'
              value={user?.email || ''}
              placeholder='Masukkan alamat email'
              required
            />
          </div>

          <div className='col-span-12 sm:col-span-6'>
            <Input
              onChange={(e) => onChangeFormHandler(e, 'phoneNumber')}
              label='Nomor Telepon'
              value={user?.phoneNumber || ''}
              placeholder='Masukkan nomor telepon'
            />
          </div>

          <div className='hidden sm:block sm:col-span-full'></div>

          <div className='mt-6 col-span-12 grid grid-cols-12 gap-3'>
            <div className='col-span-12 sm:col-span-6 md:col-span-3'>
              <Button onClick={() => setIsModalPasswordOpen(true)} color='gray'>
                Ganti Password
              </Button>
            </div>

            {/* Submit & Back button */}
            <div className='col-span-12 sm:col-span-2 sm:col-start-9'>
              <Link to={'/'}>
                <Button type='button' color='gray'>
                  Kembali
                </Button>
              </Link>
            </div>
            <div className='col-span-12 sm:col-span-2 sm:col-start-11'>
              <Button>Simpan</Button>
            </div>
          </div>
        </div>
      </form>

      {/* Edit password dialog (modal) */}
      {/* <ModalForm show={isModalPasswordOpen} title='Ubah kata sandi'>
        <form onSubmit={onSubmitNewPasswordHandler}>
          <Input
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            color='secondary'
            placeholder='Masukkan kata sandi baru'
          />
          <div className='mt-4 flex gap-2'>
            <Button
              type='button'
              onClick={closeModalPassword}
              color='gray'
              size='small'
            >
              Tutup
            </Button>
            <Button size='small'>Simpan</Button>
          </div>
        </form>
      </ModalForm> */}

      <OverlayLoading loadingState={isLoading} />
    </ConstraintLarge>
  );
};

export default ProfilePage;
