import Swal from "sweetalert2";
const showSwalAlert = (icon, title) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-start',
      showConfirmButton: false,
      timer:5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: icon,
      title: title,
      confirmButtonText: 'Ok!'
    });
  };
  export default showSwalAlert