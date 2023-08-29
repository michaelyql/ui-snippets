import './App.css';
import Box from './widgets/Box';

function App() {
  return (
    <>
      <div className='h-1/6 w-full text-center md:text-[56px] text-3xl font-light font-zinc-900 mt-4 font-mono md:p-4'>
        Samples UI widgets & components
      </div>
      <hr className='mt-4 mb-0 mx-4 md:mx-8'/> 
      <div className='w-full h-5/6 flex flex-wrap p-4 gap-4'>
        <Box id="box1">
          <h1 className='font-bold text-xl'>Title</h1>
          <h2 className='text-slate-500'>subtitle</h2>
          <div className='font-bold text-slate-500'>
            chip/tag 
            <span className='text-sm bg-emerald-100 text-emerald-600 rounded-md p-1 ml-1'>macro</span>
          </div>
          <div className='text-slate-500'>created by as</div>
          <button className='bg-blue-600 text-slate-100 p-2 text-sm rounded-lg'>
            View Build
            <i className='fa-solid fa-arrow-right m-1'></i>
          </button>
        </Box>
        <Box id="box2">
          <h1>Hello</h1>
        </Box>
      </div>
    </>
  )
}

export default App
