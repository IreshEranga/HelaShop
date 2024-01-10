
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class Toaster {

    loadingToast = (message) => {
        this.loaderToastId = toast.loading(message,
            {
                autoClose: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            }
        );
    }
    //afterToast is a callback the logic is wriiten mostly for navigate 
    updateLoadingToast = (type, message,afterToast) => {
        toast.update(this.loaderToastId, {
            render: message,
            type: type,
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            onClose:afterToast
        });
    }
    dismissLoadingToast = () => {
        toast.dismiss(this.loaderToastId);
    };
}
export default Toaster = new Toaster()