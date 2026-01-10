import { Bounce, toast } from "react-toastify"

export const showToast = (type,message) => {
   let options ={
    position:"top-right",
    autoClose:5000,
    hideProgressBar:false,
    closeOnClick:true,
    pauseOnHover:true,
    draggable:true,
    progress:undefined,
    theme:"light",
    transition:Bounce
   }

   switch(type){
    case "success":
        toast.success(message,options);
        break;
    case "error":
        toast.error(message,options);
        break;
    case "warning":
        toast.warning(message,options);
        break;
    default:
          toast.info(message,options);
    break
   }    
}