import useSWR from 'swr'
import Navbar from './navbar'
import Footer from './footer'

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Layout({ children }) {
  const { data, error } = useSWR('/api/navigation', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // 나머지 코드

  return (
    <>
      <Navbar links={data.links} />
      <main>{children}</main>
      <Footer />
    </>
  )
}