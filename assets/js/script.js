
// ARREGLO VENTA
const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Apartamento en zona residencial",
    ubicacion: "123 Luxury Lane",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Vista increíble",
    ubicacion: "789 Mountain Road",
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Terraza panorámica",
    ubicacion: "567 Skyline Avenue",
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa familiar",
    src: "https://picsum.photos/500/300?1",
    descripcion: "Casa grande",
    ubicacion: "Viña del Mar",
    habitaciones: 5,
    costo: 6000,
    smoke: true,
    pets: true,
  },
]


// ARREGLO ALQUILER

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    descripcion: "Cerca de todo",
    ubicacion: "123 Main Street",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento vista mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09",
    descripcion: "Vista al mar",
    ubicacion: "456 Ocean Avenue",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a",
    descripcion: "Zona tranquila",
    ubicacion: "123 Main Street",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Home studio",
    src: "https://picsum.photos/500/300?2",
    descripcion: "Para una persona",
    ubicacion: "Valparaíso",
    habitaciones: 1,
    costo: 900,
    smoke: true,
    pets: false,
  },
]



const contVenta = document.querySelector("#venta")
const contAlquiler = document.querySelector("#alquiler")


if (contVenta && contVenta.children.length === 0) {

  let html = ""

  for (let i = 0; i < propiedades_venta.length; i++) {

    let p = propiedades_venta[i]

    let smokeTexto = p.smoke
      ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
      : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`

    let petsTexto = p.pets
      ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
      : `<p class="text-danger"><i class="fas fa-ban"></i> No mascotas</p>`

    html += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${p.src}" class="card-img-top">
        <div class="card-body">
          <h5>${p.nombre}</h5>
          <p>${p.descripcion}</p>
          <p>${p.ubicacion}</p>
          <p>${p.habitaciones} Habitaciones</p>
          <p>$ ${p.costo}</p>
          ${smokeTexto}
          ${petsTexto}
        </div>
      </div>
    </div>
    `
  }

  contVenta.innerHTML = html
}


if (contAlquiler && contAlquiler.children.length === 0) {

  let html = ""

  for (let i = 0; i < propiedades_alquiler.length; i++) {

    let p = propiedades_alquiler[i]

    let smokeTexto = p.smoke
      ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
      : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`

    let petsTexto = p.pets
      ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
      : `<p class="text-danger"><i class="fas fa-ban"></i> No mascotas</p>`

    html += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${p.src}" class="card-img-top">
        <div class="card-body">
          <h5>${p.nombre}</h5>
          <p>${p.descripcion}</p>
          <p>${p.ubicacion}</p>
          <p>${p.habitaciones} Habitaciones</p>
          <p>$ ${p.costo}</p>
          ${smokeTexto}
          ${petsTexto}
        </div>
      </div>
    </div>
    `
  }

  contAlquiler.innerHTML = html
}