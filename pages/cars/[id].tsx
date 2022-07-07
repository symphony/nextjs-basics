import { useRouter } from 'next/router';

export default function Car() {
  const router = useRouter()
  const { id } = router.query;

  return <h1>car {id}</h1>
};