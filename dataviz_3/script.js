d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart3 = Plot.plot({
        facet: {
            data: data,
            x: 'genero',
        },
        fx: {
            label: "Genero",
            labelOffset: 50,
            tickFormat: (d) => d.charAt(0).toUpperCase() + d.slice(1),
        },

        marks: [
            Plot.barY(data,
                Plot.groupX({ y: 'count' }, { x: 'ocupacion', fill: 'ocupacion' })
            ),

            Plot.text(data,
                Plot.groupX({ y: 'count', text: "count" }, {
                    x: 'ocupacion',
                    sort: { x: 'y', reverse: true },
                    dy: -10,
                    fontSize: 16,
                    fontFamily: "Exo, sans-serif",
                }),
            ),

            Plot.axisX({ lineWidth: 3, label: null, fontSize: 12 }),
            Plot.axisY({ label: null, color: "#282828" }),
            Plot.frame({ stroke: "#888888" }),
        ],

        color: { scheme: 'blues', legend: false },
        style: {
            backgroundColor: "282828",
            color: "white",
            fontSize: 14,
            fontFamily: "Exo"
        },
        width: 1000,
        height: 500,
        marginTop: 70,
        marginBottom: 80,
        marginRight: 50,
        marginLeft: 50,
        insetTop: 40,


    })

    d3.select('#chart').append(() => chart3)

})