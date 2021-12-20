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
      titulo: 'Registros',
      icono: 'description',
      opciones: [
        {
          link: '/registros',
          icono: 'table_rows',
          texto: 'Registros & HTTP',
        },
        {
          link: '/crud',
          icono: 'ballot',
          texto: 'CRUD',
        },
        {
          link: '/type-t24',
          icono: 'list_alt',
          texto: 'Tipo T24',
        },
        {
          link: '/auth-chek-valid',
          icono: 'verified',
          texto: 'Auth-Check-Valid',
        },
      ],
    },
    {
      titulo: 'Más',
      icono: 'whatshot',
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
    {
      titulo: 'Gráficos',
      icono: 'insert_chart',
      opciones: [
        {
          link: '/charts',
          icono: 'insert_chart',
          texto: 'Estadistica',
        },
      ],
    }
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
}

export interface Apps {
    link?: string;
    texto?: string;
    icono?: string;
  }
