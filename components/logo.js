import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }

  p {
    margin-left: 10px;
  }
`

const Logo = () => {
  const footPrintImg = `/profile.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={22} height={22} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='Ubuntu", sans-serif'
            fontWeight="bold"
          >
            M. Rizki Maulana
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
