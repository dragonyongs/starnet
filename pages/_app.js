import Layout from '../components/layout'
import '../styles/tailwind.css';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}