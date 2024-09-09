export interface Dashboard {
    efectivo:       Auditado;
    bancos:         Auditado;
    tarjeta:        Auditado;
    otrasFormas:    Auditado;
    pendiente:      Auditado;
    canceladas:     number;
    duda:           Auditado;
    pendientesPago: Auditado;
    auditado:       Auditado;
    unknow:         Auditado;
}

export interface Auditado {
    consultas: number;
    total:     number;
}
