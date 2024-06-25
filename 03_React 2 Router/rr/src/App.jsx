import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  // const onSubmit = async (data) => {
  //   // await delay(2)
  //   let r = await fetch('https://localhost:3000/', {method:"POST"})
  //   let res = await r.text()
  //   console.log(data, res)
  //   if (data.username !== "shubham"){
  //     setError("myformName",{messeage: "your form has wrong name"})
  //   }
  // }

  const onSubmit = async (data) => {
    try {
      await delay(2);

      let response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      let res = await response.text();
      console.log(data, res);

      if (data.username == 'shubham') {
        setError('username', { message: 'Your form has the wrong name' });
      }
    } catch (error) {
      console.error('Error during form submission', error);
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="username" {...register("username", { required: { value: true, message: 'This field is required' }, minLength: { value: 3, message: 'Min length is 3' }, maxLength: { value: 8, message: 'Max length is 8' } })} type="text" />   {errors.username && <div className='red' >{errors.username.message}</div>}

          <br />
          <input {...register("password")} placeholder="password" type="password" name='password' id='' />

          <br />
          <input disabled={isSubmitting} type="submit" value='Submit' />
          {errors.myformName && <div className='red'>{errors.myformName.message}</div>}
        </form>
      </div>

    </>
  )
}

export default App
