import React, {useState, useEffect} from 'react'

const Contact = () =>{
   const [buttonClick, setButtonClick] = useState(false);
    const initialValues = {username:"", email:"", message:""};
    const[formValues, setFormValues] = useState(initialValues);
    const[formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
 
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormValues({...formValues, [name]:value});
        };
        
    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit){
          console.log(formValues);
      }   
    }, [formErrors]);
    
     const validate = (values) =>{
         const errors ={};
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
         if(!values.username){
             errors.username = "username is required!";
         }
         if(!values.email){
            errors.email= "email is required!";
        }else if (!regex.test(values.email)){
            errors.email="This is not a valid email format"
        }
        if(!values.message){
            errors.message= "message is required!";
        }
        return errors;
     };
    
    return (
        <div className="container border" style={{marginTop:"50px", width:"50%", backgroundImage:"url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')",
        backgroundPosition:"center",
        backgroundSize:"cover",}}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Message sent successfully</div>
        ):(<pre></pre>)}

        <form onSubmit={handleSubmit}>
        <h1  align="center">Contact Form</h1>
        <div id="profile-form" className="htmlForm-group">
            <label for="exampleInputName">Username</label>
            <input 
            type="text" 
            className="form-control" 
            name="username"
            placeholder="Your Name" 
            value={formValues.username} 
            onChange={handleChange}/>
        </div>
        <p>{formErrors.username}</p>
        <div className="form-group"> 
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" 
            className="form-control" 
            name="email" 
            placeholder="Your Email Address" 
            value={formValues.email} 
            onChange={handleChange}/>
        </div> 
        <p>{formErrors.email}</p>
        <div className="form-group">
            <label htmlFor="exampleInputText">Message</label>
            <textarea 
            className="form-control" 
            rows="3" 
            name="message" 
            placeholder="Your Message" 
            value={formValues.message} 
            onChange={handleChange}></textarea>
        </div> 
        <p>{formErrors.message}</p>
        <br></br> 
          <button className="btn btn-primary" data-testid = "submit-button" onClick={() => setButtonClick(!buttonClick)}>Send Message</button>
            {/* {!setIsSubmit?<p>Thank you for your message, we will be in touch as soon as possible!</p>:<p></p>} */}
            </form> 
    </div>
 
    );
};


export default Contact
