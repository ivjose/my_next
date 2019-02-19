import * as React from 'react'
import Link from 'next/link'
import CustomLayout from '../components/CustomLayout'
import './styles.less'

const IndexPage: React.FunctionComponent = () => {
  return (
    <CustomLayout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p><Link href='/about'><a>About</a></Link></p>
    </CustomLayout>
  )
}

export default IndexPage;