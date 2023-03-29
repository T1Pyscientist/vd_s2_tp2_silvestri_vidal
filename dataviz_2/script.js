d3.csv('astronautas.csv', d3.autoType).then(data => {

    // Edad promedio por pais
    let chart2 = Plot.plot({
        marks: [
            Plot.barX(
                data.filter(d => d.ocupacion != 'participante de vuelo espacial'),
                Plot.groupY({
                    x1: 'min',
                    x2: 'max',
                }, { x: 'edad_mision', y: 'ocupacion' }, ),
            ),
            Plot.axisY({ lineWidth: 1 }),
        ],

        y: { label: "Profesión" },
        x: { grid: true, domain: [30, 65] },

        style: {
            backgroundColor: "1f1f1f",
            scheme: 'blues',
            color: 'rgb(107, 174, 214)'
        },

        width: 900,
        height: 400,
        marginLeft: 120,
        marginBottom: 50,
        insetLeft: 30,
        insetRight: 30
    })

    d3.select('#chart').append(() => chart2)


})