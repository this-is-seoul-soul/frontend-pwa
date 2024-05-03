/* eslint-disable react-hooks/exhaustive-deps */
import { randomNicknameApi } from 'apis/userApi';
import { BottomButton } from 'components/atoms/buttons/BottomButton';
import { ReissueIconButton } from 'components/atoms/buttons/ReissueIconButton';
import { FormInputText } from 'components/atoms/inputs/FormInputText';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { cls } from 'utils/cls';

interface NicknameProps {
  nickname: string;
}

export const CheckNickname = () => {
  const [randomNickName, setRandomNickName] = useState('');
  const navigation = useAppNavigation();

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      nickname: '',
    },
  });

  const generateRandomNickName = async () => {
    // TODO: 랜덤 닉네임 받아오는 api 연결
    const result = await randomNicknameApi();
    if (result.status === 200) {
      const newNickname = result.data.data.nickname;
      setRandomNickName(newNickname);
      setValue('nickname', newNickname);
      return newNickname;
    }
    return '닉네임 실패';
  };

  const handleStoreNickname = (data: NicknameProps) => {
    console.log(data);
    // TODO: 닉네임 연결하는 api 요청
    const result = true;
    if (result) {
      navigation.navigateToFestiTestLanding();
    }
  };

  useEffect(() => {
    generateRandomNickName();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(handleStoreNickname)}
      className='w-full h-screen px-4 flex flex-col justify-center'
    >
      <div className='pb-64'>
        <div className={cls('w-full font-bold text-2xl pb-12 text-gray-800')}>
          닉네임을 정해주세요!
        </div>
        <div className='flex'>
          <FormInputText
            name='nickname'
            control={control}
            placeholder={randomNickName}
            rules={{
              required: { value: true, message: '닉네임을 입력해주세요!' },
              maxLength: { value: 8, message: '8자 이내로 작성해주세요!' },
            }}
          />
          <div className={cls('ml-4 w-14')}>
            <ReissueIconButton onClick={generateRandomNickName} />
          </div>
        </div>
      </div>
      <BottomButton title='완료' type='submit' />
    </form>
  );
};
