import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Layouts from '../../components/Layouts'
import data from '../../utils/data';

export default function ProductScreen() {
    const {query} = useRouter();
    const {slug} = query;
    const product = data.products.find(x=>x.slug==slug);
    if(!product){
        return <div>Product Not Found</div>
    }
  return (
  <Layouts title={product.name}>
   <div className='py-2'>
    <Link href="/">back to products</Link>
   </div>
   <div className='grid md:grid-cols-4 md:gap-3'>
    <div className='md:col-span-2'>
    <Image
        src={product.image}
        alt={product.name}
        width={640}
        height={640}
        layout="responsive"
    >
    </Image>
    </div>
   </div>
  </Layouts>
  )
}