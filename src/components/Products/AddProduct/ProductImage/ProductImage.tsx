

interface ProductImageProps{
    photo:File|null|undefined|string
    setphoto:Function
}

const ProductImage = ({photo,setphoto}:ProductImageProps) => {
  return (
    <div className='card p-3 min-h-[150px] rounded-md border border-primary/30 flex items-center justify-center flex-col'>
            <p className='text-sm text-center text-primary'>Attach an Image</p>
            <button className='btn btn-sm btn-primary relative mt-2'>
            <input type="file" onChange={e=>e.target.files&&setphoto(e.target.files[0])} className='absolute top-0 left-0 bottom-0 right-0 opacity-0' />
            {photo?'Image Attached!':'Attach Image'}
            </button>
            
            {photo&&<span className='text-xs text-center text-gray-500 mt-1'>{photo instanceof File?photo.name:photo.substring(0,20)+"..."}</span>}
    </div>
  )
}

export default ProductImage