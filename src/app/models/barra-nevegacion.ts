export const MenuSidebar: PerfilUsuario = {
  imagen: 'assets/images/alvin.png',
  usuario: 'Alvin Wang',
  email: 'alvin@gmail.com',
  apps:[
      {link:'', icono:'display_settings', texto:"App 1"},
      {link:'', icono:'view_comfy_alt', texto:"App 2"},
      {link:'', icono:'swipe_up_alt', texto:"App 3"},
      {link:'', icono:'satellite_alt', texto:"SIRET"},
  ],
  menu: [
    {
      titulo: 'Empezando',
      icono: 'home',
      link: '',
      opciones: [],
    },
    {
      link: '/mapa-sitio',
      icono: 'list_alt',
      titulo: 'Mapa de sitio',
      opciones: [],
    },
    {
      link: '/charts',
      icono: 'insert_chart',
      titulo: 'Estadistica',
      opciones: [],
    },
    {
      link: '/registros',
      icono: 'table_rows',
      titulo: 'Registros & HTTP',
      opciones: [],
    },
    {
      link: '/crud',
      icono: 'ballot',
      titulo: 'CRUD & Tour',
      opciones: [],
    },

    {
      link: '/auth-valid',
      icono: 'how_to_reg',
      titulo: 'Registros & Autorizaciones',
      opciones: [],
    },
  
    {
      titulo: 'Más',
      icono: 'expand_more',
      opciones: [
        {
          link: '/forms',
          icono: 'grid_view',
          texto: 'Formularios',
        },
        {
          link: '/chat',
          icono: 'report_problem',
          texto: 'Chat',
        },
        {
          link: '/buttons',
          icono: 'wysiwyg',
          texto: 'Botones',
        },
      ],
    },
    
  ],
};

export interface PerfilUsuario {
  imagen?: string;
  usuario?: string;
  email?: string;
  apps: Apps[];
  menu: Menu[];
}

export interface Menu {
  titulo?: string;
  icono?: string;
  link?: string;
  opciones?: Opciones[];
}

export interface Opciones {
  link?: string;
  texto?: string;
  icono?: string;
  opciones?: Opciones2[];
}

export interface Apps {
    link?: string;
    texto?: string;
    icono?: string;
   
  }

  export interface Opciones2 {
    link?: string;
    texto?: string;
    icono?: string;
    opciones?: Opciones3[];
  }
  
  export interface Opciones3 {
    link?: string;
    texto?: string;
    icono?: string;
    opciones?: Opciones4[];
  }
  
  export interface Opciones4 {
    link?: string;
    texto?: string;
    icono?: string;
    opciones?: Opciones5[];
  }

  export interface Opciones5 {
    link?: string;
    texto?: string;
    icono?: string;
  }
