import { useEffect, useState } from 'react';
import { useProfile } from '../../hooks/title';
import { updatePassword, updateUserProfile } from '../../utils/user';
import Button from '../../components/buttons/Button';
import { Input } from '../../components/form';
import { OverlayLoading } from '../../components/overlay';
import ConstraintLarge from '../../layout/ConstraintLarge';
import { Ava } from '../../assets';
import ModalForm from '../../components/modal/ModalForm';

const ProfilePage = () => {
  // const { username } = useParams();
  const { profile, setProfile } = useProfile();
  const [user, setUser] = useState({});
  const [newPassword, setNewPassword] = useState('');
  const [newConfirmPassword, setNewConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalPasswordOpen, setIsModalPasswordOpen] = useState(false);

  const closeModalPassword = () => setIsModalPasswordOpen(false);
  const onChangeFormHandler = (e, key) =>
    setUser((prev) => ({ ...prev, [key]: e.target.value }));

  const onSumbitProfileHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const data = new FormData();
    console.log(user.profilePict);
    data.append('fullName', user.fullName);
    data.append('username', user.username);
    if (user.phoneNumber) data.append('phoneNumber', user.phoneNumber);
    if (user.imgProfile) data.append('image', user.imgProfile);

    updateUserProfile(data)
      .then(() => {
        user.imgProfile && delete user.imgProfile; // Delete uploaded img profile if any
        setProfile((prev) => ({ ...prev, ...user })); // Set user data to new state
      })
      .catch(({ data }) => console.log(data.message))
      .finally(() => setIsLoading(false));
  };

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
    <div className='pt-20'>
      <ConstraintLarge>
        <h1 className='w-full text-2xl font-bold text-primary text-center'>
          Edit Profil
        </h1>
        <div className='divider my-3'></div>
        <form
          onSubmit={onSumbitProfileHandler}
          method='POST'
          encType='multipart/form-data'
        >
          <div className='mt-3 grid grid-cols-12 gap-4'>
            <div className='col-span-12'>
              <label
                htmlFor='thumbnail'
                className='block text-sm font-medium text-primary'
              >
                Foto Profil
              </label>
              <div className='flex items-end gap-3.5'>
                <img
                  src={user?.profilePict || Ava}
                  alt='profile'
                  // width='80'
                  className='mt-1.5 w-[5rem] h-[5rem] object-cover rounded-full ring-2 ring-primary border-primary'
                />
                <div className='ml-2'>
                  <input
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        profilePict: URL.createObjectURL(e.target.files[0]),
                        imgProfile: e.target.files[0],
                      }))
                    }
                    className='border border-gray-dark rounded overflow-hidden'
                    type='file'
                    id='thumbnail'
                    name='thumbnail'
                    accept='image/*'
                  />
                </div>
              </div>
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

            <div className='col-span-12'>
              <Input
                onChange={(e) => onChangeFormHandler(e, 'username')}
                label='Username'
                value={user?.username || ''}
                placeholder='Masukkan username'
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

            <div className='col-span-12 sm:col-span-6 md:col-span-3'>
              <Button
                type='button'
                onClick={() => setIsModalPasswordOpen(true)}
                color='gray'
              >
                Ganti Password
              </Button>
            </div>

            <div className='col-span-12 sm:col-span-2 sm:col-start-11'>
              <Button>Simpan</Button>
            </div>
          </div>
        </form>

        {/* Edit password dialog (modal) */}
        <ModalForm show={isModalPasswordOpen} title='Ubah kata sandi'>
          <form onSubmit={onSubmitNewPasswordHandler}>
            <div>
              <Input
                onChange={(e) => setNewPassword(e.target.value)}
                label='Kata Sandi Baru'
                value={newPassword}
                color='primary'
                placeholder='Masukkan kata sandi baru'
              />
            </div>
            <div className='mt-2.5'>
              <Input
                onChange={(e) => setNewConfirmPassword(e.target.value)}
                label='Konfirmasi Kata Sandi Baru'
                value={newConfirmPassword}
                color='primary'
                placeholder='Konfirmasi kata sandi baru'
              />
            </div>
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
        </ModalForm>

        <OverlayLoading loadingState={isLoading} />
      </ConstraintLarge>
    </div>
  );
};

export default ProfilePage;
