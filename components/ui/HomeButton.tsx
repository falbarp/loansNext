import { useRouter } from 'next/router';

export const HomeButton = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/login');
  };

  return (
    <button onClick={handleButtonClick}>
     Conócelo
    </button>
  );
};
