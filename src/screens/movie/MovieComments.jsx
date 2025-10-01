import { COMMENTS } from './comments.data'

function MovieComments() {
    return (
        <div className='mt-18'>
            <h2 className='text-2xl font-semibold mb-4'>Комментарии</h2>
            <ul className='space-y-4'>
                {COMMENTS.map(comment => (
                    <li key={comment.id} className='bg-neutral-800 p-4 rounded-lg shadow'>
                        <p className='text-sm text-gray-400 mb-1'>{comment.name}</p>
                        <p className='text-white text-sm'>{comment.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieComments