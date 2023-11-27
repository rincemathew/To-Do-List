import Swal from 'sweetalert2'

export const swal = (titleMsg,textMsg,iconMsg)=>{
    Swal.fire({
        title: titleMsg,
        text: textMsg,
        icon: iconMsg,
        confirmButtonText: 'OK'
      })
}