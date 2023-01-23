import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';


const Index = () => {

  const formik = useFormik({
    initialValues: {
      name:'',
      surname:'',
      desc:'',
      position: '',
      src:''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less').min(4,'Must be 4 or more')
        .required('Required'),
        surname: Yup.string()
        .max(15, 'Must be 15 characters or less').min(5,'Must be 5 or more')
        .required('Required'),
        desc: Yup.string()
        
        .required('Required'),
        position: Yup.string()
        .max(15, 'Must be 15 characters or less').min(7,'Must be 7 or more')
        .required('Required'),
        src: Yup.string()
        .max(15, 'Must be 15 characters or less').min(3,'Must be 3 or more')
        .required('Required'),
    }),
    onSubmit: values => {
      toast.success('Successfully posted!')
      axios.post('http://localhost:8080/api/customers',values).then((res)=>console.log(res.data))
    },
  });
  return (
    <div style={{backgroundColor:"RGB(43, 43, 43)",display:"flex"}}>
        <img src='https://www.pngitem.com/pimgs/m/360-3603184_transparent-customers-png-png-download.png' width={644} height={641} alt='sekil'/>
    
    <form style={{display:"grid",marginLeft:"200px"}} onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        placeholder="Username"
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="surname">Surname</label>
      <input
        id="surname"
        name="surname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.surname}
        placeholder="Surname"
      />
      {formik.touched.surname&& formik.errors.surname? (
        <div>{formik.errors.surname}</div>
      ) : null}

      <label htmlFor="desc">desc</label>
      <input
        id="desc"
        name="desc"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.desc}
placeholder="desc"
      />
      {formik.touched.desc && formik.errors.desc ? (
        <div>{formik.errors.desc}</div>
      ) : null}
      <label htmlFor="name">position</label>
      <input
        id="position"
        name="position"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.position}
        placeholder="position Address"
      />
      {formik.touched.src && formik.errors.src ? (
        <div>{formik.errors.src}</div>
      ) : null}
       
      <label htmlFor="name">src</label>
      <input
        id="src"
        name="src"
        type="src"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.src}
        placeholder="src"
      />
      {formik.touched.src && formik.errors.src ? (
        <div>{formik.errors.src}</div>
      ) : null}
       
      <button  type="submit" >Submit</button>
      <Toaster/>
    </form>
    </div>
  );
};

export default Index