import { initializeApp } from "firebase/app";
import {getFirestore,collection,addDoc,doc,getDocs,getDoc,updateDoc,deleteDoc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: process.env.API_KEY_LARASHOP,
    authDomain: "larashop-3c266.firebaseapp.com",
    projectId: "larashop-3c266",
    storageBucket: "larashop-3c266.appspot.com",
    messagingSenderId: "811770463701",
    appId: "1:811770463701:web:6aecd3d7e441fec092a95c"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore()


export const  cargarBDD = async ()=>{
    const promise =await fetch('./json/productos.json')
    const producto = await promise.json()
    producto.forEach(async(prod)=>{
        await addDoc(collection(db,"productos"), {
            idCategoria: prod.idCategoria,
            nombre:prod.nombre,
            modelo:prod.modelo,
            categoria:prod.categoria,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    })
}
// CRUD 
export const getProductos = async ()=>{
    const productos = await getDocs(collection(db,"productos"))
    const item = productos.docs.map(prod =>{
        return{...prod.data(),id: prod.id}
    })
    return item;
}

export const getProducto = async (id) =>{
    const producto = await getDoc(doc(db,"productos",id))
    const item = {...producto.data(),id:producto.id}
    return item
}

export const updateProducto = async (id,info)=>{
    await updateDoc(doc(db,"productos",id),info)
}


export const delateProducto = async (id)=>{
    await deleteDoc(doc(db,"productos",id))

}

// create and read orden de compra 

export const createOrdenCompra = async (cliente,productos,precioTotal,fecha)=>{
    const ordenCompra =await addDoc(collection(db,"ordenesCompra"),{
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha:fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id)=>{
    const oC= await getDoc(doc(db,"ordenesCompra,id"))
    const ordenesCompra = {...oC.data(),id:oC.id}
    return ordenesCompra
}