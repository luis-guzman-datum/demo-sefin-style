import Step from 'shepherd.js/src/types/step';

export const Botones = {
  cancelar: {
    classes: 'white',
    text: '<button class="btn red"><i class="material-icons">close </i> </button>',
    type: 'cancel',
  },
  siguiente: {
    classes: 'white',
    text: '<button class="btn blue"><i class="material-icons">arrow_forward_ios </i> </button>',
    type: 'next',
  },
  anterior: {
    classes: 'white',
    text: '<button class="btn blue"><i class="material-icons">arrow_back_ios </i> </button>',
    type: 'back',
  },
};

export const OpcionesPorDefecto: Step.StepOptions = {
  classes: 'shepherd-theme-arrows custom-default-class',
  scrollTo: true,
  cancelIcon: {
    enabled: true,
  },
};

export const TourCrud: Step.StepOptions[] = [
  {
    attachTo: {
      on: 'bottom',
    },
    buttons: [
      /*   Botones.cancelar, */
      Botones.siguiente,
    ],
    classes: 'grey-text card',   
    title: 'BIENVENIDO',
    text: `
                <p >
                 Bienvenido al sistema.
                </p>
            `,
  },
  {
    attachTo: {
      element: 'nav',
      on: 'bottom',
    },
    buttons: [
      /*   Botones.cancelar, */
      Botones.anterior,
      Botones.siguiente,
    ],
    classes: 'grey-text card',
    
    title: 'BARRA DE NAVEGACION',
    text: `
              <p >
                Opciones disponibles para tu perfil.
              </p>`,
  },
  {
    attachTo: {
      element: '#clickAgregar',
      on: 'bottom',
    },
    buttons: [
      /*   Botones.cancelar, */
      Botones.anterior,
      Botones.siguiente,
    ],
    classes: 'grey-text card',
    
    title: 'NUEVO REGISTRO',
    text: `
              <p >
                Aqui puedes agregar un nuevo usuario.
              </p>`,
  },
  {
    attachTo: {
      element: 'table',
      on: 'top',
    },
    buttons: [
      /*   Botones.cancelar, */
      Botones.anterior,
      Botones.siguiente,
    ],
    classes: 'grey-text card',
    
    title: 'REGISTROS DE USUARIOS',
    text: `
              <p >
                Aqui puedes los usuarios creados.
              </p>`,
  }, 
  {
    attachTo: {
      element: '#pagination-controls',
      on: 'top',
    },
    buttons: [
      /*   Botones.cancelar, */
      Botones.anterior,
      Botones.siguiente,
    ],
    classes: 'grey-text card',
    
    title: 'PAGINACION',
    text: `
              <p >
                Aqui puedes moverte a la siguiente pagina.
              </p>`,
  }
  ,
  {
    attachTo: {
      element: '#clickEditar',
      on: 'bottom',
    },
    buttons: [
      /* Botones.cancelar,*/
      Botones.anterior,
      Botones.siguiente,
    ],
    classes: 'grey-text card',
    
    title: 'MODIFICAR REGISTRO',
    text: `
              <p >
                Aqui puedes modificar el registro seleccionado del usuario.
              </p>`,
  },
  {
    attachTo: {
      element: '#clickEliminar',
      on: 'bottom',
    },
    buttons: [
      /*  Botones.cancelar,*/
      Botones.anterior,
      Botones.siguiente,
    ],
    classes: 'grey-text card',
    
    title: 'ELIMINAR REGISTRO',
    text: `
              <p >
                Aqui puedes eliminar el registro seleccionado del usuario.
              </p>`,
  },
  {
    attachTo: {
      element: '#buscador',
      on: 'bottom',
    },
    buttons: [Botones.anterior, Botones.siguiente],
    classes: 'grey-text card',
    
    title: 'BUSCAR USUARIO',
    text: `
              <p >
                Aqui puedes buscar un usuario.
              </p>`,
  },
  {
    attachTo: {
      element: 'footer',
      on: 'top',
    },
    buttons: [Botones.anterior, Botones.cancelar],
    classes: 'grey-text card',
    
    title: 'FOOTER',
    text: `
              <p >
               Pie de página SEFIN.
              </p>`,
  },
];
