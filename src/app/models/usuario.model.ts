// export interface UsuariosPaginados{
// 	uid: string; //
// 	nombre: string; //
// 	emprendimiento?: string; //
// 	descripcion?: string; //
// 	banner?: string; //
// 	logo?: string; //
// 	categoria?: string; //
// 	oficio?: string; //
// 	web?: string; //
// 	correo: string; //
// 	telefono?: string;
// 	whatsapp?: string; //
// 	rrss?: { //
// 		red1: {
// 			icon: string;
// 			link: string;
// 		}
// 		red2: {
// 			icon: string;
// 			link: string;
// 		}
// 		red3: {
// 			icon: string;
// 			link: string;
// 		}
// 	}
// 	rating?: number; //
// 	rol: string;
// 	galeria?: string[]; //
// 	videos?: string[];
// 	direccion?: string; //
// 	estado: boolean;
// 	destacado: boolean;
// 	fechaRegistro: Date;
// 	ubicacion?: number[];
// 	googleSign: boolean;
// }

export interface UserList {
	total: number;
	usuarios: Usuario[];
}

export interface Usuario {
	ubicacion:      Ubicacion;
	videos:         string[];
	destacado:      boolean;
	nombre:         string;
	emprendimiento: string;
	descripcion:    string;
	categoria:      string;
	oficio:         string;
	correo:         string;
	rating:         number;
	rol:            string;
	galeria:        string[];
	location?:      Location;
	estado:         boolean;
	googleSign:     boolean;
	fechaRegistro:  Date;
	uid:            string;
	banner?:        string;
	logo?:          string;
	web?:           string;
	telefono?:      string;
	whatsapp?:      string;
	rrss?:          Rrss;
	direccion?:     string;
}

export interface Location {
	type:             string;
	coordenadas:      number[];
	formatodireccion: string;
}

export interface Rrss {
}

export interface Ubicacion {
	coordenadas: number[];
}
