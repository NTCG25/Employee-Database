import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools"; 



type FormValues = {
    firstName: string
    lastName: string 
    employeeID: string
};

export const StudentDatabase = () => {  
const form = useForm<FormValues>()
const { register, control, handleSubmit, formState } = form
const { errors } = formState;  

const onSubmit = (data: FormValues) => { 
    console.log("Submitted!")
}

    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='form-control'>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" {...register("firstName", {required: "First Name is required!"})}/>
            <p className='error'>{errors.firstName?.message}</p>
            </div>
            
            <div className='form-control'>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" {...register("lastName", {required:"Last Name is required!"})}/>
            <p className='error'>{errors.lastName?.message}</p>
            </div>
            
            <div className='form-control'>
            <label htmlFor="employeeID">Your Employee ID:</label>
            <input type="employee" id="employeeID" {...register("employeeID", {required:"ID is required!"})}/>
            <p className='error'>{errors.employeeID?.message}</p>
            </div>
            <button> Submit </button>
        </form>
        <DevTool control={control} />
    </div>
    
 )
}

