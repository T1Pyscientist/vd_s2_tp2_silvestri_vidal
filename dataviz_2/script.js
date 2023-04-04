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
            Plot.axisY({ lineWidth: 8}),
        ],

        y: { label: null, bandwidth: 0.5},
        x: {
            grid: true, 
            domain: [30, 65], 
            label: "Años de edad", 
            labelOffset: 70, 
            labelAnchor: "center",
            tickPadding: 20
        },

        style: {
            backgroundColor: "282828",
            scheme: 'blues',
            color: 'rgb(107, 174, 214)',
            fontSize: 14,
            fontFamily: 'Exo',
        },

        width: 1000,
        height: 450,
        marginLeft: 150,
        marginRight: 50,
        marginBottom: 90,
        marginTop: 70,
        insetLeft: 30,
        insetRight: 30,
    })

    d3.select('#chart').append(() => chart2)


})