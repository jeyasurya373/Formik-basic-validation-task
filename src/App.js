import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues ={
      name:'',
      email:'',
      hobbie:''
};

const onSubmit = value =>{
  console.log(value)
};

// const validate = value =>{
//   let errors ={}

//   if(!value.name){
//     errors.name ='Required'
//   }
//   if(!value.email){
//     errors.email ='Required'
//   }
//   if(!value.hobbie){
//     errors.hobbie = 'Required'
//   }

//   return errors

// }
const validationSchema =Yup.object({
  name: Yup.string().required('Name Required'),
  email: Yup.string().required('Email Required'),
  hobbie: Yup.string().required('Hobbie Required')
});

function App() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate
  })
  console.log(formik.errors)

  return (
    <div>
      <form style={{display:'flex',flexDirection:"column",width:"50%"}} onSubmit={formik.handleSubmit}>

        <label htmlFor="name">Name</label>
        <input type='text'
         id="name"
        name="name" 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>:''}

        <label htmlFor="email">Email</label>
        <input type='email' 
        id="email" 
        name="email" 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>:''}

        <label htmlFor="hobbie">Hobbie</label>
        <input type='text' 
        id="hobbie" 
        name="hobbie" 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        value={formik.values.hobbie}
        />
        {formik.touched.hobbie && formik.errors.hobbie ? <div style={{color:'red'}}>{formik.errors.hobbie}</div>:''}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
