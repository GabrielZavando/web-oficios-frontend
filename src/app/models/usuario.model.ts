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
