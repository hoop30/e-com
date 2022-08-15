import cabine1 from '../assets/img/products/cabine/cabine1.jpg'
import cabine2 from '../assets/img/products/cabine/cabine2.jpg'
import cabine3 from '../assets/img/products/cabine/cabine3.jpg'
import camera1 from '../assets/img/products/camera/camera1.jpg'
import camera2 from '../assets/img/products/camera/camera2.jpg'
import clefUsb1 from '../assets/img/products/clefUsb/clefUsb1.jpg'
import clefUsb2 from '../assets/img/products/clefUsb/clefUsb2.jpg'
import clefUsb3 from '../assets/img/products/clefUsb/clefUsb3.jpg'
import gopro1 from '../assets/img/products/gopro/gopro1.jpg'
import gopro2 from '../assets/img/products/gopro/gopro2.jpg'
import laltop1 from '../assets/img/products/laltop/laltop1.jpg'
import laltop2 from '../assets/img/products/laltop/laltop2.jpg'
import laltop3 from '../assets/img/products/laltop/laltop3.jpg'
import laltop4 from '../assets/img/products/laltop/laltop4.jpg'
import pcFixe1 from '../assets/img/products/pcFixe/pcFixe1.jpg'
import pcFixe2 from '../assets/img/products/pcFixe/pcFixe2.jpg'
import pcFixe3 from '../assets/img/products/pcFixe/pcFixe3.jpg'
import pelicule1 from '../assets/img/products/pelicule/pelicule1.jpg'
import pelicule2 from '../assets/img/products/pelicule/pelicule2.jpg'
import pelicule3 from '../assets/img/products/pelicule/pelicule3.jpg'
import photo1 from '../assets/img/products/photo/photo1.jpg'
import photo2 from '../assets/img/products/photo/photo2.jpg'
import smartphone1 from '../assets/img/products/smartphone/smartphone1.jpg'
import smartphone2 from '../assets/img/products/smartphone/smartphone2.jpg'
import smartphone3 from '../assets/img/products/smartphone/smartphone3.jpg'

export function ProductPhoto() {

    const productPhoto = {
        'Delux fixCabine': [cabine1,cabine2,cabine3],
        'Thief destructor': [camera1, camera2],
        'Usb superKey': [clefUsb1, clefUsb2, clefUsb3],
        'Gogro': [gopro1, gopro2],
        'Macboc': [laltop1, laltop2, laltop3, laltop4],
        'Ymac': [pcFixe1, pcFixe2, pcFixe3],
        'Pelicule Kadok': [pelicule1, pelicule2, pelicule3],
        'Niko d3000': [photo1, photo2],
        'Yphone': [smartphone1, smartphone2, smartphone3],
    }

    return productPhoto
}
