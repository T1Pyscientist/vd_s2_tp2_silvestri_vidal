d3.csv('astronautas.csv', d3.autoType).then(data => {

    // Total astronautas por genero
    let chart = Plot.plot({
        marks: [
            Plot.barY(data,
                Plot.groupX({ y: 'count' }, { x: 'ocupacion', sort: { x: 'y', reverse: true } })
            )

        ],

        x: { grid: false, line: true },
        y: { grid: true, line: false, domain: [0, 80] },

        style: {
            backgroundColor: "1f1f1f",
            color: 'rgb(107, 174, 214)'
        },

        marginTop: 35,
        marginBottom: 50,

    })

    d3.select('#chart').append(() => chart)
})