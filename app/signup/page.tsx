'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import EyeIcon from './EyeIcon';
import styles from './SignupPage.module.css';
import landingStyles from '../LandingPage.module.css';
import PageVisitLogger from '../../components/PageVisitLogger';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState('');
  const router = useRouter();

  const getInputGuide = (field: string) => {
    switch (field) {
      case 'username':
        return '이름은 2글자 이상이어야 합니다.';
      case 'email':
        return '유효한 이메일 주소를 입력해주세요.';
      case 'password':
        return '비밀번호는 영문, 숫자, 특수문자를 포함하여 8글자 이상이어야 합니다.';
      case 'confirmPassword':
        return '비밀번호를 다시 입력해주세요.';
      default:
        return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/signup', {
        username,
        email,
        password
      });

      if (response.data.success) {
        console.log('회원가입 성공:', response.data);
        router.push('/main');
      } else {
        setError(response.data.message || '회원가입에 실패했습니다.');
      }
    } catch (error: any) {
      console.error('회원가입 에러:', error);
      setError(error.response?.data?.message || '회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <PageVisitLogger pageType="signup" />
      <header className={landingStyles.header}>
        <nav className={landingStyles.nav}>
          <Link href="/" className={landingStyles.logo}>2U_lab</Link>
          <div className={landingStyles.navLinks}>
            <Link href="/about">ABOUT 2U</Link>
            <Link href="/services">2ULab SERVICES</Link>
            <Link href="/contact">CONTACT US</Link>
          </div>
        </nav>
      </header>
      <div className={styles.container}>
        <h1 className={styles.title}>회원가입</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="사용자 이름"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setFocusedField('username')}
              onBlur={() => setFocusedField('')}
              required
              className={styles.input}
            />
            {focusedField === 'username' && <p className={styles.inputGuide}>{getInputGuide('username')}</p>}
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField('')}
              required
              className={styles.input}
            />
            {focusedField === 'email' && <p className={styles.inputGuide}>{getInputGuide('email')}</p>}
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.passwordInputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField('')}
                required
                className={styles.input}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.passwordToggle}
              >
                <EyeIcon isVisible={showPassword} />
              </button>
            </div>
            {focusedField === 'password' && <p className={styles.inputGuide}>{getInputGuide('password')}</p>}
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.passwordInputWrapper}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setFocusedField('confirmPassword')}
                onBlur={() => setFocusedField('')}
                required
                className={styles.input}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={styles.passwordToggle}
              >
                <EyeIcon isVisible={showConfirmPassword} />
              </button>
            </div>
            {focusedField === 'confirmPassword' && <p className={styles.inputGuide}>{getInputGuide('confirmPassword')}</p>}
          </div>
          <button type="submit" className={styles.button}>가입하기</button>
        </form>
        <p className={styles.loginLink}>
          이미 계정이 있으신가요? <Link href="/login">로그인</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;