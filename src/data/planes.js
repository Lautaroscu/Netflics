const planes = [
    {
        nombre: "Plan gratuito",
        precio: 0,
        moneda: "$",
        periodo: "/mes",
        botonTexto: "Empezá gratis",
        caracteristicas: [
            { caracteristica: "Explorar catálogo", incluye: true },
            { caracteristica: "Recibir notificaciones estreno", incluye: true },
            { caracteristica: "Ver contenido", incluye: false }
        ]
    },
    {
        nombre: "Plan familiar",
        precio: 5,
        moneda: "$",
        periodo: "/mes",
        botonTexto: "Empezá por $5",
        caracteristicas: [
            { caracteristica: "Explorar catálogo", incluye: true },
            { caracteristica: "Recibir notificaciones estreno", incluye: true },
            { caracteristica: "Ver contenido", incluye: true },
            { caracteristica: "Descargar películas/series", incluye: true }
        ]
    },
    {
        nombre: "Plan premium",
        precio: 10,
        moneda: "$",
        periodo: "/mes",
        botonTexto: "Empezá por $10",
        caracteristicas: [
            { caracteristica: "Explorar catálogo", incluye: true },
            { caracteristica: "Recibir notificaciones estreno", incluye: true },
            { caracteristica: "Ver contenido", incluye: true },
            { caracteristica: "Descargar películas/series", incluye: true }
        ]
    },
    {
        nombre: "Plan pro",
        precio: 20,
        moneda: "$",
        periodo: "/mes",
        botonTexto: "Empezá por $20",
        caracteristicas: [
            { caracteristica: "Recibir notificaciones estreno", incluye: true },
            { caracteristica: "Ver contenido", incluye: true },
            { caracteristica: "Descargar películas/series", incluye: true },
            { caracteristica: "AI integrada + contenido 4K", incluye: true }
        ]
    }
];
export default planes