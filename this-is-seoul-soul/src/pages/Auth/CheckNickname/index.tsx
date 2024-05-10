/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { nicknameDuplicateApi, nicknameEditApi, randomNicknameApi } from 'apis/userApi';
import { BottomButton } from 'components/atoms/buttons/BottomButton';
import { ReissueIconButton } from 'components/atoms/buttons/ReissueIconButton';
import { FormInputText } from 'components/atoms/inputs/FormInputText';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { cls } from 'utils/cls';
import { debounce } from 'utils/debounce';

interface NicknameProps {
  nickname: string;
}

export const CheckNickname = () => {
  const [randomNickName, setRandomNickName] = useState('');
  const [duplicateMessage, setDuplicateMessage] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(true);
  const navigation = useAppNavigation();

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      nickname: '',
    },
  });

  const generateRandomNickName = async () => {
    const result = await randomNicknameApi();
    if (result.status === 200) {
      const newNickname = result.data.data.nickname;
      setRandomNickName(newNickname);
      setValue('nickname', newNickname);
      debouncedHandleDuplicateNickname(newNickname);
      return newNickname;
    }
    return '닉네임 실패';
  };

  const handleStoreNickname = async (data: NicknameProps) => {
    const result = await nicknameEditApi(data.nickname);
    if (result.status === 200) {
      navigation.navigateToFestiTestLanding();
    }
  };

  // 닉네임 중복 검사
  const debouncedHandleDuplicateNickname = debounce(async (nickname: any) => {
    if (nickname.nickname === '') {
      setDuplicateMessage('닉네임을 입력해주세요');
      setIsSubmitEnabled(false);
      return;
    }
    const result = await nicknameDuplicateApi(
      nickname.nickname === undefined ? nickname : nickname.nickname
    );
    if (result.data.data) {
      setDuplicateMessage('중복된 닉네임입니다.');
      setIsSubmitEnabled(false);
    } else {
      setDuplicateMessage('사용 가능한 닉네임입니다.');
      setIsSubmitEnabled(true);
    }
  }, 200);

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
            onChange={(value) => debouncedHandleDuplicateNickname({ nickname: value })}
            rules={{
              required: { value: true, message: '닉네임을 입력해주세요!' },
              maxLength: { value: 8, message: '8자 이내로 작성해주세요!' },
            }}
          />
          <div className={cls('ml-4 w-14')}>
            <ReissueIconButton onClick={generateRandomNickName} />
          </div>
        </div>
        {duplicateMessage && (
          <div className='pl-3 pt-2 font-PretendardExtraLight text-xs text-yellow-600'>
            {duplicateMessage}
          </div>
        )}
      </div>
      <BottomButton title='완료' type='submit' disabled={!isSubmitEnabled} />
    </form>
  );
};
