import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { FirebaseError } from 'firebase/app'
import { Bounce, ToastContainer, toast } from 'react-toastify'

const Login = () => {
  const [email, setemail] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const [showPass, setshowPass] = useState(false)
  const router = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if (user) {
        router('/')
      }
    })
  }, [])

  const loginUser = ()=>{
    
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      if(userCredential.user){
        router('/')
      }
    }).catch((error:FirebaseError) => {
      toast.error(error.message)
    });
  }
  
  return (
    <div className='min-h-[100vh] flex items-center justify-center flex-col'>
      <div className="card card-compact bg-gray-200 border border-gray-400 p-5">
        <h1 className='text-2xl font-bold text-center'>Login</h1>
        <label className="input input-bordered flex items-center gap-2 mt-5">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
</label>
<label className="input input-bordered flex items-center gap- mt-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type={showPass?"text":"password"} className="grow" onChange={(e) => setpassword(e.target.value)} placeholder="Password" value={password} />
</label>
<p className="text-sm flex items-center justify-end mt-3"><input type="checkbox" onChange={(e) => setshowPass(e.target.checked)} className="checkbox checkbox-sm checkbox-primary mr-2" /> Show Password</p>
<button className='btn  btn-primary mt-3' onClick={loginUser} disabled={!email||!password} >Login</button>
      </div>
      
      <ToastContainer position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}/>
    </div>
  )
}

export default Login