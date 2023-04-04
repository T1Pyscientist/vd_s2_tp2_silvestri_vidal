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

            Plot.axisX({label: null, lineWidth:8}),
            Plot.axisY({label: null, color: "RBG(255,255,255,0.0)"})
        ],

        style: {
            backgroundColor: "282828",
            color: "white",
            fontFamily: "Exo, sans-serif",
            fontSize: 14,
        },

        margin: 50,
        width: 900

    })

    d3.select('#chart').append(() => chart)
})