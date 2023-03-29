d3.csv('astronautas.csv', d3.autoType).then(data => {
    // - Horas en mision vs horas en eva 
    let chart4 = Plot.plot({
        marks: [
            Plot.lineY(data.filter(d => d.ocupacion != 'participante de vuelo espacial'),
                Plot.binX({ y: 'sum' }, { x: "anio_mision", y: "mision_hs", thresholds: 11, stroke: "ocupacion", strokeWidth: 3, curve: 'natural' }),
            ),
        ],
        width: 1000,
        y: { grid: true, domain: [0, 60000] },

        color: {
            scheme: 'blues',
            legend: true
        },

        style: {
            backgroundColor: "1f1f1f",
            color: "white"
        },
        marginLeft: 80,
        marginTop: 30,
        marginBottom: 40,
    })

    d3.select('#chart').append(() => chart4)

})