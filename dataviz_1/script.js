d3.csv('astronautas.csv', d3.autoType).then(data => {

    // Proporcion de astronautas por profesion
    let chart = Plot.plot({
        marks: [
            Plot.barY(data,
                Plot.groupX(
                    { y: 'count' }, 
                    { x: 'ocupacion', 
                        sort: { x: 'y', reverse: true }, 
                        fill: (d) => (d.ocupacion == "ingeniero aeroespacial" ? "#5E9ABD" : "#3E667D")
                    })
            ),

            // // Add text labels to the top of each bar
            Plot.text(data,
                Plot.groupX(
                    { y: 'count', text: "count" },
                    { x: 'ocupacion',
                        sort: { x: 'y', reverse: true }, 
                        dy: -10,
                        fontSize: 16,
                        fontFamily: "Exo, sans-serif",
                    }),
            ),
        ],

        x: { grid: false, line: true },
        y: { grid: true, line: false, domain: [0, 85], label: "↑ Porcentaje (%)" },

        style: {
            backgroundColor: "1f1f1f",
            color: '#6BAED6'
        }

    })

    d3.select('#chart').append(() => chart)
})