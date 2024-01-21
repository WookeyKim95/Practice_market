import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'

const UserPage = async () => {

  const userData = await getCurrentUser();

  return (
    <div>로그인 된 유저만 볼 수 있는 페이지 입니다</div>
  )
}

export default UserPage