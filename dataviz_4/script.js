d3.csv('astronautas.csv', d3.autoType).then(data => {
    // - Horas en mision por año
    data = data.filter(d => d.anio_mision != 20)
    data.forEach(element => {
        element.anio_mision = new Date(element.anio_mision, 0, 1)
    });
    console.log(data)

    let chart4 = Plot.plot({
        marks: [
            Plot.lineY(data.filter(d => d.ocupacion != 'participante de vuelo espacial'),
                Plot.binX({ y: 'sum' }, { x: "anio_mision", y: "mision_hs", thresholds: 11, stroke: "ocupacion", strokeWidth: 3, curve: 'natural' }),
            ),
            Plot.axisX({ tickVisible: false, lineWidth: 1 }),
        ],

        y: {
            grid: true,
            domain: [0, 60000],
            ticks: 5,
            label: "Horas en mision",
            tickFormat: d => d / 1000 + "k",
            labelAnchor: "center",
            labelOffset: 60,
        },
        x: {
            inset: 20,
            align: 1,
            label: "Año",
            labelOffset: 60,
            nice: true,
            labelAnchor: "center",
            tickFormat: "%Y",
            type: 'time',

        },

        color: {
            scheme: 'blues',
            legend: true
        },

        style: {
            backgroundColor: "282828",
            color: "white",
            fontFamily: "Exo, sans-serif",
            fontSize: 12,
        },

        width: 1000,
        marginLeft: 80,
        marginTop: 50,
        marginBottom: 80,
    })

    d3.select('#chart').append(() => chart4)

})